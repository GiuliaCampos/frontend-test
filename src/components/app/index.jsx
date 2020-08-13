import 'regenerator-runtime/runtime'
import React, {useState, useEffect, useCallback} from 'react';

import Theme from '../theme';
import Layout from '../layout';
import styled from "styled-components";

import H1 from './H1';
import Select from './Dropdown';
import Option from './Option';
import Button from './Button';
import Table from './Table';
import Input from './Input';

import Country from '../../api/country';

const FormArea = styled.div `
  @media only screen and (min-width: 768px) {
    display: table-caption;
  }
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`

function Index(){
  const [countries, setCountries] = useState([]);
  const [countriesAdd, setCountriesAdd] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('AFGHANISTAN');
  const [population, setPopulation] = useState();

  const orderCountriesByPopulation = useCallback(() => {
    let aux = [];
    aux = countriesAdd;
    aux.sort(function(a,b){
      return a.population - b.population
    });
    console.log(aux);
    setCountriesAdd(aux);
  }, [countriesAdd]);

  const orderCountriesByName = useCallback(() => {
    let aux = [];
    aux = countriesAdd;
    aux.sort(function(a,b){
      if(a.name < b.name)
        return -1
      if(a.name > b.name)
        return 1
      return 0
    });
    console.log(aux);
    setCountriesAdd(aux);
  }, [countriesAdd]);


  function deleteCountry(p){
    let aux = [];
    aux = countriesAdd;
    aux.forEach(pais => {
      if(p.name === pais.name){
        aux.splice(aux.indexOf(pais), 1)
      }
    });
    setCountriesAdd(aux);
  }

  function handleSubmmit(){
    let aux = '';
    let add = false;
    countries.map(p => {
      if(p.name === selectedCountry){
        p.population = population;
        aux = p;
      }
    });
    countriesAdd.map(p => {
      if(p.name === aux.name){
        p.population = aux.population
        add = true;
      }
    });
    if(!add){
      setCountriesAdd([...countriesAdd, aux]);
    }
  }

  useEffect(() => {
    const loadCountries = async() => {
      try{
        const response = await Country();
        response.map(pais => (
          pais["population"] = 0
        ));
        setCountries(response);
      }catch(err){
        alert("An error has occurred! Try again");
      }
    }
    loadCountries();
  }, []);

  return(
    <Theme>
      <Layout>
        <H1>World Populations</H1>
        <FormArea>
          <form>
            <Select value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)} >
              {countries.map(pais => (
                <Option key={pais.code} value={pais.name}> {pais.name} </Option>
              ))}
            </Select>
            <Input 
              className="population" 
              type="number" 
              min="0" 
              value={population} 
              placeholder="Population" 
              required 
              onChange={e => setPopulation(e.target.value)} 
            />
            <Button label="Add" color="quaternary" onClick={handleSubmmit}/>
          </form>
        </FormArea>
        <Table 
          data={countriesAdd} 
          callbackFunctionOrderByName={orderCountriesByName} 
          callbackFunctionOrderByPopulation={orderCountriesByPopulation}
        />
      </Layout>
    </Theme>
  )
};

export default Index;

import 'regenerator-runtime/runtime'
import React, {useState, useEffect, useCallback} from 'react';

import Theme from '../../theme';
import Layout from '../../layout';
import styled from "styled-components";

import {useCountries} from '../../hooks/Countries';

import H1 from '../H1';
import Select from '../Dropdown';
import Option from '../Option';
import Button from '../Button';
import Table from '../Table';
import Input from '../Input';

import Country from '../../../api/country';


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
  const {countriesAdd, setCountriesAdd} = useCountries();
  const [selectedCountry, setSelectedCountry] = useState('AFGHANISTAN');
  const [population, setPopulation] = useState('');

  const orderCountriesByPopulation = useCallback(() => {
    setCountriesAdd([...countriesAdd].sort(function(a,b){
      return a.population - b.population
    }));
  }, [countriesAdd, setCountriesAdd]);

  const orderCountriesByName = useCallback(() => {
    setCountriesAdd([...countriesAdd].sort(function(a,b){
      if(a.name < b.name)
        return -1
      if(a.name > b.name)
        return 1
      return 0
    }));
  }, [countriesAdd, setCountriesAdd]);

  const deleteCountry = () => {
    let aux;
    countriesAdd.forEach(country => {
      if(selectedCountry === country.name){
        aux = countriesAdd.indexOf(country);
      }
    });

    setCountriesAdd([...countriesAdd].splice(aux, 1));
  }

  const handleSubmmit = useCallback(() => {
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
    setPopulation('');
  }, [countries, selectedCountry, countriesAdd, population]);

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
              {countries.map(country => (
                <Option key={country.code} value={country.name}> {country.name} </Option>
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
            <Button label="Remove Country" color="quaternary" onClick={deleteCountry} />
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
}

export default Index;

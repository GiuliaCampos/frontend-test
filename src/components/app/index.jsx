import 'regenerator-runtime/runtime'
import React, {useState, useEffect} from 'react';
import Theme from '../theme';
import Layout from '../layout';
import H1 from './H1';
import Button from './Button';
import Table from './Table';
import Country from '../../api/country';
import styled from "styled-components";

const FormArea = styled.div `
  diplay = row;
`
const Input = styled.input `
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 300px;
  height: 40px;
  border-color: #fff;
  border-radius: 50px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 5px 6px -3px #000;

  &.numeroPopulacao{
    width: 180px;
  }
`
const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 300px;
  height: 40px;
  border-color: #fff;
  border-radius: 50px;
  margin: 20px;
  box-shadow: 0px 5px 6px -3px #000;
`
const Option = styled.option`
  width: 300px;
  height: 40px;
  border-color: #fff;
  border-radius: 50px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 5px 6px -3px #000;
`

function Index(){
  const [paises, setPaises] = useState([]);
  const [paisesAdd, setPaisesAdd] = useState([]);
  const [paisSelecionado, setPaisSelecionado] = useState('');
  const [numeroHabitantes, setNumeroHabitantes] = useState();

  function handleSubmmit(){
    let aux = '';
    let adicionada = false;
    paises.map(p => {
      if(p.name === paisSelecionado){
        p.population = numeroHabitantes;
        aux = p;
      }
    });
    paisesAdd.map(p => {
      if(p.name === aux.name){
        p.population = aux.population
        adicionada = true;
      }
    });
    if(!adicionada){
      setPaisesAdd([...paisesAdd, aux]);
    }
  }

  useEffect(() => {
    const loadCountries = async() => {
      try{
        const response = await Country();
        response.map(pais => (
          pais["population"] = 0
        ));
        setPaises(response);
      }catch(err){
        console.log("Ocorreu um erro: " +err);
      }
    }
    loadCountries();
  }, []);

  return(
    <Theme>
      <Layout>
      <H1>Populações Mundiais</H1>
      <FormArea>
          <form>
            <Select 
              id="paises" 
              value={paisSelecionado} 
              onChange={e => setPaisSelecionado(e.target.value)}
            >
              {paises.map(pais => (
                <Option key={pais.code} value={pais.name}>{pais.name}</Option>
              ))}
            </Select>
            <Input 
              className="numeroPopulacao" 
              type="number" 
              id="numeroPopulacao" 
              min="0" 
              value={numeroHabitantes}
              placeholder="Habitantes"
              required
              onChange={e => setNumeroHabitantes(e.target.value)}
            />
            <Button label="Adicionar" color="quaternary" onClick={handleSubmmit}/>
          </form>
        </FormArea>
      <Table data={paisesAdd} />
      </Layout>
    </Theme>
  )
};

export default Index;

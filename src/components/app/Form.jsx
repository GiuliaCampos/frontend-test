import React, {useState} from 'react';
import Button from './Button';
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

function Form({data}) {
    const [paisSelecionado, setPaisSelecionado] = useState('');
    const [numeroHabitantes, setNumeroHabitantes] = useState();

    function handleSubmmit(){
        console.log(paisSelecionado);
        console.log(numeroHabitantes);
    }
    return (
        <FormArea>
          <form>
            <Select 
              id="paises" 
              value={paisSelecionado} 
              onChange={e => setPaisSelecionado(e.target.value)}
            >
              {data.map(pais => (
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
    );
}

export default Form;
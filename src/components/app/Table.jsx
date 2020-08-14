import React, {useEffect, useState} from 'react';

import{
  SwapVert as Swap,
} from "@material-ui/icons"

import { style } from '../../configs/theme';
import styled from "styled-components";

import {useCountries} from '../hooks/Countries'

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
  @media only screen and (min-width: 768px){
    font-size: 2.5rem
  }
  @media only screen and (min-width: 992px){
    font-size: 1rem
  }
`

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-family: ${props => props.theme.headerFontFamily};
`

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-family: ${props => props.theme.headerFontFamily};
`
const Tr = styled.tr`
  background-color: #fff;
  & :nth-child(1){
      background-color: #FAB2AC;
  }
  & :nth-child(2n){
    background-color: #FFE8E7;
  }
`

const ButtonIcon = styled.button`
  background-color: #F46357;
  border-radius: ${style('radius')};
  box-shadow: ${style('shadow.small')};
  border: none;
  color: #fff;
  margin: 0px 20px;
  height: 40px;
  width: 40px;
`

function Tabela({data, callbackFunctionOrderByName, callbackFunctionOrderByPopulation}){
  const {countriesAdd, setCountriesAdd} = useCountries();

  return(
    <Table>
      <tbody>
        <Tr>
          <Th>
            Name
            <ButtonIcon onClick={callbackFunctionOrderByName}><Swap /></ButtonIcon>
          </Th>
          <Th>
            Population
            <ButtonIcon onClick={callbackFunctionOrderByPopulation}><Swap /></ButtonIcon>
          </Th>
        </Tr>  
        {countriesAdd.map(country => (
          <Tr key={country.code}>
            <Td>{country.name}</Td>
            <Td>{country.population}</Td>
          </Tr>
          ))}
      </tbody>
    </Table>
  );
}

export default Tabela;
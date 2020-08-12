import React from 'react';
import{
  Delete as Trash
} from "@material-ui/icons"
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
`

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`
const Tr = styled.tr`
  background-color: #dddddd;
  & :nth-child(1){
      background-color: #FAB2AC;
  }
`

export default () => (
    <Table>
        <Tr>
            <Th>Nome</Th>
            <Th>População</Th>
            <Th>Ações</Th>
        </Tr>
        <Tr>
            <Td>Brasil</Td>
            <Td>50</Td>
            <Td>botões</Td>
        </Tr>
        <Tr>
            <Td>Argentina</Td>
            <Td>400</Td>
            <Td>botões</Td>
        </Tr>
        <Tr>
            <Td>EUA</Td>
            <Td>400</Td>
            <Td>botões</Td>
        </Tr>
        <Tr>
            <Td>Reino Unido</Td>
            <Td>400</Td>
            <Td>botões</Td>
        </Tr>
    </Table>
);
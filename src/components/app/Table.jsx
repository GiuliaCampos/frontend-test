import React from 'react';
import{
  Delete as Trash,
  SwapVert as Swap,
  Edit,
  FilterFrames,
} from "@material-ui/icons"
import { style } from '../../configs/theme';
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

function Tabela({data}){

  return(
    <Table>
        <Tr>
            <Th>
              Nome
              <ButtonIcon><Swap /></ButtonIcon>
            </Th>
            <Th>
              População
              <ButtonIcon><Swap /></ButtonIcon>
            </Th>
            <Th>Ações</Th>
        </Tr>
        {data.map(pais => (
          <Tr key={pais.code}>
            <Td>{pais.name}</Td>
            <Td>0</Td>
            <Td>
              <ButtonIcon><Trash /></ButtonIcon>
              <ButtonIcon><Edit /></ButtonIcon>
            </Td>
        </Tr>
        ))}
    </Table>
  );
}

export default Tabela;
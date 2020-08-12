import 'regenerator-runtime/runtime'
import React, {useState, useEffect} from 'react';
import Theme from '../theme';
import Layout from '../layout';
import H1 from './H1';
import Table from './Table';
import Form from './Form';
import Country from '../../api/country';

function Index(){
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const loadCountries = async() => {
      try{
        const response = await Country();
        setPaises(response);
      }catch(err){
        console.log("Ocorreu um erro");
      }
    }
    loadCountries();
  }, []);

  return(
    <Theme>
      <Layout>
      <H1>Populações Mundiais</H1>
      <Form data={paises} />
      <Table data={paises} />
      </Layout>
    </Theme>
  )
};

export default Index;

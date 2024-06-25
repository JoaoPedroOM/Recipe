import React, { useContext } from 'react';
import Header from "../../components/Header";
import CardSection from '../../components/CardSection';
import { ApiContext } from "../../Hooks/useContext"

const Index = () => {
  const { data, loading, error } = useContext(ApiContext);

  return (
    <div>
      <Header />
      <main>
        {error ? (
          <p>Infelizmente algo de errado aconteceu...</p>
        ) : loading ? (
          <p>Carregando receitas...</p>
        ) : (
          data && <CardSection posts={data}/>
        )}
      </main>
    </div>
  );
};

export default Index;
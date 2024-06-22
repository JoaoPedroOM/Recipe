import React, { useEffect } from 'react';
import Header from "../../components/Header";
import useFetch from "../../Hooks/useFetch";
import { RECIPE_GET } from '../../Api/api';
import CardSection from '../../components/CardSection';

const Index = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchRecipe() {
      const { url, options } = RECIPE_GET();
      await request(url, options);
    }
    fetchRecipe();
  }, [request]);

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
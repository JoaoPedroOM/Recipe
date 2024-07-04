import React, { useContext } from "react";
import Header from "../../components/Header";
import CardSection from "../../components/CardSection";
import { ApiContext } from "../../Hooks/useContext";
import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading";
import Footer from "../../components/Footer";

const Index = () => {
  const { data, loading, error } = useContext(ApiContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {error ? (
          <div className="flex items-center justify-center h-screen">
            <div className="py-4 px-6 max-w-[1240px] mx-auto">
              <Error error={error} />
            </div>
          </div>
        ) : loading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="py-4 px-6 max-w-[1240px] mx-auto">
              <Loading />
            </div>
          </div>
        ) : (
          data && <CardSection posts={data} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;

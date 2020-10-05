import React, { useState } from "react";
import Helmet from "react-helmet";

import { Container } from "./styles/Container";
import { Title } from "./styles/Title";
import { InnerContainer } from "./components/innerContainer";
import ProductsDisplay from "./components/ProductsDisplay";
import FetchButton from "./components/button";
import LoadingMessage from "./components/LoadingMessage";

import GlobalStyle from "./styles/global";
const App = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(null);

  async function handleClick(buttonValue) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${buttonValue}`
    ).then((response) => response.json());
    console.log(response);
    setProduct({ ...response });
    setLoading(false);
  }

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <GlobalStyle />
      <Container>
        <Title>State exercise</Title>
        <InnerContainer>
          <FetchButton name="notebook" handleClick={handleClick} />
          <FetchButton name="tablet" handleClick={handleClick} />
          <FetchButton name="smartphone" handleClick={handleClick} />
        </InnerContainer>
        {loading && <LoadingMessage message={"Carregando"} />}
        {product ? (
          <ProductsDisplay product={product} />
        ) : (
          <LoadingMessage message={"Nenhum produto pesquisado"} />
        )}
      </Container>
    </>
  );
};

export default App;

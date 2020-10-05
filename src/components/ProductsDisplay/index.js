import React from "react";

import { Container, ProductCard } from "./styles";

const ProductsDisplay = ({ product }) => {
  console.log(product.fotos);
  return (
    <Container>
      <ProductCard>
        <img
          src={product.fotos[0].src}
          alt={product.fotos[0].titulo}
          title={product.fotos[0].titulo}
        ></img>
        <div>
          <h2>{product.nome}</h2>
          <p>
            <span>R$ {product.preco}</span>
          </p>
          <p>{product.descricao}</p>
        </div>
      </ProductCard>
    </Container>
  );
};

export default ProductsDisplay;

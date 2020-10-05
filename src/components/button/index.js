import React from "react";
import { Button } from "./style";

const FetchButton = ({ name, handleClick }) => {
  return (
    <Button value={name} onClick={({ target }) => handleClick(target.value)}>
      {name}
    </Button>
  );
};

export default FetchButton;

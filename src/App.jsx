import React, { useState } from "react";
import styled from "styled-components";
import Postback from "./components/Postback";
import Urlgenerator from "./components/Urlgenerator";

//MUI

import { Box, TextField, Button, ButtonGroup } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const H1 = styled.h1``;

const App = () => {
  const [options, setOptions] = useState(true);
  return (
    <Container>
      <H1>URL GENERATOR FOR SEDO</H1>

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={(e) => setOptions(true)}>Postback Generator</Button>
        <Button onClick={(e) => setOptions(false)}>Redirect Generator</Button>
      </ButtonGroup>
      {options ? <Postback /> : <Urlgenerator />}
    </Container>
  );
};

export default App;

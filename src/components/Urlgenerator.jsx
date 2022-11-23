import React, { useState } from "react";
import styled from "styled-components";

//MUI

import { Box, TextField, Button } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const H1 = styled.h1``;

const TextContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Urlgenerator = () => {
  const [postback, setPostback] = useState({
    pixel: "",
    token: "",
    url: "",
    kw1: "",
    kw2: "",
    kw3: "",
    kw4: "",
  });

  const [generated, setGenerated] = useState("");

  const onChangeHandle = (e) => {
    const newPostback = { ...postback };
    newPostback[e.target.id] = e.target.value;
    setPostback(newPostback);
    console.log(postback);
  };

  const onClickHandler = () => {
    setGenerated(
      `https://${postback.url}?pxtt[v]=2&pxtt[erp]=ViewContent&pxtt[id]=${postback.pixel}&network=tiktok&site=direct&kw1=${postback.kw1}kw2=${postback.kw2}kw3=${postback.kw3}kw4=${postback.kw4}&cttt[id]=${postback.pixel}&cttt[alias]=${postback.token}`
    );
  };
  return (
    <Container>
      <H1>Redirect Domain Generator</H1>
      <TextContainer>
        <TextField
          id="pixel"
          label="Insert Pixel"
          variant="outlined"
          onChange={(e) => onChangeHandle(e)}
        />
        <TextField
          id="token"
          label="Insert Token"
          variant="outlined"
          onChange={(e) => onChangeHandle(e)}
        />
        <TextField
          id="url"
          label="Insert Website URL"
          variant="outlined"
          onChange={(e) => onChangeHandle(e)}
        />
      </TextContainer>
      <TextContainer>
        <TextField
          id="kw1"
          label="keyword 1"
          variant="outlined"
          onChange={(e) => onChangeHandle(e)}
        />
        <TextField
          id="kw2"
          label="keyword 2"
          variant="outlined"
          onChange={(e) => onChangeHandle(e)}
        />
        <TextField
          id="kw3"
          label="keyword 3"
          variant="outlined"
          onChange={(e) => onChangeHandle(e)}
        />
        <TextField
          id="kw4"
          label="keyword 4"
          variant="outlined"
          onChange={(e) => onChangeHandle(e)}
        />
      </TextContainer>
      <Button variant="outlined" onClick={onClickHandler}>
        Generate Redirect Domain
      </Button>
      <Box sx={{ width: "100%" }}>
        <TextField
          disabled
          value={generated}
          multiline
          maxRows={4}
          sx={{ width: "100%" }}
        />
      </Box>
    </Container>
  );
};

export default Urlgenerator;

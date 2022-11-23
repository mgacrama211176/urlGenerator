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

const Postback = () => {
  const [postback, setPostback] = useState({
    pixel: "",
    token: "",
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
      `https://scripts.fastnclick.com/tiktok/tiktok_track.php?psw=n2z4r2h16cayq1rw&ttclid={ttclid}&ip={ip}&sid={sid}&pixel=${postback.pixel}&token=${postback.token}`
    );
  };

  return (
    <Container>
      <H1>PIXEL POSTBACK GENERATOR</H1>
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
      </TextContainer>
      <Button variant="outlined" onClick={onClickHandler}>
        Generate Postback
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

export default Postback;

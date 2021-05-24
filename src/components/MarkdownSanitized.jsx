import React, { useContext } from 'react';
import styled from "styled-components";
import MarkdownContext from "../MarkdownContext";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  boarder-right: 1.5px solid rgba(15, 15, 15, 0.4);
  font-family: 'monospace';
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  color: dodgerblue;
  boarder-right: 1px solid rgba(15, 15, 15, 0.3);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
  background-color: #F0F0F0;
`;

export function MarkdownSanitized() {
  
  const { setMarkdownText } = useContext(MarkdownContext);

  const onInputChange = e => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  }

  return <Container>
    <Title>Enter Markdown</Title>
    <TextArea onChange={onInputChange}/>
  </Container>
}
  
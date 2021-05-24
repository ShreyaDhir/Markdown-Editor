import React, { useContext } from 'react';
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';
// import MarkdownSanitized from './MarkdownSanitized'
import MarkdownContext from "../MarkdownContext";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
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

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
`;

export function OutputArea() {

  const {markdownText} = useContext(MarkdownContext);

  return (
  <Container>
    <Title>Output</Title>
    <ResultArea>
      <ReactMarkdown children={markdownText} /> 
    </ResultArea>
  </Container>
  )
}

// export default OutputArea;
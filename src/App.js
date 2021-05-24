import React, { useState } from 'react'
import './App.css';
import styled from "styled-components"; 
import { MarkdownSanitized } from "./components/MarkdownSanitized";
import { OutputArea } from './components/OutputArea';
import MarkdownContext from "./MarkdownContext";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: felx;
  flex-direction: column;
  align-items: center;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default function App() {
  
  const [markdownText, setMarkdownText] = useState("")
  
  const contextValue = {
    markdownText,
    setMarkdownText
  }

  return (
    <MarkdownContext.Provider value={contextValue}>
    <AppContainer>
      <EditorContainer>
        <MarkdownSanitized />
        <OutputArea />
      </EditorContainer>
    </AppContainer>
    </MarkdownContext.Provider>
  );
}


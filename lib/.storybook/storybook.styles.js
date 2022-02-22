import styled from 'styled-components';

export const StoryPaper = styled.div`
  padding: 4px;
  position: relative;
  width: 100%;
  overflow-x: auto;
  padding: 1rem;
`;

export const ThemeToggler = styled.button`
  font-family: sans-serif;
  font-size: 12px;
  display: block;
  position: fixed;
  border: none;
  background: rgb(2, 122, 197);
  color: rgb(255, 255, 255);
  padding: 5px 15px;
  cursor: pointer;
  top: 0;
  right: 0;
  border-radius: 0px 0px 0px 5px;
  z-index: 9999;
`;

import styled, { css } from 'styled-components';

export default styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  background: green;
  margin: 20px 10px;
  color: white;

  
  ${(props) =>
    props.background &&
    css`
      background: ${(props) => props.background};
    `}

  &:hover {
    background: darkgreen;
    text-decoration: underline; /* Tambahkan efek underline */
  }
`;

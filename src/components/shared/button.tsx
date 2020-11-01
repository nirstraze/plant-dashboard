import styled from 'styled-components';

const Button = styled.div`
  font-size: 14px;
  font-weight: bold;
  background-color: #18191A;
  border: 1px solid grey;
  border-radius: 5px;
  width: fit-content;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
  :hover{
    border: 1px solid orange;
  }
`;

export default Button;

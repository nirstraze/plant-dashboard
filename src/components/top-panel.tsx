import React from 'react';
import styled from 'styled-components';

export const TopPanel = () => {  
  return (
    <Container>      
      <img
        src="http://www.ecoplant.co/wp-content/uploads/2020/10/Ecoplant-Negative-Full-Color.png"
        width="200"
        height="30"
        alt=''
      ></img>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0px 5px
`;
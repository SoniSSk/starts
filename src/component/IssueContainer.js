import styled from 'styled-components';
import React from 'react';
import IssueBox from './IssueBox';

const Container = styled.div`
    
    border: 1px solid #e1e4e8;
    width: 88%;
    height: 400px;
    border-top: none;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
   
    border-radius: 0 0 5px 5px ;
   
    position: relative;
    cursor : ponter;
        align-items: center;
    justify-content : space-between;
    
      @media (max-width: 820px) {
        flex-direction : column;
      }
`;





const IssueContainer = () => (
  <Container>
    <div style={{ width:"100%", height:"100%",overflow:"scroll"}}>
   <IssueBox></IssueBox>
   <IssueBox></IssueBox>
   <IssueBox></IssueBox>
   <IssueBox></IssueBox>
   <IssueBox></IssueBox>
   <IssueBox></IssueBox>
   <IssueBox></IssueBox>
   <IssueBox></IssueBox>
   <IssueBox></IssueBox>
   <IssueBox></IssueBox>
   <IssueBox></IssueBox>
   <IssueBox></IssueBox>
   <IssueBox></IssueBox>
   <IssueBox></IssueBox>
   <IssueBox></IssueBox>
  
    </div>
   
   
  </Container>
);

export default IssueContainer;

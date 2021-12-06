import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
    
    border: 1px solid #e1e4e8;
    width: 88%;
    border-top: none;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    padding-top : 10px;
    
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
    <div style={{overflow: "auto"}}>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        <div><p>skjhfdsfjlsnfsd</p><br/></div>
        
        <p>skjhfdsfjlsnfsd</p><br/>
        <p>skjhfdsfjlsnfsd</p><br/>
        <p>skjhfdsfjlsnfsd</p><br/>
        <p>skjhfdsfjlsnfsd</p><br/>
        <p>skjhfdsfjlsnfsd</p><br/>
        <p>skjhfdsfjlsnfsd</p><br/>
        <p>skjhfdsfjlsnfsd</p><br/>
        <p>skjhfdsfjlsnfsd</p><br/>
        <p>skjhfdsfjlsnfsd</p><br/>
        <p>skjhfdsfjlsnfsd</p><br/>
        <p>skjhfdsfjlsnfsd</p><br/>
    </div>
   
  </Container>
);

export default IssueContainer;


import React from 'react'
import styled from 'styled-components';
import IssueOpenedSVG from './commons/svg/IssueOpenedSVG';


const IssueWrapper = styled.div`
   border :  1px solid #e1e4e8;
   background-color : #fff;
   height:80px;
   font-size:16px;
   display : flex;
   flex-direction : column;
   
   &:hover {
     background-color : #f6f8fa;
   }
`;
function IssueBox() {
    return (
        <IssueWrapper>
              <div style={{
                  paddingLeft:"10px",
                  textAlign:"left",
                  justifyContent:"left",
                  marginTop:"10px", float:"left"}}>
              <IssueOpenedSVG color="grey" />
              </div>
        </IssueWrapper>
    )
}

export default IssueBox

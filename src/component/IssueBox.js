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
const IssueDetailHeader = styled.h1`
    font-weight: 400;
    line-height: 1.125;
    margin-bottom: 0;
    margin-right: 150px;
    word-wrap: break-word; 
`;
const IssueDetailContainer = styled.div``;
function IssueBox() {
    return (
        <IssueWrapper>
            <IssueDetailContainer>
            {/* <IssueDetailHeader> <span><IssueOpenedSVG color="green" /> Kuldeeps okja,ndkjd,mnskfj,snfsk,nfskjf,mnsd,jsm</span></IssueDetailHeader> */}
            </IssueDetailContainer>
              <div style={{
                  paddingLeft:"10px",
                  textAlign:"left",
                  justifyContent:"left",
                  marginTop:"10px", float:"left"}}>
              <span><IssueOpenedSVG color="green" /> Kuldeeps okja,ndkjd,mnskfj,snfsk,nfskjf,mnsd,jsm</span>
             
              </div>
        </IssueWrapper>
    )
}

export default IssueBox

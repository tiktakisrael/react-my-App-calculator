import styled from "styled-components"

const RedultDiv = styled.div`
// display: flex;
// height:20px;
// width: 358px;
`;
const DisplayResult = function(props){
    return(
        <RedultDiv className={'DisplayResult'}>
            <p >
             {props.result}
            </p>
            
        </RedultDiv>
    )
}
export default DisplayResult
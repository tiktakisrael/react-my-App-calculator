import DisplayKnolage from "./DisplayKnolage";
import DisplayResult from "./DisplayResult";
import styled from "styled-components";

const DisplayDiv = styled.div`
display: flex;
flex-direction: column;
color: black;
// height:20px;
// width: 358px;
// vertical-align: top;
// box-sizing: border-box;


`;
const CalculatorDisplay = function(props){
    return(
        <DisplayDiv className={'CalculatorDisplay'} >
            <DisplayKnolage  current={props.current} />
            <DisplayResult result={props.result} />
        </DisplayDiv>
    )
}
export default CalculatorDisplay;


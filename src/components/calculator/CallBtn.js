import Button1 from './Button1';
import styled from 'styled-components';

const CallBtnDiv = styled.div`
// align-content: center;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
height: 400px;
width: 350px;
box-sizing: border-box;
`;
// const themes = function(){
    // Button1.defaultprops[theme] = 'orange';
// }
// document.querySelector('.btn').
const CallBtn = function(props){
    return(
        <CallBtnDiv className={'CallBtn'} >{props.array.map(function(btn){
            return(
                    <Button1 onClick={btn.onClick}
                             color={btn.color}
                             char={btn.char}
                             current={props.current} />
                )}
         ) }</CallBtnDiv>
    )
}
export default CallBtn;
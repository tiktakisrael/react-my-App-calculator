// const { default: Button1 } = require("./Button1")
import Button1 from './Button1';
// import styled from 'styled-components';
// const DivBtnStyle = styled.div`
// backgruond-color: blue;
// `
// const themes = function(){
    // Button1.defaultprops[theme] = 'orange';
// }
// document.querySelector('.btn').
const CallBtn = function(props){
    return(
        <>
        {/* <button onClick = {themes}>🖤</button> */}
        <div className={'CallBtn'} >{props.array.map(function(btn){
            return(
                    <Button1 onClick={btn.onClick}
                             color={btn.color}
                             char={btn.char}
                             current={props.current} />
                )}
         ) }</div>
        </>
    )
}
export default CallBtn;
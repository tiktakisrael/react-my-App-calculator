import styled from 'styled-components';
const Button = styled.button`
background-color : red;
color : blue;
`
// const send = function(){
// alert('hi')
// };
const SendButton = function({addArticle}){
    return(
        <Button className='sendButton' onClick={addArticle}>send</Button>
    )
}
export default SendButton;
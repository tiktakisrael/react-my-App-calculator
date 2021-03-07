import styled from 'styled-components';

const Button = styled.button`
background-color = red;
`

const send = function(){
alert('hi')
};


const SendButton = function(props){
    return(
        <Button className='sendButton' onClick={send}>send</Button>
    )
}
export default SendButton;
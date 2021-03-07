import { useState } from "react";
import SendButton from "./sendButton";
import styled from 'styled-components';

const Div = styled.div`
display: flex;
flex-direction: column;
color: black;
// width: 500px;
// height: 50px;
`
const Input = styled.input`
    width: 500px;
    height: 50px;
`
const InputBody = styled.input`
    width: 500px;
    height: 700px;
`
const CreateArticle = function(props){

    let [array, setArray ] = useState([]);
    const addArticle = ()=>{
        array.push({
            title:document.querySelector('.title').value,
            nameArt:document.querySelector('.nameArt').value,
            textBody:document.querySelector('.textBody').value
        });
        setArray(
            array
        );
        console.log(array);
    }
    return(
        <Div className= 'createArticle'>
            {/* <p>{array}</p> */}
            <span>title</span>
            <Input className='title'></Input>
            <span>nameArt</span>
            <Input className='nameArt'></Input>
            <span>textBody</span>
            <InputBody className='textBody'></InputBody>
            <SendButton addArticle={addArticle} />
        </Div>
    )
}
export default CreateArticle;
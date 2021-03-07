import { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CallBtn from "./CallBtn";
import { create, all } from 'mathjs';
import styled from 'styled-components';
const config = { };
const math = create(all, config);

const MainDiv = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 550px;
    width: 400px;
    padding: 20px;
    box-sizing: border-box;
`;
const Calculator = function(){
    
    let [current, setCurrent] = useState('');
    const onClick = (char, current)=>{
        char === '.' && result === math.evaluate(current) && current[current.length-1] !== 0?
        setCurrent(current = result + String(char)):
        setCurrent(current += char);
    };

    let [result, setResult] = useState(0);
    const displayResult = ()=>{
        setResult(result = math.evaluate(current)) 
    }

    const cencel = ()=>{
        setResult(0);setCurrent('');
    }
    const cencel1 = ()=>{
        setCurrent(current = current.slice(0,current.length-1));
    }
    const isValid = function(char, current) {
        const sto=[];
        const sto2=[];
        for(let i=0; i<current.length ;i++){
            if(current[i] === '(' ){
                sto.push([i]);
            }else if( current[i] === ')' ){
                current[i] === ')' && sto[sto.length-1] === '(' ? sto.pop()
               :sto2.push(current[i]);
            }
        } 
    return sto.length === 0 
        && sto2.length === 0 
        && current[current.length-1] !== '+' 
        && current[current.length-1] !== '-' 
        && current[current.length-1] !== '*' 
        && current[current.length-1] !== '/' 
        && current[current.length-1] !== '.' 
    };
    const btnE = (char,current)=>{
        isValid(char, current) && displayResult();
    }
    const btnPMCH = (char, current)=>{
       (current[current.length-1] === '+' ||
        current[current.length-1] === '-' ||
        current[current.length-1] === '*' ||
        current[current.length-1] === '/' )?
        setCurrent(current = current.slice(0,current.length-1) + char):
        current.includes('(') ? 
        onClick(char, current):
        result === math.evaluate(current)?
        setCurrent(current = result + String(char)):
        onClick(char, current)
    }
    // {onClick:onClick,char:'(',color:'yellow'},{onClick:onClick,char:')',color:'yellow'},{onClick:onClick,char:'^',color:'yellow'},{onClick:onClick,char:'.',color:'yellow'},
    const array = [
    {onClick:btnPMCH,char:'+',color:'#69f0ae'},
    {onClick:btnPMCH,char:'-',color:'#69f0ae'},
    {onClick:btnPMCH,char:'*',color:'#69f0ae'},
    {onClick:btnPMCH,char:'/',color:'#69f0ae'},
    {onClick:onClick,char:0,color:'#ffcdd2'},
    {onClick:onClick,char:1,color:'#f8bbd0'},
    {onClick:onClick,char:2,color:'#e1bee7'},
    {onClick:onClick,char:3,color:'#d1c4e9'},
    {onClick:onClick,char:4,color:'#c5cae9'},
    {onClick:onClick,char:5,color:'#bbdefb'},
    {onClick:onClick,char:6,color:'#b3e5fc'},
    {onClick:onClick,char:7,color:'#b2ebf2'},
    {onClick:onClick,char:8,color:'#b2dfdb'},
    {onClick:onClick,char:9,color:'#c8e6c9'},
    {onClick:cencel1,char:'c1',color:'#dcedc8'},
    {onClick:cencel,char:'c',color:'#f0f4c3'},
    {onClick:btnE,char:'=',color:'white'},
    {onClick:onClick,char:'^',color:'yellow'},
    {onClick:onClick,char:'.',color:'yellow'}];
    
    return(
        <MainDiv>
            <CalculatorDisplay  displayResult={displayResult} current={current} result={result}/> 
            <CallBtn array= {array} current={current} />
        </MainDiv>
    )
}
export default Calculator;




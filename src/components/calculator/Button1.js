import styled from 'styled-components';

const theme = {
    orange: {
        default: '#212121',
        hover: '#424242'
    },
    blue:{
        default:'#2196f3',
        hover:'#1976d2'
    },
    red:{
        default:'red',
        hover:'red'
    }
}
const Button = styled.button`
margin: 3px 3px;
font-size: 30px;
padding: 10px;
height: 60px;
width: 80px;
box-sizing: border-box;
background-color: ${props => theme[props.theme].default};
color: white;
border-radius: 15px;
outline: 0;
box-shadow: 0px 2px 2px lightgray;
text-transform: uppercase;
cursor: pointer;
transition: ease background-color 250ms;
font-weight: bold;
&:hover{
    transform: translateY(-3px);
    background-color: ${props => theme[props.theme].hover};
};

&:disable{
    cursor: default;
    opacity: 0.7;
}
`;
Button.defaultProps = {
    theme:'blue'
};
// const themes = function(){
    // Button1.defaultprops[theme] = 'orange';
// }

const Button1 = function(props){
    return(
        <div className= {props.char}>
                <Button  onClick={() => props.onClick(props.char,props.current)}
                        style={{color:props.color}}
                        >
                       {props.char}
                </Button>
      </div>
    )
}
export default Button1;




/*
padding: '10px',
border: '1px solid green',
display: 'block',
marginLeft: 'auto',
marginRight: 'auto',
width: '50%',
textAlign: 'center',
fontFamily: 'sans-serif'
color: #ba68c8,*/
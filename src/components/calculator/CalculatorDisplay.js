import DisplayKnolage from "./DisplayKnolage";
import DisplayResult from "./DisplayResult";

const CalculatorDisplay = function(props){
    // console.log(props);
    return(
        <div className={'CalculatorDisplay'} >
            <DisplayKnolage  current={props.current} />
            <DisplayResult result={props.result} />
        </div>
    )
}
export default CalculatorDisplay;


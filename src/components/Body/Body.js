import object1  from "../object1/object1";
import RenderPoll from 'components/ozObject/ozObject';
import logo from './../../logo.svg';
import { NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Calculator from "components/calculator/calculator";
import Random from "components/calculator/Random";

const BodyComponent = function () {
    const showNotification = () => {
        NotificationManager.success('Success message', 'כל הכבוד איתן');}
    return(
    <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p> Edit <code>src/App.js</code> and save to reload.</p> */}
        {/* <a */}
        {/* // className="App-link" */}
        {/* // href="https://reactjs.org" */}
        {/* // target="_blank" */}
        {/* // rel="noopener noreferrer" */}
        {/* // > */}
        {/* // Learn React */}
        {/* // </a> */}
        {/* <RenderPoll object ={object1}/> */}
        {/* <Random/> */}
        {/* <button onClick={showNotification}> show notification</button> */}
        <Calculator/>
    </header>
    )
}
export default BodyComponent;
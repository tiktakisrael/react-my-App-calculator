import logo from './logo.svg';
import './App.css';
import BodyComponent from './components/Body/Body';
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function App() {

  return (
    <div className="App">
      <NotificationContainer/>
      <BodyComponent/>
    </div>
  );
}

export default App;

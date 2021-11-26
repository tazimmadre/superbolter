import '../App.css';
import Card from './Card';
import Header from './Header';
import CardDetails from "./CardDetails";
import {BrowserRouter as Router,Route} from 'react-router-dom';
const App=()=> {
  return (
    <div className="ui container">
      <Router>
          <Route path="/"  component={Header}/>
          <Route path="/" exact component={Card} />
          <Route path="/view" exact component={CardDetails}/>

      </Router>
    </div>
  );
}

export default App;

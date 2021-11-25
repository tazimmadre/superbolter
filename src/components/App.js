import '../App.css';
import Card from './Card';
import Header from './Header';
import CardDetails from "./CardDetails";
import {BrowserRouter,Route} from 'react-router-dom';
const App=()=> {
  return (
    <div className="ui container">
      <BrowserRouter>
          <div>
          <Route path="/"  component={Header}/>
          <Route path="/" exact component={Card} >
            <Card/>
            </Route>
          <Route path="/view" exact component={CardDetails}>
            <CardDetails/>
            </Route>
            </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

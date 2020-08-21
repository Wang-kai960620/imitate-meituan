import React from "react";
import {Switch, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Find} from "./pages/Find";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/find' exact>
          <Find/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

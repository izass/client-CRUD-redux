import {
  Switch,
  Route,
} from "react-router-dom"

import Landing from './pages/Landing'
import NewClient from './pages/NewClient'
import NotFound from './pages/NotFound'


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/newclient" component={NewClient} />
      <Route exact path="/client/:id" component={NewClient} />
      <Route path="*" component={NotFound}/>
    </Switch>
  );
}

export default App;

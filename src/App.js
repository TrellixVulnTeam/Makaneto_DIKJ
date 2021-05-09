import './App.scss';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Users from './user/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Index from './landing/pages/Index'

const App=()=> {
  return   (  <Router>
    
    
    <Switch>
      <Route path="/" exact > 
        <Index/>
      </Route>
      <main>
      <MainNavigation/>
      <Route path="/users" exact > 
        <Users/> 
      </Route>
      <Route path="/:userId/places" exact>
        <Users/>
      </Route>
      <Route path="/places/new" exact>
        
            <h1>salam</h1>
      </Route>
      <Redirect to="/"/>
      </main>
    </Switch>
   
   
    
  
</Router>)




}

export default App;

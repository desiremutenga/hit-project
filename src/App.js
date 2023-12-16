import React from 'react';
import './App.css'
import Map from './Map';
import Sidebar from './components/Sidebar';
import Teacher from './components/Teacher';
import{BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import SchoolsTable from './components/Schools';
import Headmaster from './components/Headmasters';
import Search from './components/Search'
import Dropdown from './components/dropdown';
import MapSearch from './components/MapSearch';
function App() {


  return (
      <>
        <div style={{ display: 'flex' }}>
          <Router>
          <Sidebar />
            <Switch>
            <Route exact path ='/'>
              <div>
                <Dropdown/>
              </div>
                
              </Route>
              <Route exact path ='/teachers'>
                <div>
                <Search/>
                <Teacher/>
                </div>
              </Route>
              <Route exact path ='/schools'>
                <div>
                {/* <AssetsTable/> */}
                <SchoolsTable/>
                </div>
              </Route>
              <Route exact path ='/map'>
              <div> 
                <div style={{display:'flex'}}> 
                   <Dropdown/>
                   {/* <MapSearch/>  */}
                </div>
                {/* <Map/> */}
              </div>
              </Route>
              <Route exact path ='/headmasters'>
                <div>
                   <Headmaster/> 
                </div>
              </Route>
            </Switch>
          </Router>
        </div>
      </>

  );
}

export default App;

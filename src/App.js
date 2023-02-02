import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AddDataStudent from './Components/AddDataStudent';
import EditStudData from './Components/EditStudData';
import LoginPg from './Components/LoginPg';
import Students from './Components/Students';
import ViewStudent from './Components/ViewStudent';
import { data } from './Data/Data';

function App() {
  const [stud,setStud] = useState(data)
  return (
    <div className='App'>
      <Switch>
        <Route exact path="/">
          <LoginPg/>
        </Route>
        <Route exact path="/students">
          <Students stud={stud} setStud={setStud}/>
        </Route>
        <Route path="/addStudents">
           <AddDataStudent stud={stud} setStud={setStud}/>
        </Route>
        <Route path="/edit/:idx">
          <EditStudData stud={stud}/>
        </Route>
        <Route path="/view/:idx">
          <ViewStudent stud={stud} setStud={setStud}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;

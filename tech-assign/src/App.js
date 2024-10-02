import logo from './logo.svg';
import './App.css';
import LogInPage from './Components/LogInPage';
import Dashboard from './Components/Dashboard';
import { Route, Routes } from 'react-router';
import ProjectList from './Components/ProjectList';
import ProjectCreate from './Components/ProjectCreate';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={ <LogInPage/>}/>
        <Route path='/dashboard' element={ <Dashboard/>}/>
        <Route path='/list' element={ <ProjectList/>}/>
        <Route path='/add' element={ <ProjectCreate/>}/>
        <Route path='/signup' element={ <SignUp/>}/>
      </Routes>
     
     
    </div>
  );
}

export default App;

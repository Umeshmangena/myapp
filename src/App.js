import './App.css';
import Header from './Components/Slidebar';
import Content from './Components/Content';
import Home from './Components/Home';
import Shorts from './Components/Shorts';
import { BrowserRouter, Routes,Route,Link} from 'react-router-dom';
import Hooks from './Components/Hook';
import axios from 'axios';
import { createContext } from 'react';
import { useState } from 'react';
import Products from './Components/Products';
import Conexpo from './Components/Conexpo';
import { User } from './Components/Users';
import { Adduser} from './Components/Adduser';
export const store = createContext();
//hello
function App() {
  let students = [{
    name: "uma mangena",
    age: 19
  }
]
const [data, setData] = useState(students)
  return (
    <>
    <BrowserRouter>
    <store.Provider value={[data, setData]}>
    <div className='row'>
      <User/>
      <Header/>
      {/* <Hooks/> */}
      <Conexpo/>

    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Shorts' element={<Shorts/>}></Route>
      </Routes>
    </div>
    </store.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
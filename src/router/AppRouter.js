import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import AddSinger from '../components/AddSinger';
import SingersList from '../components/SingersList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditSinger from '../components/EditSinger';

const AppRouter = () => {const [Singers, setSingers] = useLocalStorage('singers', []);
 

    
  return ( 
    <BrowserRouter>
      <div>
      <Header />
        <div className="main-content">
          <Routes>                  
            <Route element={<SingersList singers={Singers} setSingers={setSingers}/>} path="/"  />
            <Route path="/add"
            //  render={(props) => 
                element ={<AddSinger  singers={Singers} setSingers={setSingers} />}
              // }
              
            />
            <Route
 
    element={<EditSinger  singers={Singers} setSingers={setSingers} />
  }
  path="/edit/:id"
/>
<Route element={() => <Navigate to="/" />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
};
   
   

export default AppRouter;
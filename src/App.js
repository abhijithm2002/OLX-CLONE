import React, { useEffect, useContext } from 'react';
import './App.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Rounter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import Login from './Pages/Login'
import Create from './Pages/Create';
import View from './Pages/ViewPost';
import Post from './store/PostContext';

import { AuthContext, FirebaseContext } from './store/FirebaseContext';
/**
 * ?  =====Import Components=====
 */


function App() {
  const { setUser } = useContext(AuthContext)
  const { firestore } = useContext(FirebaseContext)
  useEffect(() => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)

        const uid = user.uid;
        console.log('uid', uid)

      } else { 
        console.log("error");

      }
      console.log('name::', user)

    })
  },[])
  return (
    <div>
    <Post>
      <Rounter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<Create />} />
          <Route path='/view' element={<View />} />
        </Routes>
      </Rounter>
    </Post>
    </div>
  );
}

export default App;

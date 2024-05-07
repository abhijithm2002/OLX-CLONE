import React, { useState,useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/FirebaseContext';
import { collection, doc, addDoc } from "firebase/firestore";
import { useNavigate ,Link} from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const {firestore} = useContext(FirebaseContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)

      .then((result) => {
   
        const docData = collection(firestore, 'users')
        const data = {
          id: result.user.uid,
          username: username,
          phone: phone
        };
        addDoc(docData, data, { merge: true }).then(response => {
          navigate('/login')
        }).catch(err => {
          console.log(err.message)
         
        })

      })
      .then((result) => {
        console.log('username:--',username)
        const auth = getAuth();
        console.log('auth',auth);
        updateProfile(auth.currentUser, { displayName: username })
        .then(()=>console.log(
          'display name set successfull'
        )).catch((err)=>console.log('err in setting display nmae'))
        console.log(auth.currentUser)
      })
      .catch((error) => {

        console.log(error.message)
        
      })


  }
  
  // const addProduct = async () => {
  //   
  // }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={ handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
        
        <Link to={'/login'}>Login</Link>
      </div>
    </div>
  );
}

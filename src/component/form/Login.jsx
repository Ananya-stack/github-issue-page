import React, {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap'
import './Form.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { useUserAuth } from '../../firebaseAuth/UserAuth';
import { useHistory } from 'react-router-dom';
import app from '../../firebase/Firebase'


const getData = () => {
  const data = localStorage.getItem('log')
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}

const validateEmail = RegExp("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}")
const validatePassword = RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")

const Login = () => {

 const history = useHistory()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [login , setLogin] = useState(getData())

 
  const logIn = useUserAuth()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth(app)
     signInWithEmailAndPassword(auth, email, password) 
     .then( (userCredential) => {
       const user = userCredential.user;
      
     })

     .then ( (res)=> {
       history.push("/")
     })
     .catch((error) => { 
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    

  const data = { email, password };
  if ( email&&password ) {
    setLogin( (i)=> [...i,data] )
    setEmail("")
    setPassword("")
  }
  }

  useEffect(() => {
   localStorage.setItem('log', JSON.stringify(login))
   if(useUserAuth) {
    //  history.push("")
   }
  }, [useUserAuth,history])

  return ( 
    <div className='login-div'>
                  
      <ul class='nav nav-pills nav-justified mb-3' id="ex1" role="tablist">
        <li class='nav-item' role="presentation">
        <a class='nav-link active' data-mdb-toggle="pill"
          href='/login' role='tab' aria-controls="pills-login"
          aria-selected="true">Login</a>
        </li>


        <li class='nav-item' role="presentation"> 
        <a class="nav-link" id="tab-register" data-mdb-toggle="pill"
           href='/reg' role='tab' aria-controls='pills-register'
           aria-selected="false">Register</a>
        </li>
      </ul>
       
      <Container />
      <div class="tab-content">
        <div class="tab-pane fade show active" id="pills-login"
             role="tabpanel" aria-aria-labelledby="tab-login" >

      <form onSubmit={handleSubmit} >


            <div class="text-center mb-3">
              <p>Sign in with:</p>
                
              <button type="button" className='btn btn-primary btn-floating mx-1'>
                <FacebookIcon />
              </button>

              <button type="button" className='btn btn-primary btn-floating mx-1'>
                <GoogleIcon />
              </button>

              <button type="button" className='btn btn-primary btn-floating mx-1'>
                <TwitterIcon />

              </button>

              <button type="button" className='btn btn-primary btn-floating mx-1'>
                 <GitHubIcon />
              </button>
          
            </div>
            
            <p class="text-center">or:</p>
             
             <div className='input-log'>

               <div class="form-outline mb-4">

                 
              
                  <label class='form-label' for="loginName">Email or Username:</label>
                  <input value={email} name='email'
                         type="email" class="form-control"
                         onChange={ (e) => setEmail(e.target.value) } />
                         {/* {state.isError.email.length > 0 && (<h5>{state.isError.email}</h5>) } */}
               </div>

               <div class="form-outline mb-4"> 
                 <label class='form-label' for='loginPassword'>password:</label>
                 <input value={password} name='password'
                        type='password' class='form-control' 
                        onChange={ (e) => setPassword(e.target.value) } />
                        {/* {state.isError.password.length > 0 && (<h6>{state.isError.password}</h6>)} */}
               </div>

               <button type='submit' class='btn btn-primary btn-block mb-4'>Sign in</button>
           
                <div class='text-center'> 

                  <p>Not a member? <a href='/reg'>Register</a></p>
                </div>
             </div>   
    </form>
       
        </div>
      </div>
      
    </div>
  );
}

export default Login;

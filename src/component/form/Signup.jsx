import React, {useState} from 'react';
import {Container} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import './Form.css'  
import app from '../../firebase/Firebase'
import { useUserAuth } from '../../firebaseAuth/UserAuth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'


function Signup () {

  const history = useHistory()  

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
       
  const [state, setState] = useState({
    isError : {
      name : "",
      email : "",
      password : "",
      message : ""
    }
  })
    
    const signUp = useUserAuth()

const handleSubmit = (e) =>{
  e.preventDefault();

  // const data = { name, username, email, password, cpassword }

  // if(  name&&username&&email&&password&&cpassword ) {
  //   setName("")
  //   setUsername("")
  //   setEmail("")
  //   setPassword("")
  //   setCpassword("")
  // }

    const auth = getAuth(app); 
    createUserWithEmailAndPassword (auth, email, password)
    .then( (userCredential) => {

        const user = userCredential.user;
        localStorage.setItem("token", user?.accessToken);

        const userDetails = {
          email : user?.email,
        }
        localStorage.setItem("userDetail", JSON.stringify(userDetails))
        sessionStorage.setItem("userDetail", JSON.stringify(userDetails))
    })

    .then( (res) =>{ 
      history.push("/login")
    })
    .catch( (error) => {

       const errorCode = error.code;
       const errormessage = error.message;
       console.log(error);
    })
}
 
  return (

    <div className='reg-div'>

      <Container />     
      <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">

        <li class="nav-item" role="presentation" >
          <a class="nav-link" data-mdb-toggle="pill"
             href="/login" role="tab" aria-controls="pills-login" 
             aria-selected="true">Login</a> 
        </li>

        <li class="nav-item" role="presentation">
          <a class="nav-link active" id="tab-register" data-mdb-toggle="pill"
             href='/reg' role="tab" 
             arial-controls="pills-register" arial-selected="false">Register</a>
        </li>
         
      </ul>
      <Container/>

      <div class="tab-content">

        <div class="tab-pane fade show active" id="pills-register" 
             role="tabpanel" aria-labelledby="tab-register">              


            <div class="text-center mb-3">
               <p>sign up with:</p>
               <button type="button" class="btn btn-primary btn-floating mx-1">
               <FacebookIcon />
               </button>

               <button type="button" class="btn btn-primary btn-floating mx-1">
               <GoogleIcon />
               </button>
                    
               <button type="button" class="btn btn-primary btn-floating mx-1">
               <TwitterIcon />
               </button>

               <button type="button" class="btn btn-primary btn-floating mx-1">
               <GitHubIcon />
               </button>
             
            </div>

           <p class="text-center">or:</p>
             
           <form onSubmit={handleSubmit}>
             <div className="input-reg">
               <div class="form-outline mb-4">
                 <label class="form-label" for="registerName">Name:</label>
                 <input value={name} type="text" class="form-control" 
                        onChange={(e) => setName(e.target.value)} />
               </div>

               <div class="form-outline mb-4">
                 <label class="form-label" for='registerUserName'>Username:</label>
                 <input value={username} type="text" class="form-control"
                        onChange={(e) => setUsername(e.target.value)} />
               </div>
               <div class="form-outline mb-4">
                 <label class="form-label" for='registerEmail'>Email:</label>
                 <input value={email} type="email" class='form-control'
                        onChange={(e) => setEmail(e.target.value)} />
               </div>
               <div class="form-outline mb-4">
                  <label class="form-label" for='registerPassword'>Password:</label>
                   <input value={password} type="password" class='form-control'
                          onChange={(e) => setPassword(e.target.value)} />
               </div>

               <div class='form-outline mb-4'>
                 <label class='form-label' for="registerRepeatPassword">Confirm password:</label>
                   <input value={cpassword} type='password' class='form-control'
                          onChange={(e) => setCpassword(e.target.value)} />
               </div>

                <button type='submit' class="btn btn-primary btn-block mb-3">Sign Up</button>

             </div>
           </form>

        </div>
      </div>

    </div>
  );
}

export default Signup;


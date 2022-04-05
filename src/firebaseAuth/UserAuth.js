import { createContext,useEffect,useContext,useState } from "react";
import { auth } from "../firebase/Firebase";
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut} from "firebase/auth"

    
const userAuth = createContext();

export function UserAuthProvider({children}) {

    const [user, setUser] = useState("")
 
    function signUp(email,password) { 
        // return createUserWithEmailAndPassword( auth,email,password);
        // pass only email & password in signup 

        return createUserWithEmailAndPassword (auth, email, password)
    }

    function logIn(email,password)  { 
       console.log("Email",email); 
        return signInWithEmailAndPassword( auth,email,password);
    }

    function logOut() {
        return signOut(auth)
    }      

 useEffect ( () => {
     const unsubscribe = onAuthStateChanged( auth, ( currentUser) => {
        setUser(currentUser);
     });   

     return () => {
         unsubscribe();
     }
 }, [])

 return <userAuth.Provider value={ {user, signUp, logIn, logOut} }>
            {children}
        </userAuth.Provider>
 
}

export function useUserAuth(){
    return  useContext(userAuth);
}
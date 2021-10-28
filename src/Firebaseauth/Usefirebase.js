import Firebaseinitialization from '../Firebasesetup/Firebaseinit';
import {signOut ,onAuthStateChanged ,signInWithEmailAndPassword ,createUserWithEmailAndPassword ,GithubAuthProvider , getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from 'react';

Firebaseinitialization();

const useFirebase = () => {
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [isloading, setIsloading] = useState(true)
    //Create user with password and email
    const RegisterUser = (email, password) => {
        setIsloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
       
    }
    //Email and password Sign in
    const LoginWithEmailAndPass = (email, password) => {
        setIsloading(true)
        return signInWithEmailAndPassword(auth, email, password)
            
    }
    //Sign in with google
    const LoginWithGoogle = () => {
        setIsloading(true)
          return  signInWithPopup(auth, googleprovider)
            
        }
    //Github sign in 
    const LoginWithGithub = () => {
        setIsloading(true)
       return signInWithPopup(auth, githubprovider)
       
      
    }
    //Geting current user
    useEffect(() => {
        setIsloading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
              const uid = user.uid;
            } else {

            }
            setIsloading(false)
          });
    },[])
    //user LOG out
    const LogoutUser = () => {
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          });
    }
    return {
        setUser,
        LoginWithGoogle,
        user,
        LoginWithGithub,
        RegisterUser,
        LoginWithEmailAndPass,
        LogoutUser,
        isloading,
        setIsloading
    }
}

export default useFirebase;
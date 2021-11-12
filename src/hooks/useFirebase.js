import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getIdToken, updateProfile } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    // const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    // for registation

    const registerUser = (email, password, name, history, location) => {

        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                hanldeUserInfoRegister(result.user.email);
                const newUser = { email, displayName: name };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace('/');

                setAuthError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }


    const hanldeUserInfoRegister = (email) => {
        fetch("http://localhost:5000/addUserInfo", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };





    // const handleUserRegister = (email, password) => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((result) => {
    //             console.log(result.user);

    //         })
    //         .catch((error) => {
    //             const errorMessage = error.message;
    //         });
    // };



    // login WITH  EMAIL
    const logInUser = (email, password, name, location, history) => {

        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const newUser = { email, displayName: name };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                const destination = history.push(location.state?.from || "/home");
                history.replace(destination);
                setAuthError('');

            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message);
            })

            .finally(() => setIsLoading(false));

    }





    // google sign in
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);

        signInWithPopup(auth, googleProvider)
            .then((result) => {

                // The signed-in user info.

                const user = result.user;


                // saveUser(user.email, user.displayName, 'PUT')
                // ...      
                setAuthError('');

                const destination = history.push(location.state?.from || "/home");
                history.replace(destination);


            }).catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));

    }



    // observer user state





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
            ;
        return () => unsubscribe;


    }, [])



    // useEffect(() => {
    //     fetch(`http://localhost:5000/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin))

    // }, [user.email])








    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    // const saveUser = (email, displayName, method) => {
    //     const user = { email, displayName };
    //     fetch('http://localhost:5000/users', {
    //         method: method,
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)

    //     })
    //         .then()

    // }

    return {
        user,

        token,
        isLoading,
        setIsLoading,
        registerUser,
        logInUser,
        logout,
        signInWithGoogle,
        setAuthError,
        authError,
        updateProfile
    }


}

export default useFirebase;
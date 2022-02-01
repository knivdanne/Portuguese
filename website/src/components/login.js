/**This file is responsible for the login workflow
 * Functions that SHOULD exists:  
 */
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// MAKE SURE TO USE EXAMPLES FROM BOOTSTRAPREACT https://react-bootstrap.github.io/components/navs/
import Amplify, { Auth, Hub } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
// import DeviceInfo from 'react-native-device-info';
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const initialFormState = {
    username: '', password: '', email: '', authCode: '', formType: 'signUp'
}

export function LoginForm() {

    // useEffect says that this function should re-render the UI and any changes to variables in [] should also re-run this function
    useEffect(() => {
        setAuthListener()
        checkUser()
    }, [])

    // Login Form
    const [formState, updateFormState] = useState(initialFormState)
    // The user state or name if they´re logged in or not
    const [user, updateUser] = useState(null)
    async function setAuthListener() {
        Hub.listen('auth', (data) => {
            switch (data.payload.event) {
                case 'signIn':
                    console.log('user signed in');
                    checkUser()
                    break;
                case 'signOut':
                    console.log('user signed out');
                    console.log('data from event: ', data)
                    updateFormState(() => ({ ...formState, formType: "signIn" }))
                    break;
                default:
                    break
            }
        });
    }
    async function checkUser() {
        try {
            const user = await Auth.currentAuthenticatedUser()
            console.log('user: ', user)
            updateUser(user)
            updateFormState(() => ({ ...formState, formType: "signedIn" }))
        } catch (err) {
            updateFormState(() => ({ ...formState, formType: "signIn" }))
        }
    }
    function onChange(e) {
        e.persist()
        updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
    }
    const { formType } = formState
    async function signUp() {
        const { username, email, password } = formState
        await Auth.signUp({ username, password, attributes: { email } })
        updateFormState(() => ({ ...formState, formType: "confirmSignUp" }))
    }
    async function confirmSignUp() {
        const { username, authCode } = formState
        await Auth.confirmSignUp(username, authCode)
        updateFormState(() => ({ ...formState, formType: "signIn" }))
    }
    async function signIn() {
        console.log("Clicked sign in")
        const { username, password } = formState
        console.log("Fetched data from form")
        try {
            const user = await Auth.signIn(username, password)
        } catch (error) {
            console.log("error signing in", error)
        }
        console.log("Updating user")

    }

    async function signOut() {
        try {
            Auth.signOut()
            updateUser(null)
            console.log(user)
            updateFormState(() => ({ ...formState, formType: "signIn" }))
            console.log('signed out')
        } catch (error) {
            console.log("error signing out in", error)
        }
    }
    return (
        <div>
            {/* Signin stuff */}
            {
                formType === 'signUp' && (
                    <div>
                        <input name="username" onChange={onChange} placeholder="username" />
                        <input name="password" type="password" onChange={onChange} placeholder="password" />
                        <input name="email" onChange={onChange} placeholder="email" />
                        <Button onClick={signUp}>Sign Up</Button>
                        <Button onClick={() => updateFormState(() => ({
                            ...formState, formType: "signIn"
                        }))}>Sign In</Button>
                    </div>
                )
            }
            {
                formType === 'confirmSignUp' && (
                    <div>
                        <input name="authCode" onChange={onChange} placeholder="Confirmation code" />
                        <Button onClick={confirmSignUp}>Confirm Sign Up</Button>
                    </div>
                )
            }
            {
                formType === 'signIn' && (
                    <div>
                        <input name="username" onChange={onChange} placeholder="username" />
                        <input name="password" type="password" onChange={onChange} placeholder="password" />
                        <Button onClick={signIn}>Sign In</Button>
                    </div>
                )
            }
            {
                formType === 'signedIn' && (
                    <div className=''>
                        Welcome {user.username} <Button size='sm' variant="secondary" onClick={signOut}>Sign Out</Button>

                    </div>
                )
            }
            {/*
            <Button onClick={checkUser}>Check user</Button>
            {/* End Signin stuff */}
        </div>
    )

}

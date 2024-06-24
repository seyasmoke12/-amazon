import React,{ useState } from 'react'
import "./Login.css"
import { auth } from './firebase'
import {Link, useNavigate } from 'react-router-dom'
import { ClipLoader } from "react-spinners"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { useStateValue } from './StateProvider'
function Login() {
    const [{basket},dispatch] = useStateValue()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [{ user },dispache] = useStateValue()
    const [error,setError] = useState("")
    const navigate = useNavigate()
    const [loading,setLoading] = useState({
        signIn: false,
        signUp: false
    })
    console.log(user)
    console.log(password,email)
const authHandler = async (e)=>{
    e.preventDefault()
    console.log(e.target.name)
    if(e.target.name === "signin"){
        // firebase auth
        setLoading({ ...loading, signIn: true })
        signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
            dispache({
                type:"SET_USER",
                user: userInfo.user,
            })
            navigate("/")
            setLoading({ ...loading, signIn: false })
        }).catch((err)=>{
            setError(err.message)
            setLoading({ ...loading, signIn: false })
        })
    }else{
        setLoading({ ...loading, signUp: true })
        createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
            dispache({
                type:"SET_USER",
                user:userInfo.user
            })
            navigate("/")
            setLoading({ ...loading, signUp: false})
        }).catch((error)=>{
            setError(error.message)
            setLoading({ ...loading, signUp: false})
        })
        
    }
}



return (
    <div className='login'>
        <Link to="/">
        <img className="login_logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png' />
        </Link>
        <div className='login_container'>
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                
                <h5>Password</h5>
                <input
                type='password'
                id='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                <button
                type='submit'
                name="signin"
                onClick={authHandler}
                className="login_signInBotton"
                >{
                    loading.signIn ? (
                        <ClipLoader color='#000' size={15}></ClipLoader>
                    ) : (
                        "Sign in"
                    )
                }
                </button>
            </form>
            <p>
                by signing-in you agree to amazone fake clone condition of sale.plase see our privacy Notice and our Interest-based ads notice.
            </p>
            <button
            onClick={authHandler}
            name="signup"
            className="login_registerButton"
            >
                {
                    loading.signUp ? (
                        <ClipLoader color='#000' size={15}></ClipLoader>
                    ) : (
                        "Create your amazone accounte"
                    )
                }
                
            </button>
        {error && <small style={{paddingTop:"5px",color:"red"}}>{error}</small>}
        </div>
    </div>
)
}
export default Login

import {useState} from 'react'
import '../styles/login.css'
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';

export default function Login(){

    const navigate = useNavigate()
    const [userData, setUserData] = useState(
    {
        email: "",
        password: "",
        rememberMe: false
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, type, value, checked } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    }
    
    return(
        <div className="w-full flex justify-center items-center" style={{minHeight:'100vh',fontFamily:'Roboto,sans-serif'}}>

            <header className='login-header'>
                <h1 className='text-4xl'>Clays</h1>
            </header>

            <div className='login-div'>

                <h1 className='login-head text-3xl py-0 font-bold'>Log In</h1>


                <form className='mx-2 mx-md-5 mb-5'>

                    <Input name='email' label='Email' type='email' value={userData.email} onChange={e=>handleChange(e)} validationMessage='Enter a valid email'/>

                    <Input name='password' label='Password' type='password' value={userData.password} onChange={e=>handleChange(e)} validationMessage='Enter a valid email'/>          

                    <input type='submit' value="Login" className='submit-btn' onClick={()=>console.log(userData)}/>
                </form>

                <div className='flex justify-center items-center my-5'>
                    <span className='h-[1px] w-24 me-3 bg-gray-400'></span> <p>or</p> <span className='h-[1px] w-24 ms-3 bg-gray-400'></span>
                </div>

                <a href="http://localhost:8080/oauth2/authorization/google" >
                    <button className="gsi-material-button block mx-auto">
                        <div className="gsi-material-button-state"></div>
                        <div className="gsi-material-button-content-wrapper">
                            <div className="gsi-material-button-icon">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{display: 'block'}}>
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                <path fill="none" d="M0 0h48v48H0z"></path>
                            </svg>
                            </div>
                            <span className="gsi-material-button-contents">Sign in with Google</span>
                            <span style={{display: 'none'}}>Sign in with Google</span>
                        </div>
                    </button>              
                    </a>

                
                <p className='mt-3 text-center'>Don't have an account? <a className='text-blue-400 cursor-pointer' onClick={()=>navigate("/signup")}>Sign Up?</a></p>
                
            </div>
            <div id="g_id_onload" data-client_id="http://localhost:8080/oauth2/authorization/google" 
                        data-login_uri="https://your.domain/your_login_endpoint"
                        data-auto_select="true">

            </div>  
            <script src="https://accounts.google.com/gsi/client" async></script>
        </div>
    )
}
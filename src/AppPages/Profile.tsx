import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import '../styles/profile.css'
import Input from '../components/Input'

export default function ProfilePage(){

    const defaultData = {
        username:"guest",
        phonecode:"+91",
        phone: "6234567890",
        email: "a@mail.com",
        password: "oldpassword",
        firstName: "abc", lastName: "b",
        address: "no.0",
        pincode: "100001",
    }

    const [userData, setUserData] = useState(defaultData)

    const isLogged = true;
    const [status, setStatus] = useState("idle");
    const navigate = useNavigate();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9][0-9]{9}$/
    const pincodeRegex = /^[1-9][0-9]{5}$/
    // let verifiedForms = false;
    // let formValidity = status=="editing" && verifiedForms;
    

    function switchStatus(){
        if(status=="editing"){
            setUserData(defaultData)
            setStatus("idle")
        }
        else{setStatus("editing")}
    }

    function handleTextInput(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>){
        setUserData({...userData,[e.target.name]:e.target.value.trim().toLowerCase()})
    }

    function handleNumInput(e: React.ChangeEvent<HTMLInputElement>){
        const value = Number(e.target.value)
        if(!isNaN(value)){
            setUserData({...userData,[e.target.name]:value})
        }
    }

    // async function checkPincode(){

    // }

    // function checkValidity(){

    // }

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
    }

    // const countryCodes = ["+1"," +44","+61","+91","+86","+49","+33","+34","+39","+81"]

    return(
        <div>
            <div className="flex justify-between p-4" style={{backgroundColor:'lightgoldenrodyellow'}}>
                <button className='cursor-pointer' onClick={()=> navigate("/")}>
                    <i className="fa-solid fa-arrow-left-long fa-2xl" style={{color:'brown'}}></i>
                </button>
            </div>

            
                { !isLogged &&
                    <button className='custom-btn mt-4 ms-3 mb-4' onClick={()=>navigate("/signup")}>
                        Sign Up / Login
                    </button>
                }

                { isLogged &&
                    <button className='custom-btn mt-3 ms-3 mb-4' onClick={switchStatus}>
                        {status=="editing" ? "Cancel" : "Edit Profile"}
                    </button>
                }

            <div className=' mx-3 p-7 mb-3 border-amber-400 border rounded-2xl' >
                <form onSubmit={e=>handleSubmit(e)}>

                    <div className='md:flex gap-26'>
                        <Input disabled={!isLogged || status!="editing"} className='w-[65vw] md:w-[40vw] min-w-[250px]' name='username' value={userData.username}
                            onChange={e=>handleTextInput(e)} label='Username' type="text"/>
                            
                        <Input disabled={!isLogged || status!="editing"} className='w-[65vw] md:w-[20vw] min-w-[250px]' name='email' value={userData.email}
                            onChange={e=>handleTextInput(e)} label='Email' type="text" isInvalid={!emailRegex.test(userData.email)}/>
                        
                    </div>

                    <div>
                        <h2 className='mt-6 mb-5 text-lg text-gray-500'>Address Details</h2>
                        <div className='md:flex gap-7'>
                            <Input disabled={!isLogged || status!="editing"} name='firstName' value={userData.firstName} isInvalid={userData.firstName.trim().length<3} label='First Name' 
                                type="text" onChange={e=>handleTextInput(e)} validationMessage='Enter a valid name'/>

                            <Input disabled={!isLogged || status!="editing"} name='lastName'  label="Last Name" 
                                type="text" onChange={e=>handleTextInput(e)} isInvalid={userData.lastName.trim().length<1} validationMessage='Enter a valid name'/>
                        </div>

                        <Input disabled={!isLogged || status!="editing"} name='phone' type='text' maxLength={10} label="Phone Number" className='min-w-[250px]' 
                        onChange={e=>handleNumInput(e)} isInvalid={!phoneRegex.test(userData.phone)} value={userData.phone}/>

                        <h4 className='text-lg text-gray-500 my-5'>Address</h4>

                        <div className='md:flex gap-7'>

                            <textarea disabled={!isLogged || status!="editing"} value={userData.address} onChange={e=>setUserData({...userData, address: e.target.value})} 
                                className=' bg-gray-100 min-w-[90%] md:min-w-[40%] min-h-36 rounded-2xl px-8 py-4 
                                disabled:bg-gray-200 disabled:text-gray-200'></textarea>

                            <Input disabled={!isLogged || status!="editing"} type='text' name="pincode" onChange={e=>handleNumInput(e)} label='Pincode' 
                            isInvalid={!pincodeRegex.test(userData.pincode)} maxLength={6} validationMessage='Enter a valid pincode'/>
                        </div>
                    </div>

                    { status=="editing" && <input type='submit' value="Save" className='custom-btn block mx-auto mt-5 text-lg cursor-pointer'/>}
                </form>
            </div>
        </div>
    )
}
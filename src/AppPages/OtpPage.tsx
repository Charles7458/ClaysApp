import { useState, useEffect, useRef} from 'react';
// import axios from 'axios';
import '../styles/otp.css';


function OtpInput(props:{value:string, autofocus?: boolean, onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,ref:React.RefObject<null>}){
    return(
        <input autoFocus={props.autofocus} type="text" value={props.value} className='otp-input no-num-scroll' onChange={props.onChange} maxLength={1} ref={props.ref}/>
    )
}


export default function OtpPage() {
    const [email, setEmail] = useState("****@gmail.com");
    const [otp, setOtp] = useState(["","","","",""])
    const [loaded, setLoaded] = useState(false);
    const inputRef1:any = useRef(null);    
    const inputRef2:any = useRef(null);
    const inputRef3:any = useRef(null);
    const inputRef4:any = useRef(null);
    const inputRef5:any = useRef(null);

    useEffect(()=>{
        async function fetchEmail() {
        const Useremail = "****@gmail.com";
        setEmail(Useremail);
        }
        fetchEmail()
        setLoaded(true)
    },[])
    function otpChange(e : React.ChangeEvent<HTMLInputElement>, n: number){
        const value = e.target.value;

        if(!isNaN(parseInt(value)) || value==""){
        let newOtp = otp.splice(0);
        newOtp[n] = value;
        setOtp(newOtp);
        if(value.length===1 && n<4){
           if(n===0){inputRef2.current.focus()}
           if(n===1){inputRef3.current.focus()}
           if(n===2){inputRef4.current.focus()}
           if(n===3){inputRef5.current.focus()}
           }
        }
    }

    return (
        <div className='flex min-h-[100vh] justify-center items-center'>
            <header className='fixed top-0 py-5 w-full font-[Amarante,serif] bg-amber-700/30 shadow-2xl shadow-gray-100'>
                <h1 className='text-4xl text-center text-amber-800 font-semibold'>Clays</h1>
            </header>

            <div className='h-72 w-[60vw] max-w-[500px] shadow-2xl shadow-gray-500 px-10 py-5 rounded-xl' style={{fontFamily:'Roboto,serif'}}>
                <h4 className="text-xl text-center font-bold text-blue-900 mb-5">OTP Verification</h4>
                
                {loaded && <p>Enter the OTP sent to <b>{email}</b> in the below boxes.</p> }

                <button className='bg-gray'>Resend OTP</button>
                <form>
                    <div className='flex gap-x-5 justify-self-center my-5'>
                        <OtpInput autofocus value={otp[0]} onChange={e=>otpChange(e,0)} ref={inputRef1}/>
                        <OtpInput value={otp[1]} onChange={e=>otpChange(e,1)} ref={inputRef2}/>
                        <OtpInput value={otp[2]} onChange={e=>otpChange(e,2)} ref={inputRef3}/>
                        <OtpInput value={otp[3]} onChange={e=>otpChange(e,3)} ref={inputRef4}/>
                        <OtpInput value={otp[4]} onChange={e=>otpChange(e,4)} ref={inputRef5}/>
                    </div>
                    <input type='submit' value="Submit" className='block mx-auto py-1 px-2 rounded-lg bg-blue-600 text-lg font-bold text-white cursor-pointer hover:scale-[105%]'/>
                </form>
            </div>
        </div>
    )
}
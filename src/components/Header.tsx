import '../styles/header.css'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

function Dropdown({children}: React.PropsWithChildren){
    return(
        <div>
            {children}
        </div>
    )
}

type dropdownoption = {name: string, className: string, link: string}

function DropdownOption({name, className, link}: dropdownoption){
    return(
        <div>
            <p>{name}</p>
        </div>
    )
}
export default function Header(){

    const navigate = useNavigate()
    const [search,setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const [showProfile, setShowProfile] = useState(false);

    return(
            <div className='flex w-full items-center justify-between' style={{backgroundColor:'lightgoldenrodyellow'}}onClick={()=>setShowSearch(false)}>
                <div className='flex items-center justify-between align-middle ms-5'>
                    <h1 className="comp-logo cursor-pointer me-5 text-amber-800">Clays</h1>
                    <button className='my-btn md:hidden ms-5' onClick={(e)=>{e.stopPropagation();setShowSearch(true)}}>
                        <i className="fa-solid fa-magnifying-glass fa-lg cursor-pointer text-amber-900"></i>
                    </button>
                    {   showSearch &&
                        <span className='absolute' style={{left:'20%',top:'15px'}}>
                            <form onSubmit={e=>{e.preventDefault();navigate(`/search?key=${search}`)}}>
                                <input type='search' className='sm-search-bar' value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search'></input>
                                <button className='btn search-icon'>
                                    <i className="fa-solid fa-magnifying-glass cursor-pointer" style={{color:'brown'}}></i>
                                </button>
                            </form>
                        </span>
                    }
                    <span className='my-auto hidden md:flex'>
                        <form onSubmit={e=>{e.preventDefault();navigate(`/search/${search}`)}}>
                            <input className='search-bar' value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search'></input>
                            <button className='btn search-icon'>
                                <i className="fa-solid fa-magnifying-glass cursor-pointer" style={{color:'brown'}}></i>
                            </button>
                        </form>
                    </span>
                </div>

                <div className='mx-3 flex items-center'>
                    <i className='fa-solid fa-cart-shopping text-amber-900 fa-xl me-[10vw]' ></i>
                    
                    <div>
                    <i className="fa-regular fa-circle-user cursor-pointer" style={{color:'#a64c1c',fontSize:'clamp(25px,4vw,30px)'}}></i>
                    {showProfile && <div></div>}
                    </div>
                </div>
                
            </div> 
    )
}
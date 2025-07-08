import '../styles/footer.css'
import { useNavigate } from 'react-router-dom'

function FList({children}: any) {
    return(
        <ul className='flex flex-col'>
            {children}
        </ul>
    )
}

function ListHead({children}: any){
    return(
        <li className='my-0 text-white'><h5>{children}</h5></li>
    )
}

function ListItem({children,link}: any | string){
    const navigate = useNavigate();
    return(
        <li className="list-links cursor-pointer mt-2"><a onClick={()=>navigate(link)}>{children}</a></li>
    )
}

export default function Footer(){
    return(
        <footer className="bg-gray-400 flex md:flex-row flex-col w-full my-footer">
            <div className="px-5 flex flex-col items-center justify-center">
                <h1 className="comp-logo cursor-pointer mt-5 text-gray-300">Clays</h1>
                <div>
                    <a href='#'><i className="fa-brands fa-square-x-twitter fa-2xl social-links"></i></a>
                    <a href='#'><i className="fa-brands fa-square-youtube fa-2xl social-links"></i></a>
                    <a href='#'><i className="fa-brands fa-square-instagram fa-2xl social-links"></i></a>
                </div>
                <p className='mt-4'>Clays &copy; .All Rights Reserved.</p>
            </div>
            <div className="flex gap-5 px-5 py-[100px]">

                <FList>
                    <ListHead>About</ListHead>
                    <ListItem link="/about">About Us</ListItem>
                    <ListItem link="/tandc">Terms & Conditions</ListItem>
                    <ListItem link="/privacy">Privacy Policy</ListItem>
                </FList>
                <FList>
                    <ListHead>Customer Care</ListHead>
                    <ListItem link="/feedback">Feedback</ListItem>
                </FList>
            </div>
        </footer>
    )
}
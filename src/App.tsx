import {HashRouter,Routes,Route} from 'react-router-dom'; 
import Home from './AppPages/Home.js';
import Header from './components/Header.js'
import Footer from './components/Footer.js';
import ProfilePage from './AppPages/Profile.js';
import SearchPage from './AppPages/Search.js';
import Login from './AppPages/Login.js';

import React from 'react';
import SignUp from './AppPages/SignUp.js';
import OtpPage from './AppPages/OtpPage.js';

function Page({children}: React.PropsWithChildren<{}>){
return(
    <div className=''>
        <Header/>
            {children}
        <Footer/>
    </div>
    
)
}

export default function App(){
    return(
        <HashRouter>
            <Routes>
                <Route path='/' element={<Page><Home/></Page>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/otp' element={<OtpPage/>}/>
                <Route path='/search/:keyword' element={<SearchPage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
            </Routes>
        </HashRouter>
    )
}
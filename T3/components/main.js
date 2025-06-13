import React from "react";
import i3 from './imag3.jpg';
import {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from './home';
import Props from './Props';
import Profile from './profile';
import Setting from './setting';
import Product from './product';
import Timer from './timer';
import Effects from './effects';
import Counts from './counts';

function Main(){
    return(
        <>
            <Router>
                <div className="main-route">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Props'>Props</Link></li>
                        <li><Link to='/Profile'>Profile</Link></li>
                        <li><Link to='/Settings'>Settings</Link></li>
                        <li><Link to='/Product'>Product</Link></li>
                        <li><Link to='/Timer'>Timer</Link></li>
                        <li><Link to='/Effects'>Effects</Link></li>
                        <li><Link to='/Counts'>Counts</Link></li>
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="Props" element={<Props fname="priyen" lname='patel'/>}/>
                    <Route path="Profile" element={<Profile />}/>
                    <Route path="Product" element={<Product name="mobile" price='50000' img={i3} desc='Hello Mi note 11' />}/>
                    <Route path="Timer" element={<Timer />}/>
                    <Route path="Settings" element={<Setting />}/>
                    <Route path="Effects" element={<Effects />}/>
                    <Route path="Counts" element={<Counts />}/>
                </Routes>
            </Router>
        </>
    );
};

export default Main;
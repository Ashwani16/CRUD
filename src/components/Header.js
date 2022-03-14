import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return (
        <header>
            <h1>Singer's Info management</h1>
            
            <div className="links">
                <Link to="/" className="link"  >
                   Singer's Info
                 </Link>   
                 <Link to="/add" className="link" >
                     add Singer Info
                    </Link>
            </div>
        </header>
    );
};
export default Header;
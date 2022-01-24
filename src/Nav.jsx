import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './nav.css';

import {FiHome,FiMail} from 'react-icons/fi';
import {GiPaperBagOpen} from 'react-icons/gi';
import {FaUserAlt} from 'react-icons/fa';
import {BiSearchAlt,BiListPlus} from 'react-icons/bi';

function Navbar() {
    return (
        <>
            <div className="mainnav bg-light border-bottom">
                <div className="navlogo ">
                    <h1 style={{fontFamily:'cursive',fontWeight:'900'}}>
                       Crewbella
                    </h1>
                </div>

                <Nav className=' d-flex '>

                    <div className="midnav">
                        <FiHome style={{fontSize:'30px', color:'gray',cursor:'pointer'}} />
                        <BiSearchAlt style={{fontSize:'30px', color:'gray',cursor:'pointer'}} />
                        <BiListPlus style={{fontSize:'30px', color:'gray',cursor:'pointer'}} />
                        <FiMail style={{fontSize:'30px', color:'gray',cursor:'pointer'}} />
                        <GiPaperBagOpen style={{fontSize:'30px', color:'gray',cursor:'pointer'}} />
                    </div>


                </Nav>
                <div className="lastnav">
                    <FaUserAlt style={{fontSize:'30px',cursor:'pointer'}}/>
                </div>
            </div>
        </>
    );
}

export default Navbar;
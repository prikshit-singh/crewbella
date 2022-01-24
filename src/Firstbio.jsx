import React, { useState } from 'react';
import './first.css'
import { GrWaypoint } from 'react-icons/gr';
import { BiUserPlus } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';


function Firstbio(props) {
    const [show, setshow] = useState(false)
    // console.log(props)


    function showMore() {
        if (show) {
            setshow(false)
        } else {
            setshow(true)
        }
    }

    return (
        <>
            <div className="firstbiomain p-3">
                <div className="coverImage col-md-12 mx-auto p-0 bgcover-img shadow-lg rounded-circle"
                    style={{ backgroundImage: `url(${props.basic.image_hd})` }}
                />

                <div className='fullName  mx-auto p-2'>
                    <h1>{props.basic.name}</h1>
                </div>

                <div className='username d-flex col-md-12 mx-auto p-0'>
                    <p>@{props.basic.username}</p>
                    <p><GrLocation/> Jaipur</p>
                </div>


                <div className='userfollower d-flex col-md-12 mx-auto p-0'>
                    <p>
                        {props.basic.followings}
                        <span> followers</span>
                    </p>
                    <p>
                        {props.basic.quick_bookings}
                        <span> quickbooks</span>
                    </p>

                </div>

                <div className="buttonred d-flex col-md-12 mx-auto p-0">
                    <button type="button" className=" btn  w-100 rounded-pill py-2  fw-bold   ">See Quickbook</button>

                </div>

                <div className="position d-flex w-100 justify-content-center mt-3 col-md-12 mx-auto p-0">
                    <b >#Director</b>
                    <b >#Director</b>
                    <b>#Director</b>
                </div>

                <div className='d-flex w-50 justify-content-center mt-3 col-md-2 mx-auto p-3'>
                    <button onClick={() => showMore()} className="btn btn-sm px-0 w-100 border-top border-bottom border-end border-start text-muted rounded-pill">
                        show more </button>
                </div>
                <div className="showdata">
                    {show ?
                        <div>
                           <p>Joined:<span>{props.basic.created_at}</span></p>
                           <p>Date of Birth:<span>{props.basic.dob}</span></p>
                        </div>

                        :
                        ''
                    }
                </div>

                <div className="bottomdiv d-flex w-100  mt-3 col-md-2 mx-auto p-3">
                    <div>
                    <BiUserPlus className='ICON' />
                    <p>follow</p>
                    
                    </div>
                   
                   <div>
                   <GrWaypoint className='ICON'  />
                   <p>ping</p>
                   
                   </div>
                   
                </div>
            </div>


        </>
    );
}

export default Firstbio;
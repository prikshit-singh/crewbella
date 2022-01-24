import React, { useState } from 'react';
import './events.css';
import { RiBarChartHorizontalFill } from 'react-icons/ri';
import { FiMail,FiAward } from 'react-icons/fi';
import { BsPencil , BsStarHalf ,BsQuestionDiamond} from 'react-icons/bs';
import { RiClipboardLine } from 'react-icons/ri';
import { GiCubes } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';


function Events(props) {
    const [show, setShow] = useState(false);
    const [Index, setIndex] = useState();
    const [carosal, setCarosal] = useState('...more')
    const [portfolio, setportfolio] = useState(true)
    const [portfolioC, setportfolioC] = useState('')
    const [posting, setposting] = useState(true)
    const [postingC, setpostingC] = useState('')
    const [profession, setprofession] = useState(true)
    const [professionC, setprofessionC] = useState('')
    const [Operating, setOperating] = useState(true)
    const [OperatingC, setOperatingC] = useState('')
    const [interaction, setinteraction] = useState(true)
    const [interactionC, setinteractionC] = useState('')
    const [topC, settopC] = useState('active rounded-pill')
    
    // console.log(props)
    function showMore(e) {

        if (show) {
            setShow(false)
            e.target.innerHTML = '...more'
            setIndex()
        } else {
            setShow(true)
            e.target.innerHTML = '...less'
            // setCarosal('...less')
            setIndex(e.target.id)
        }
    }
    function showTop(e){
        settopC('active rounded-pill')
        setportfolioC('')
        setpostingC('')
        setprofessionC('')
        setOperatingC('')
        setinteractionC('') 

        setportfolio(true)
        setposting(true)
        setprofession(true)
        setOperating(true)
        setinteraction(true)
    }

    function showPortfolio(e){
        settopC('')
        
        setportfolioC('active rounded-pill')
        setpostingC('')
        setprofessionC('')
        setOperatingC('')
        setinteractionC('')

        setportfolio(true)
        setposting(false)
        setprofession(false)
        setOperating(false)
        setinteraction(false)
    }
    function showClient(e){
        settopC('')
        setportfolioC('')
        setpostingC('active rounded-pill')
        setprofessionC('')
        setOperatingC('')
        setinteractionC('') 

        setportfolio(false)
        setposting(true)
        setprofession(false)
        setOperating(false)
        setinteraction(false)
    }
    function showProfession(e){
        settopC('')
        setportfolioC('')
        setpostingC('')
        setprofessionC('active rounded-pill')
        setOperatingC('')
        setinteractionC('') 
        setportfolio(false)
        setposting(false)
        setprofession(true)
        setOperating(false)
        setinteraction(false)
    }
    function showOperating(e){
        settopC('')
        setportfolioC('')
        setpostingC('')
        setprofessionC('')
        setOperatingC('active rounded-pill')
        setinteractionC('') 
        setportfolio(false)
        setposting(false)
        setprofession(false)
        setOperating(true)
        setinteraction(false)
    }
    function showInteractions(e){
        settopC('')
        setportfolioC('')
        setpostingC('')
        setprofessionC('')
        setOperatingC('')
        setinteractionC('active rounded-pill') 

        setportfolio(false)
        setposting(false)
        setprofession(false)
        setOperating(false)
        setinteraction(true)
    }
    return (
        <>
            <div className='eventNavmain d-flex '>
                <div className='eventNav d-flex w-90 '>
                    <p className={topC} onClick={(e)=>showTop()} style={{cursor:'pointer'}}><BsStarHalf /> Top</p>
                    <p className={portfolioC} onClick={(e)=>showPortfolio(e)} style={{cursor:'pointer'}}><FiAward /> Portfolio</p>
                    <p className={postingC} onClick={(e)=>showClient(e)} style={{cursor:'pointer'}}> <RiClipboardLine /> Client Posting</p>
                    <p className={professionC} onClick={(e)=>showProfession(e)} style={{cursor:'pointer'}}><GiCubes/> Profession</p>
                    <p className={OperatingC} onClick={(e)=>showOperating(e)} style={{cursor:'pointer'}}><GrLocation/> Operating in</p>
                    <p className={interactionC} onClick={(e)=>showInteractions(e)} style={{cursor:'pointer'}}><BsQuestionDiamond /> Interactions</p>

                </div>

                <div className="portfolioCard d-flex w-90 row">
                    {props.portfolio && portfolio ?
                        props.portfolio.map((data, index) => {

                            return (
                                <div key={data.images[0].id} className="upper d-flex w-90">
                                    <img className='cardImage' src={data.images[0].image} alt='' />
                                    <div className='headingCard d-flex'>
                                        <img className='userImg' src={props.basic.image_hd} alt='' />
                                        <div >
                                            <h1>{props.basic.name}</h1>
                                            <p>@{props.basic.username}</p>
                                        </div>

                                    </div>
                                    <div className='cardCarosal'>
                                        <h1>{data.position}<span>at</span>{data.project_name} </h1>
                                        <p id={index} onClick={(e) => showMore(e)}>{'...more'}</p>
                                    </div>

                                    {show && index == Index ?
                                        <>
                                            <div className='showdataCard d-flex'>
                                                <div className='d-flex row'>
                                                    <p>Started </p>
                                                    <span>{data.started_time}</span>
                                                </div>

                                                <div className='d-flex row'>
                                                    <p>Ended</p>
                                                    <span>{data.ended_time}</span>
                                                </div>

                                            </div>
                                            <div className="description d-flex ">
                                                <p>
                                                    {data.description}
                                                </p>
                                            </div>
                                        </>

                                        :
                                        ''
                                    }

                                </div>


                            )
                        })

                        :
                        ''
                    }


                    {
                        props.client && posting ?
                            props.client.map((data, index) => {
                                // console.log(data)
                                return (
                                    <>
                                        <div className="upper1 d-flex  w-90">
                                            <div className="clientCard d-flex row">
                                                <div className='headingCard d-flex'>
                                                    <img className='userImg' src={props.basic.image_hd} alt='' />
                                                    <div >
                                                        <h1>{props.basic.name}</h1>
                                                        <p>@{props.basic.username}</p>
                                                    </div>

                                                </div>
                                                <div className='headingCard d-flex '>
                                                    <h2 className='card-desc mb-1'>Posting
                                                        <span class="spanClass badge rounded-pill fs-6 mx-3 btn-success">{data.is_active ? 'open' : 'closed'}</span>
                                                    </h2>
                                                </div>
                                                <div className='d-flex '>
                                                    <div className='showdataCard d-flex row '>
                                                        <h3 style={{ fontWeight: '700', color: 'black', fontSize: '20px' }} className='lookingfor mb-1'>Looking For</h3>
                                                        <span style={{ marginTop: '0px', fontWeight: '400' }}>{data.profession}</span>
                                                    </div>
                                                    <div className='showdataCard d-flex row '>
                                                        <h3 style={{ fontWeight: '700', color: 'black', fontSize: '20px' }} className='lookingfor mb-1'>Location</h3>
                                                        <span style={{ marginTop: '0px', fontWeight: '400' }}>{data.location}</span>
                                                    </div>

                                                </div>

                                                <div className='d-flex '>
                                                    <div className='showdataCard d-flex row '>
                                                        <h3 style={{ fontWeight: '700', color: 'black', fontSize: '20px' }} className='lookingfor mb-1'>Experience</h3>
                                                        <span style={{ marginTop: '0px', fontWeight: '400' }}>{data.experience} year</span>
                                                    </div>
                                                    <div className='showdataCard d-flex row '>
                                                        <h3 style={{ fontWeight: '700', color: 'black', fontSize: '20px' }} className='lookingfor mb-1'>Skills</h3>
                                                        <span style={{ marginTop: '0px', fontWeight: '400' }}>{data.skills}</span>
                                                    </div>

                                                </div>
                                                <div className='cardfooter d-flex  w-80 '>
                                                    <div className="firstEle">
                                                        <RiBarChartHorizontalFill /> Details
                                                    </div>
                                                    <div className="firstEle">
                                                       <BsPencil /> Apply
                                                    </div>
                                                    <div className="firstEle" style={{marginRight:'10px'}}>
                                                    <FiMail  /> Ping
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </>
                                )
                            })
                            :
                            ''
                    }

                    {props.profession && profession ?
                        props.profession.map((data) => {
                            // console.log(data.quickbook_details)
                            return (
                                <>
                                    <div className="upper1 d-flex  w-90">
                                        <div className="clientCard d-flex row">
                                            <div className='headingCard d-flex'>
                                                <img className='userImg' src={props.basic.image_hd} alt='' />
                                                <div >
                                                    <h1>{props.basic.name}</h1>
                                                    <p>@{props.basic.username}</p>
                                                </div>

                                            </div>
                                            <div className='headingCard d-flex '>
                                                <h2 className='card-desc mb-1'>Quickbook
                                                </h2>
                                            </div>
                                            <div className='d-flex '>
                                                <div className='showdataCard d-flex row '>
                                                    <h3 style={{ fontWeight: '700', color: 'black', fontSize: '20px' }} className='lookingfor mb-1'>Looking For</h3>
                                                </div>
                                                <div className='showdataCard d-flex row '>
                                                    <h3 style={{ fontWeight: '700', color: 'black', fontSize: '20px' }} className='lookingfor mb-1'>{data.title}</h3>
                                                    {data.quickbook_details ?
                                                        <span style={{ marginTop: '6px', fontWeight: '400', paddingLeft: '0px', fontSize: '15px' }}>Rate :<h5 style={{ fontSize: '15px', marginTop: '-19px', paddingLeft: '40px' }}>{data.quickbook_details.rate_currency}{data.quickbook_details.rate_amount}/{data.quickbook_details.rate_duration}</h5> </span>
                                                        :
                                                        <h1>no data</h1>
                                                    }

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })

                        :

                        ''
                    }

                    {props.location && Operating ?
                        props.location.map((data) => {
                            // console.log(data.quickbook_details)
                            return (
                                <>
                                    <div className="upper1 d-flex  w-90">
                                        <div className="clientCard d-flex row">
                                            <div className='headingCard d-flex'>
                                                <img className='userImg' src={props.basic.image_hd} alt='' />
                                                <div >
                                                    <h1>{props.basic.name}</h1>
                                                    <p>@{props.basic.username}</p>
                                                </div>

                                            </div>

                                            <div className='d-flex '>
                                                <div className='showdataCard d-flex row '>
                                                    <h3 style={{ fontWeight: '700', color: 'black', fontSize: '20px' }} className='lookingfor mb-1'>Looking For</h3>
                                                </div>
                                                <div className='showdataCard d-flex row '>
                                                    <h3 style={{ fontWeight: '700', color: 'black', fontSize: '20px' }} className='lookingfor mb-1'><span style={{ lineHeight: '1.2px', fontSize: '15px', fontWeight: '600' }}>Now available for work in </span>{data.city}, {data.zip_code}, {data.state}, {data.country}</h3>


                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })

                        :

                        ''
                    }


                    {props.questions && interaction ?
                        props.questions.map((data) => {
                            // console.log(data.quickbook_details)
                            return (
                                <>
                                    <div className="upper1 d-flex  w-90">
                                        <div className="clientCard d-flex row">
                                            <div className='headingCard d-flex'>
                                                <img className='userImg' src={props.basic.image_hd} alt='' />
                                                <div >
                                                    <h1>{props.basic.name}</h1>
                                                    <p>@{props.basic.username}</p>
                                                </div>

                                            </div>
                                            <div className='headingCard d-flex '>
                                                <h2 className='card-desc mb-1'>Question
                                                </h2>
                                            </div>
                                            <div className='d-flex '>

                                                <div className='showdataCard d-flex  '>
                                                    <h3 style={{ fontWeight: '700', color: 'black', fontSize: '20px', marginTop: '10px' }} className='lookingfor mb-1'>{data.title}</h3>


                                                </div>

                                            </div>
                                            <div className='cardfooter cardfooterQues d-flex  w-80 '>
                                                    <div className="firstEle">
                                                        <RiBarChartHorizontalFill /> Details
                                                    </div>
                                                    <div className="firstEle">
                                                       <BsPencil /> Apply
                                                    </div>
                                                    <div className="firstEle" style={{marginRight:'10px'}}>
                                                    <FiMail  /> Ping
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })

                        :

                        ''
                    }


                </div>
            </div>

        </>
    )
}

export default Events;
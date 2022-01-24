import React, { useState, useEffect } from 'react';
import Firstbio from './Firstbio';
import Events from './Events';
import Eventmain from './Eventmain';
import './bio.css';

// import { Container } from './styles';

function Bio() {
    const [data, setData] = useState();

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const url = 'https://py.crewbella.com/user/api/profile/chiragbalani'
        await fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            setData(data)
            console.log(data)
        })
    }
  
    return (
        <>
            {data ?
            
                <div className='mainbio justify-content-center'>
                    <div className="first ">
                        <Firstbio basic={data.basic} />
                    </div>
                    <div className="first1">
                     <Events basic={data.basic} location={data.locations} questions={data.questions} client={data.client_postings} portfolio={data.portfolio} profession={data.professions} />
                    </div>
                    <div className="first2">
                      <Eventmain events={data.events} />
                    </div>

                </div>
                :
                ''}

        </>
    )

}

export default Bio;
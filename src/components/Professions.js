import React from 'react';
// DATA
import data from '../assets/data';
// CSS
import '../styles/Professions.css';


const Profession = ({data}) => {
    
    return(
        <div className='prof-card'>
            <div className='prof-image'>
                <img src={data.image} alt={data.title}/>
                <div className='prof-image-overlay'></div>
            </div>
            <h4>{data.title}</h4>
        </div>
    )
}

const Professions = () => {

    return(
        <div className='prof-main-div'>
            <h3>We have <span>Professionals</span> in different fields. </h3>
            <div className='prof-content-div'>
                {
                    data && data.map(d => {
                        return <Profession data={d}/>
                    })
                }
            </div>
        </div>
    )
}

export default Professions;
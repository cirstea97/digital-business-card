import React from 'react';

export default function Photo () {
    return (
        <div className='rectangle'>
            <img className='img-size' alt='portrait' src={require('../images/portrait.jpg')} />
        </div>
    )
}
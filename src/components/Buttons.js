import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';

export default function Buttons () {
    return (
        <div>
            <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJTNHjprdZWnGNWFmPBRhnwVgrGRtdqjzTwsFtZzQhsfPQLpxTmXBRFrJTpfBtlvHTpKGlq'><button type='button' className='email'><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>Email</button></a>
        </div>
    )
}
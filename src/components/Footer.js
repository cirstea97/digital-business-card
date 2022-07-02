import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function Footer () {
    return (
        <div className='footer'>
            <a href='https://twitter.com/cosmiinn97'><FontAwesomeIcon className='twitter' icon={faTwitter}></FontAwesomeIcon></a>
            <a href='https://www.facebook.com/cirstea.cosmin.97'><FontAwesomeIcon className='facebook' icon={faFacebook}></FontAwesomeIcon></a>
            <a href='https://www.instagram.com/cirsteacosmin97/'><FontAwesomeIcon className='instagram' icon={faInstagram}></FontAwesomeIcon></a>
            <a href='https://github.com/cirstea97'><FontAwesomeIcon className='github' icon={faGithub}></FontAwesomeIcon></a>
            <a href='https://www.linkedin.com/in/constantin-cosmin-cirstea-073364199/'><FontAwesomeIcon className='linkedin' icon={faLinkedin}></FontAwesomeIcon></a>
        </div>
    )
}
import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'> Sign Out </p>
            </nav>
        );
    } else {
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button onClick={() => onRouteChange('signin')} className='button'> Sign In </button>
                <button onClick={() => onRouteChange('register')} className='button'> Register </button>
            </nav>
        );
    }
}

export default Navigation;
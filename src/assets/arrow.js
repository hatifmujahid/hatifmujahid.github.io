import React from 'react';

export default function Arrow(props) {
    return (
        <div style={{ textAlign: 'center' }}>
        <a href={props.ref} style={{ textDecoration: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', transform: 'rotate(90deg)' }}>
            <path d="M5 12h13M12 5l7 7-7 7"></path>
            </svg>
        </a>
        </div>
    );
}
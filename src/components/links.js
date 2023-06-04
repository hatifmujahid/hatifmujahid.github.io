import React from 'react';


export default function Links() {
    return (
        <div >
            <a  href="https://www.linkedin.com/in/muhammad-hatif" target="_blank" rel="noreferrer"onMouseEnter={(e) => (e.target.style.color = 'white')} onMouseLeave={(e)=> (e.target.style.color='#808080')}>LinkedIn     /</a>
            <a href="https://github.com/hatifmujahid" target="_blank" rel="noreferrer"onMouseEnter={(e) => (e.target.style.color = 'white')} onMouseLeave={(e)=> (e.target.style.color='#808080')}>     GitHub</a>
        </div>
    )
}
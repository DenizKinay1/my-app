import React from 'react'


function Text() {
    const genText = () => { 
        console.log("sample text");
      }
    return(
        <div>
            <h3>Test title h3</h3>
            <button onClick={genText}>Gen text</button>
        </div>
    )
}

export default Text;
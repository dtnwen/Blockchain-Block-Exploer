import React from 'react'
import { useState } from 'react'

const Seachbar = () => {
    const [block, setBlock] = useState()

    const onChange = evt => {
        evt.preventDefault()
        const block = evt.target.value
        setBlock(block)
    }

    const submit = () => {
        
    }
    
    return (
        <div className='app__searchbar'>
            <h1>The Ethereum Blockchain Explorer</h1>
            <label>
                <input placeholder='Type block number' value={block} onChange={onChange}></input>
                <button onClick={submit}>Submit</button>
            </label>
            <div>Block: {block}</div>
            <div></div>
            
        </div>
    )
}

export default Seachbar
import './Content.css'
import {useState, useEffect} from 'react'

function Content() {
    const [count, updateCount] =  useState(0)
    useEffect(() => {
        console.log(count)
    }, [count])
    return (
        <div className='content'>
            <button onClick={() => updateCount(count + 1)}>{`Vamos en el: ${count}`}</button>
        </div>
    )
}

export default Content;
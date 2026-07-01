import React, { useEffect, useRef } from 'react'

export const UseRefDemo1 = () => {

    const inputRef = useRef() //<input>

    const foucsInput = ()=>{
        inputRef.current.focus()
    }
    useEffect(()=>{
        foucsInput()
    },[])

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE REF DEMO 1</h1>
        <div>
            <label>NAME</label>
            <input ref={inputRef} type='text'></input>
        </div>
    </div>
  )
}

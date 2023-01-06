import React, { useCallback, useEffect, useRef, useState } from 'react';


export default function BtnCategory() {

    const [btnState, setBtnState] = useState(false)
    const  handelClick = ()=>{
      setBtnState(btnState => !btnState)
    
    }
    let toggleClassCheck = btnState ? ' active' :''
  return (
    <div>
    <h3 className={`btn-category1${toggleClassCheck}`} onClick={() => handelClick()} key={Math.random()} >button</h3>
    </div>
  )
}

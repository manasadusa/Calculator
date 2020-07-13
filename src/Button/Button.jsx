import React from 'react'
import './Button.scss'
 const Button=(props)=>{
      const checkOperator=(val)=>{
            return  !isNaN(val);
     }
    return(
        <div className={`button ${ checkOperator(props.children)?null:"operator"}`} onClick={()=>props.click(props.children)}>
                {props.children}
        </div>
    )
    }

    export default Button;
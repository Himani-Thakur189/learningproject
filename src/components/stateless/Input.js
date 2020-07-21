import React, { Component } from 'react';

const Input=({labelname,type,onhandleChange,placeholder})=>{
    return(
        <div>
        <div><label>{labelname}</label></div>
        <input type={type} placeholder={placeholder} onChange={onhandleChange}></input>
        </div>
    )
}
export default Input;
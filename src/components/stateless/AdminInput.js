import React  from 'react';
const AdminInput=({labelname,onhandleChange,type,id})=>{
return( <div style={{marginBottom:'20px'}}>
     <div><label>{labelname}</label></div>
    <input type={type} id={id} onChange={(e)=>onhandleChange(e)} style={{width:'130%'}}></input></div>
    );
}
export default AdminInput;
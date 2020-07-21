import React from 'react';
import {Search_Results, Fetch_Fail,Fetch_Success,Fetch_Data, Signup_Success, Signup_Fail} from './ActionTypes';
const initialState={
    Results:'',
    error:'',
    message:'done',
    counter:0
}
const Reducer=(state=initialState,action)=>{
  
  console.log('data action',action.type)
  switch(action.type){
     
      case Fetch_Data:return{
        ...state,counter:state.counter+10
      }
      case Fetch_Success:return{
        ...state,
        Results:action.payload
          }
      case Fetch_Fail:return{
       Results:'',
       error:action.payload
      }
      
      default: return state
  }
}
export default Reducer;
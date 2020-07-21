import {Search_Results, Fetch_Data, Fetch_Success,Fetch_Fail, Signup_Fail, Signup_Success} from './ActionTypes';
import {database} from '../components/firebase'
// import {auth} from '../components/firebase'

// export const searchResults=()=>{
//     return {
//         type:Search_Results
//     }
// }
export const fetchData=()=>{
    return {
        type:Fetch_Data,
       
    }
}
export const fetchSuccess=(Results)=>{
    console.log('results',Results)
    return{
        type:Fetch_Success,
        payload:Results
    }
}
export const fetchFail=(error)=>{
    return{
        type:Fetch_Fail,
        payload:error
    }
}

export const fetchDetails=(data)=>{
    console.log('fetchdetails',data)
    return async(dispatch,{getFirestore,getFirebase})=>{
        try{
        console.log('dispatch')
        const firestore=getFirestore();
       const data=await firestore.get({collection:`${data}`})
       if(!data){
           console.log('nothing')
           dispatch(fetchFail('errr'))
       }
       else{
           console.log('done')
        dispatch(fetchSuccess(data))
       }
    //   .then(snap=>{
    //       const data=snap.docs.map(doc=>doc.data());
    //       console.log('data inside themn ',data)
    //       dispatch(fetchSuccess(data))
    //   })
    
    //   .catch(err=>{
    //       console.log('errr inside catch',err)
    //       dispatch(fetchFail(err))
      }
    
    catch(e){
        console.log('errrrr',e)
    }
    }
    
}
// export const fetchDetails=(data)=>{
//     console.log('data fetchdetials',data)
//     return (dispatch,{getFirestore})=>{
//         console.log('inside return ')
//         const firestore=getFirestore()
      
//       firestore.collection(data).get()
//       .then(snap=>{
//           const data=snap.docs.map(doc=>doc.data());
//           console.log('data inside themn ',data)
//           dispatch(fetchSuccess(data))
//       })
//       .catch(err=>{
//           console.log('errr inside catch',err)
//           dispatch(fetchFail(err))
//       })
       
//     }  
// }



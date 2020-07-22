import { Search_Results, Fetch_Data, Fetch_Success, Fetch_Fail, Signup_Fail, Signup_Success } from './ActionTypes';
import { database } from '../firebase'
// import {auth} from '../components/firebase'

// export const searchResults=()=>{
//     return {
//         type:Search_Results
//     }
// }
export const fetchData = () => {
    return {
        type: Fetch_Data,

    }
}
export const fetchSuccess = (Results) => {
    console.log('results', Results)
    return {
        type: Fetch_Success,
        payload: Results
    }
}
export const fetchFail = (error) => {
    return {
        type: Fetch_Fail,
        payload: error
    }
}


// export const fetchDetails = (data) => {
//     console.log('data fetchdetials', data)
//     return (dispatch, getState, { getFirestore }) => {
//         console.log('inside return ', getState)
//         const firestore = getFirestore()

//         firestore.collection(data).get()
//             .then(snap => {
//                 const data = snap.docs.map(doc => doc.data());
//                 console.log('data inside themn ', data)
//                 dispatch(fetchSuccess(data))
//             })
//             .catch(err => {
//                 console.log('errr inside catch', err)
//                 dispatch(fetchFail(err))
//             })

//     }
// }

export const fetchDetails = data => {
    return dispatch => {
        console.log('data')
    }

}


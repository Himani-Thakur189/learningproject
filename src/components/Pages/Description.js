import React  from 'react';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import {useParams} from 'react-router-dom';
const Description =(props)=>{
    // console.log('descriptiom',props)
    //  const {author,name,image}=props.location.state
        console.log('props descriprtion',props)

// const readOnline=()=>{
//     window.open(pdfLink)
// }

        return ( <div>
            <div style={{ padding: '24vh 12vh 0vh 12vh'}}>
                <Grid container >
                    <Grid sm={3}>
                    {/* <img src={image height="250vh" width='90%'></img> */}
                     <p>PUBLISHED:2020</p>
                     <p>PAGES:122</p>
                    </Grid>
                    <Grid sm={9}>
                    <h2 className='booktitle'>name</h2>
                    <h5 className='authorsubtitle'>By author</h5>
                    <Button variant='contained' size='large' style={{backgroundColor:'#e25e2b',marginLeft:'18px'}} >Read Online</Button>
                    <div>
                        <p style={{marginLeft:'15px'}}>
                       
                            Their story begins in 1872, where Sara first sights on Godwin,
                            She didn't love him, but she needed him.
                            However fate played a game with their lives. Godwin goes to the cliffs of Cornwall
                             and there sees Heather Martin.
                            Forbidden love.
                            Sara, Godwin's wife was not going to be set aside and so it begins. An epic tale of friendship,
                             betrayal, passion and wickedness. 
                        </p>
                    </div>
                    </Grid>
                </Grid>
            
            </div>
        </div> );
    }

 
// const Description=()=>{
//     console.log('heyyyy')
//     return(<div>
//         heyyyy jdfuadfiufdoidfaiafoispodfiPOAIPOeipo
//     </div>)
// }
export default Description;
 

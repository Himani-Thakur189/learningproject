import React from 'react';
import { useHistory, useRouteMatch, Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import Description from '../../Screens/Description'
import Romance from '../../Screens/Romance'
import Header from './Header';
import Footer from './Footer'

const Card_SearchResults = (props) => {
    console.log('props card', props)

    const history = useHistory();
    let { path, url } = useRouteMatch();

    const handleClick = () => {
        console.log('url', props.item, url)
        history.push({
            pathname: `/description`,
            state: {
                item: props.item
            }
        })
    }
    // const name=item.name
    return (<div>
        <img src={props.item.ImageLink} width='70%' height='200px' onClick={() => handleClick()}></img>
        <div>
            <h5 style={{ marginTop: '2px' }}>{props.item.name}</h5>
            <p style={{ position: 'relative', top: '-21px' }}>{props.item.author}</p>
        </div>
        {/* <Switch>
<Route path={`${path}/:names`} render={props=><Description {...props} />} />
</Switch> */}
    </div>)
}
export default Card_SearchResults;
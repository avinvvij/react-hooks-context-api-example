import React , {useState , useEffect } from 'react';
import {appContext} from '../Config/RootProvider.jsx'

function CityList(props){    
    return(
        <div>
            <h4>Here are the list of cities you selected</h4>
            <appContext.Consumer>
                {
                    (value)=>{
                        return(
                            <div>
                                {
                                    value.state.cities && 
                                    value.state.cities.map((city , index)=>{
                                        return(<h5 key = {index}>{city}</h5>)
                                    }) 
                                }
                            </div>
                        )
                    }
                }
            </appContext.Consumer>
        </div>
    )
}

export default CityList
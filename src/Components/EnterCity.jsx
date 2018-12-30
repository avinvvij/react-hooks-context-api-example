import React , {useState , useContext , useEffect} from 'react'
import Select from 'react-select'
import {appContext} from '../Config/RootProvider'
import axios from 'axios'

function EnterCity(props){

    const [selectedCity , setSelectedCity] = useState('');
    const [optionData , setOptionData] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const context = useContext(appContext);
    

    function submitCity(){        
        if(selectedCity.trim() != ""){
            //add the city into the root store            
            let my_cities = context.state.cities?context.state.cities:[]            
            my_cities.push(selectedCity)
            context.action.enterTypePayloadInState('cities' , my_cities);
        }
    }

    useEffect(()=>{
        //any changes you want to handle when hook is updated do here
    })

    function cityTextChange(text){     
        setIsLoading(true)             
        axios(
            {
                method:'GET',
                mode: 'no-cors',            
                url: "https://cors-anywhere.herokuapp.com/http://gd.geobytes.com/AutoCompleteCity?q="+text,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Origin": "GET",
                    "Access-Control-Allow-Origin": "http://localhost:3000/",
                    "crossorigin": true,
                    'Content-Type': 'application/json',
                    'withCredentials': true,
                    'credentials': 'same-origin',
                  },
                
            }).then(response=>{
                let city_arr = []                
                response.data.map(city=>{
                    if(city!="%s"){
                        city_arr.push({value: city , label: city});        
                    }
                })
                setOptionData(city_arr)
                setIsLoading(false)
        }).catch(error=>{
            //oooppps handle the error
            console.log(error)
        })
    }    

    return(
        <div style = {{marginTop: '10px'}}>
            <h2>Welcome to demo of react hooks and context api</h2>
            <div style= {{margin:'0px 80px 0px 80px'}}>
                {true && <Select isLoading={isLoading} isClearable onInputChange={(text)=>{cityTextChange(text)}} onChange = {(city)=>{setSelectedCity(city.value)}} placeholder={"Select City"} options = {optionData}></Select>}
                {
                 false && <input type = "text" onChange= {(event)=>{cityTextChange(event.target.value)}}></input>
                }
            </div>
            <button onClick = {submitCity} style={{marginTop: '10px',backgroundColor: '#18a1e2',width: '100px',height: '40px',color: 'white',fontSize: '20px',border: '0px',borderRadius: '5px'}}>Submit</button>
        </div>
    )
}

export default EnterCity
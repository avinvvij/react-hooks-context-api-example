import React , {useState , useContext , useEffect} from 'react'
import Select from 'react-select'
import {appContext} from '../Config/RootProvider'

function EnterCity(props){

    const [selectedCity , setSelectedCity] = useState('');
    const context = useContext(appContext);


    const data = [
        {
            label: 'Nagpur',
            value: 'Nagpur'
        },
        {
            label: 'Pune',
            value: 'Pune'
        },{
            label: 'New Delhi',
            value: 'New Delhi'
        }
    ]

    function submitCity(){
        console.log(selectedCity)
        if(selectedCity.trim() != ""){
            //add the city into the root store
            console.log(context)
            let my_cities = context.state.cities?context.state.cities:[]            
            my_cities.push(selectedCity)
            context.action.enterTypePayloadInState('cities' , my_cities);            
            
        }
    }

    return(
        <div style = {{marginTop: '10px'}}>
            <h2>Welcome to demo of react hooks and context api</h2>
            <div style= {{margin:'0px 80px 0px 80px'}}>
                <Select defaultInputValue = {selectedCity} onChange = {(city)=>{setSelectedCity(city.value)}} placeholder={"Select City"} options = {data}></Select>
            </div>
            <button onClick = {submitCity} style={{marginTop: '10px',backgroundColor: '#18a1e2',width: '100px',height: '40px',color: 'white',fontSize: '20px',border: '0px',borderRadius: '5px'}}>Submit</button>
        </div>
    )
}

export default EnterCity
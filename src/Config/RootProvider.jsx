import React , {Component , createContext} from 'react';

export const appContext = createContext();

class RootProvider extends Component{
    state = {};

    enterTypePayloadInState = (type , payload)=>{
        this.setState({
            [type]: payload
        })
    }

    render(){
        return(
            <appContext.Provider value = {{
                state: this.state,
                action: {enterTypePayloadInState: this.enterTypePayloadInState}
            }}>
                {this.props.children}
            </appContext.Provider>
        )
    }
}

export default RootProvider
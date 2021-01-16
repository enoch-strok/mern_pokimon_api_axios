import React from 'react';
import Axios from 'axios';

const Main = (props) => {
    const {state, setState} = props;

    const updatePokidex = () => {
            console.log('Hello Use Effect!')
            Axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then(response => {
            return response.data;
        }).then(response => {
            //   console.log(response);
                setState({
                pokimon: response.results
            });
            //   console.log(props.state);
        }).catch(err=>{
            console.log(err);
        });
    };
    
    return (
        <div>
            Hello Return from Main!
            <button onClick={updatePokidex}>Update Pokidex</button>
            {state.pokimon ? state.pokimon.map((item, index)=>{
                return(<div key={index}>{item.name}</div>)
            }):null}
        </div>

    );
}
export default Main;
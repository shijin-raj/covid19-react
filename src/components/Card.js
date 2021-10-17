import React, { Component } from 'react'
import '../card.css';
import Counter from '../components/Counter'
class Card extends Component{
// constructor(props){
//     super(props);
// }

    render(){
        const state_data=this.props.data;
       // const recovery_perc = (parseInt(state_data.recovered)/parseInt(state_data.confirmed))*100;
        //const death_perc = (parseInt(state_data.deceased)/parseInt(state_data.confirmed))*100;
        const test_positivity = ((parseInt(state_data.total.confirmed)/parseInt(state_data.total.tested))*100).toFixed(2);

        return (
            <div className='card'>
                <h3>{this.props.title}</h3>
                <div>

                {/* <Counter counterTitle="Population" counterValue={parseInt(state_data.total.population).toLocaleString()} progress="100%"/> */}
                <Counter counterTitle="Tested" counterValue={parseInt(state_data.total.tested).toLocaleString()} progress="100%"/>
                <Counter counterTitle="Confirmed" counterValue={parseInt(state_data.total.confirmed).toLocaleString()} progress="100%"/>
                <Counter counterTitle="Positivity Rate" counterValue={test_positivity+"%"} progress="100%"/>
                <Counter counterTitle="Recovered" counterValue={parseInt(state_data.total.recovered).toLocaleString()} progress="100%"/>
                <Counter counterTitle="Deceased" counterValue={parseInt(state_data.total.deceased).toLocaleString()} progress="100%"/>
                </div>
            </div>
        );
    }
}

export default Card;
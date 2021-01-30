import React, { Component } from 'react'
import '../card.css';
import Counter from '../components/Counter'
class Card extends Component{
    render(){
        const state_name=this.props.stateName?this.props.stateName:"Other";
        return (
            <div className='card'>
                <img className='bgimage' src="/img/virus.png" alt=""/>
                <h1>{state_name}</h1>
                <Counter counterTitle="Total people infected" counterValue="1,787" progress="80%"/>
                <Counter counterTitle="Total people infected" counterValue="1,787" progress="70%"/>
                <Counter counterTitle="Total people infected" counterValue="1,787" progress="60%"/>
                <Counter counterTitle="Total people infected" counterValue="1,787" progress="45%"/>
            </div>
        );
    }
}

export default Card;
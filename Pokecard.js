import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (num)=>( num<=999 ? `00${num}`.slice(-3) : num )

export class Pokecard extends Component {
    render() {
         var {id,name,type,exp}=this.props;
    let imgSrc=`${POKE_API}${padToThree(id)}.png`;
        return (
            <div className="Pokecard">
              <h1 className="Pokecard-title">{name}</h1>
              <img src={imgSrc} alt={name}/>
              <div className="Pokecard-data">TYPE: {type}</div>
              <div className="Pokecard-data">EXP: {exp}</div>
            </div>
        );
    }
}

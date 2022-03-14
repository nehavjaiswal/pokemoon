import React,{Component}  from 'react';
import "./Pokecard.css";
const PKE_IMG = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

// let padTOThree = (number) => (number <= 999 ? `00$(number)`.slice(-3) : number)
class Pokecard extends React.Component {
    render() {
        // let imgSrc = `${PKE_IMG}${padTOThree(this.props.id)}.png`;
        let imgSrc = `${PKE_IMG}${this.props.id}.png`;
      return (
          <div className='pokecard'>
              <h1 className='pokecard-title'> {this.props.name} </h1>
              <div className='pokecard-img'>
                <img src= {imgSrc} alt = {this.props.name} />
              </div>
              
              <div className='pokecard-data'>Type : {this.props.type}</div>
              <div className='pokecard-data'> EXP : {this.props.exp}</div>
          </div>
      )
    }
  }



export default Pokecard;
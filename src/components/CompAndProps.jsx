import React, { Component } from "react"; 
import '../App.css';
function Square(props) {
    return (
        <div>
            <h2> Hai hehe</h2>
            <p>Saya components {props.komponen}</p>
            <a href={props.link}>Go to Github</a>
        </div>
    );
}


export default class CompAndProps extends Component {
    render() {
        const bgColor = {
            backgroundColor: this.props.bgColor
        }
        return (
            <div className="wrapper">
                <div className="card" style={bgColor}>
                    <Square komponen='Kenza Vianda Dwiputra' link='https://github.com/Zavians' />
                </div>
                <div className="User-info" style={bgColor}>
                    <Square komponen='M.Yahya Oktariansyah' link='https://github.com/myoktariansyah' />
                </div>
                <div className="User-info" style={bgColor}>
                    <Square komponen='M. Razi' link='https://github.com/fachru24'/>
                </div>
                <div className="User-info" style={bgColor}>
                    <Square komponen='Novita Aulya' link='https://github.com/novitaaly' />
                </div>
            </div>
        )
    }
}


import React, { Component } from "react";
import "./menuEstilo.css"
// Componentes baseados em classes

export default class Menu extends Component {

    render() {
        return (
            <header className="card-menu">
                <ul className="card-menu-botoes">
                    <ul>
                        <h3 className="card-logo">
                            LOGO
                        </h3>
                    </ul>
                    <ul className="card-botoes">Home</ul>
                    <ul className="card-botoes">Vagas</ul>
                    <ul className="card-botoes">Perfil</ul>
                </ul>
            </header>
        )
    }
}
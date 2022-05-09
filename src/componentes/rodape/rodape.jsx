import React, { Component } from "react";
import "./rodapeEstilo.css"

export default class Rodape extends Component {
    render() {
        return (
            <footer className="card-rodape">
                <h3 className="card-logo">LOGO</h3>
                <ul className="card-menu-rodape">
                    <ul>
                        <h4 className="card-titulo">
                            Inicio
                        </h4>
                    </ul>
                    <ul className="">Home</ul>
                    <ul className="">Vagas</ul>
                    <ul className="">Perfil</ul>
                </ul>
                <ul className="card-menu-rodape">
                    <ul>
                        <h4 className="card-titulo">
                            Suporte
                        </h4>
                    </ul>
                    <ul className="">Contato</ul>
                    <ul className="">Chat</ul>
                    <ul className="">FAQ</ul>
                </ul>
                <ul className="card-menu-rodape">
                  
                        {/* <p className="card-titulo">
                            Feito por @Equipe 1
                        </p> */}
                </ul>
            
            </footer>
        )
    }
}
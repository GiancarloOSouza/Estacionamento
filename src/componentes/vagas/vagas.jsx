import React, { Component } from "react";
import "./vagasEstilo.css"

export default class Vagas extends Component {
    render() {
        return (
            <section className="card-vagas-global">
                <h2>
                    Vagas disponiveis
                </h2>
                <ul className="card-vagas">

                
                {Array.of("Setor A", "Setor B", "Setor C").map((setores, index) => {
                    return (
                        <ul key={index} className="card-vagas-setNum">
                            <h4 className="card-vagas-setor">{setores}</h4>

                            {Array.of("1", "2", "3", "4", "5", "6").map((numeros, index) => {
                                return (
                                    <ul key={index} className="card-vagas-num">
                                        <ul >{numeros}</ul>
                                    </ul>
                                )
                            })}

                        </ul>
                    )
                })}
                </ul>
            </section>
        )
    }
}

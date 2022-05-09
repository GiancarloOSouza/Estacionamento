import { Component } from "react";
import Rodape from "./componentes/rodape/rodape";
import Menu from "./componentes/Menu/Menu";
import Vagas from "./componentes/vagas/vagas";


class App extends Component {
  render() {
    return (
      <section>
        <Menu/>
        <Vagas/>
        <Rodape/>
      </section>
    )
  }
}

export default App;

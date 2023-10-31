import { Component } from "react";
import Productos from "./Productos";
import Layout from "./Layout";
import Navbar from "./Navbar";
// import Title from "./Title";
//Imagenes
import arverjaImg from "../../assets/img/products/arverjas.jpg";
import tomateImg from "../../assets/img/products/tomate.jpg";
import lechugaImg from "../../assets/img/products/lechuga.jpg";

class MainCart extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: tomateImg },
      { name: "Arbejas", price: 2500, img: arverjaImg },
      { name: "Lechuga", price: 500, img: lechugaImg },
    ],
    carro: [],
    esCarroVisible: false,
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return;
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    const { esCarroVisible } = this.state;

    return (
      <div className="my-12 flex flex-col gap-2 items-center justify-center">
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          {/* <Title /> */}
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default MainCart;

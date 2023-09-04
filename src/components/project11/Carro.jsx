import { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
  carro: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20,
  }
}
class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
    return (
      <div >
        <span
          className='relative top-5 left-4'
        // style={styles.bubble}
        >
          {cantidad !== 0
            ? <BubbleAlert value={cantidad} />
            : null}
        </span>
        <button
          className='bg-black text-white rounded-md px-2 py-1 text-[2rem] hover:scale-[0.9] duration-75'
          // style={styles.carro}
          onClick={mostrarCarro}
        >
          Carro
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}

      </div>
    )
  }
}

export default Carro

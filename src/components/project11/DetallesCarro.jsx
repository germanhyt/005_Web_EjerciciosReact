import { Component } from 'react'

const styles = {
  detallesCarro: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
    borderRadius: '5px',
    width: '300px',
    right: 50,
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  producto: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: 'solid 1px #aaa',
  },
}
class DetallesCarro extends Component {
  render() {
    const { carro } = this.props
    console.log(carro)
    return (
      <div
        className='absolute my-4 bg-white border-2 w-56 px-4 py-2'
      // style={styles.detallesCarro}
      >
        <ul
          className='flex flex-col gap-4'
        // style={styles.ul}
        >
          {carro.map(x =>
            <li
              key={x.name}
              className='flex gap-4'
            // style={styles.producto}
            >
              <img alt={x.name} src={x.img} width='50' height='32' />
              {x.name} <span>{x.cantidad}</span>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default DetallesCarro

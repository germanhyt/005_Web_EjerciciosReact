import { Component } from 'react'

const styles = {
  logo: {
    fontWeight: '700',
    fontSize: '2rem',
  }
}

class Logo extends Component {
  render() {
    return (
      <div
        className=' text-black border-2 px-2 py-1 rounded-lg font-bold text-[1rem] sm:text-[2rem]'
      // style={styles.logo}
      >
        Tienda Virtual (Shop)
      </div>
    )
  }
}

export default Logo

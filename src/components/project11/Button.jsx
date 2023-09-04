import { Component } from 'react'

const styles = {
  button: {
    backgroundColor: '#0A283E',
    color: '#fff',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
}
class Button extends Component {
  render() {
    return (
      <button
        // style={styles.button}
        className='bg-blue-800 text-white px-2 py-1 rounded-md'
        {...this.props}
      />
    )
  }
}

export default Button

import { Component } from 'react'

const styles = {
  layout: {
    backgroundColor: '#fff',
    color: '#0A283E',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    width: '1200px',
  }
}
class Layout extends Component {
  render() {
    return (
      <div
        className='flex flex-col'
      // style={styles.layout}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Layout

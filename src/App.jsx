import React from 'react'
import WelcomeReact from './components/project1/WelcomeReact'
import ChangeImage from './components/project1/ChangeImage'
import Conversion from './components/project1/Conversion'
import Counter from './components/project2/Counter'
import ChangeMoney from './components/project2/ChangeMoney'
import Message from './components/project2/Message'
import CostDinner from './components/project4/CostDinner'


function App() {
  return (
    <>
      <section className='bg-[#11DDAA] py-12'>
        <WelcomeReact />
        <ChangeImage />
        <Conversion />
      </section>
      <section className='bg-[#FFBBAA] py-12'>
        <Counter />
        <ChangeMoney />
        <Message />
      </section>
      <section className='bg-[#11AABB] py-12'>
        <CostDinner/>
      </section>
      <section className=''>

      </section>
      <section className=''>

      </section>
      <section className=''>

      </section>
      <section className=''>

      </section>
      <section className=''>

      </section>
      <section className=''>

      </section>
      <section className=''>

      </section>
      <section className=''>

      </section>
      <section className=''>

      </section>
      <section className=''>

      </section>
      <section className=''>

      </section>
    </>
  )
}

export default App
import { useState } from 'react'
import { Address } from './components/forms/Address'
import Detail from './components/forms/Detail'
import Property from './components/forms/Property'

import { Navigation } from './components/Nav'

function App() {
  

  return (
    <div className="App">
      <Navigation />
      <Property />
      {/* <Detail/>
      <Address /> */}
      
    </div>
  )
}

export default App

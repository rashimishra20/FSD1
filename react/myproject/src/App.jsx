import React from 'react'
import Book from './component/Book'
import Physics from './component/Physics'
import Chemistry from './component/Chemistry'
import Maths from './component/Maths'

const App = () => {
  return (
    <div>
      <Book/>
      <Physics/>
      <Chemistry/>
      <Maths/>
    </div>
  )
}

export default App
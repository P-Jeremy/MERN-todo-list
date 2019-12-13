import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import TodoMain from './components/main/todoMain'
import store from './store/store'

function App() {
  return (
    <div className="App">
      <main>
        <Provider store={store}>
          <TodoMain />
        </Provider>
      </main>
    </div>
  )
}

export default App

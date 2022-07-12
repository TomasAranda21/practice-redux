import { useEffect } from 'react'
import { useState } from 'react'
import Header from './components/Header'
import UsersList from './components/UsersList'

// redux

import { Provider} from 'react-redux'

import store from './redux/index'

function App() {

  return (
    <Provider store={store}>

      <div className="">

        <Header/>
        
        <UsersList/>

      </div>

    </Provider>
  )
}

export default App


import Todos from './components/Todos'
import {Provider} from 'react-redux';
import {store} from './app/store.js'
import './App.css'

function App() {


  return (
    <>
    <Provider store={store}>
    <Todos/>
    </Provider>
    
    </>
  )
}

export default App

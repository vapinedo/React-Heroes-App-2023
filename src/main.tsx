import React from 'react'
import App from './App.tsx'
import store from './core/store.tsx'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

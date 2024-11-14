import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './Components/UseContext.jsx'

createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <App />
    </ContextProvider>
    
)

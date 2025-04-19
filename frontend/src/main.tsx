import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
import LoginForm from './components/LoginForm.tsx'
import NewAccount from './components/NewAccount.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NewAccount />
    {/* <LoginForm /> */}
  </StrictMode>,
)

import { Outlet } from 'react-router-dom';
import './App.css';
import { Routes } from './routes/Routes';
import { Providers } from './providers/AllProviders';

function App() {
  return (
    <Providers>
      <Routes />
      <Outlet />
    </Providers>
  )
}

export default App

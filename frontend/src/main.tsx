import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginForm from './components/LoginForm.tsx';
import NewAccount from './components/NewAccount.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewAccount />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

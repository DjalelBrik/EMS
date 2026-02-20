import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './Routes/App';
import { EmployeeProvider } from './context/EmployeeContext';
import { DepartmentProvider } from './context/DepartmentContext';
import { LeaveProvider } from './context/LeaveContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <EmployeeProvider>
        <DepartmentProvider>
          <LeaveProvider>
          <App />
          </LeaveProvider>
        </DepartmentProvider>
      </EmployeeProvider>
    </BrowserRouter>
  </StrictMode>
);

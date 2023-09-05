import './App.css'
import { AppRoutes } from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from "react-query"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App

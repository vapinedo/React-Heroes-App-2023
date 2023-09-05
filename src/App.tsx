import './App.css'
import { QueryClientProvider, QueryClient } from "react-query"
import HeroesList from './modules/features/heroes/pages/HeroesList/HeroesList'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="container py-5">
        <HeroesList />
      </section>
    </QueryClientProvider>
  )
}

export default App

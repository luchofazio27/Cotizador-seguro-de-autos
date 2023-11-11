import { QuoterProvider } from "./context/QuoterProvider"
import AppSeguro from "./components/AppSeguro"

function App() {
  

  return (
    <QuoterProvider>
      <AppSeguro />
    </QuoterProvider>
    
  )
}

export default App

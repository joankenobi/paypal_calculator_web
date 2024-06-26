import { BrowserRouter} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { CalculatorPage } from './pages/CalculatorPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <CalculatorPage />
        <Toaster /> {/* toaster muestra notificaciones pero no se ejecuta hasta ejecutar toast en una page*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
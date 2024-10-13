import { BrowserRouter, Routes, Route, Navigator} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { CalculatorPage } from './pages/CalculatorPage';
import Homepage  from './pages/homepageCambiosPayclone';
import PayPalCalculator from './pages/PaypalCalculatorClone';
import { Navigation } from './components/Navigation';
import { Card } from './components/Card';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/calculator" element={<PayPalCalculator />} />
          <Route path="/paypal-calculator" element={<CalculatorPage />} />
        </Routes>
        {/* <Toaster />*/}
        {/* toaster muestra notificaciones pero no se ejecuta hasta ejecutar toast en una page*/}
        {/* <Card />  */}
      </div>
    </BrowserRouter>
  );
}

export default App;
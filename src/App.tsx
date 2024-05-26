import { BrowserRouter} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { CalculatorPage } from './pages/CalculatorPage';
import { Navigation } from './components/Navigation';
import { Card, CardBody } from './components/Card';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Card body={"hola mundo"} />
        <CardBody 
          title={"hola mundo"}
          text={"hola mundo"}
          button={{
            text: "go to google",
            link: "https://www.google.com"
          }} 
        
        />
        <CalculatorPage />
        <Toaster /> {/* toaster muestra notificaciones pero no se ejecuta hasta ejecutar toast en una page*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
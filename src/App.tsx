import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { CalculatorPage } from './pages/CalculatorPage';
import { Navigation } from './components/Navigation';
import { Card, CardBody } from './components/Card';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Card children/>
        <CardBody
          title={"title 2"}
          text={"Cacao"}
          button={{
            text: "go to google",
            link: "https://www.google.com"
          }}
        />
        <Card>
          <CardBody
            title={"soy un children"}
            text={"Con chindren puedo tener un componente dentro de otro componente"}
            button={{
              text: "go to google",
              link: "https://www.google.com"
            }} />
        </Card>
        <CalculatorPage />
        <Toaster /> {/* toaster muestra notificaciones pero no se ejecuta hasta ejecutar toast en una page*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
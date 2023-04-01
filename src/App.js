
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Footer from './Layout/Foot/Footer';
import Contact from './Components/Contact';
import Round from './round ball/Round';

function App() {
  return (
    <div className="App">
      <Layout />
      <Home />
      <Contact />

      <Footer />
      
      
    </div>
  );
}

export default App;

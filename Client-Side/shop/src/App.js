import './App.css';
import Navbar from './components/navbar/Navbar'
import Modal from './components/modal/Modal'
import Demos from './components/pages/demo'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App page">
      <Navbar/>
      {/* <Modal/> */}
      <Demos/>
      <Footer/>
    </div>
  );
}

export default App;

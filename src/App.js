import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import About from './pages/About'
import Footer from './components/templates/Footer';
// import IfgfKids from './pages/IfgfKids';
import IfgfYouth from './pages/IfgfYouth';


function App() {
  return (
    <>
      {/* <About/> */}
      {/* <IfgfKids/> */}
      <IfgfYouth/>
      <Footer/>
    </>
  );
}

export default App;

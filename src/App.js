
import './App.css';
import RoutesComponent from './Routes/Routes'; 
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
 <div className='app'>
  <Header/>
<div className='container'>
  <Sidebar/>
  <RoutesComponent/>
</div>
<Footer/>
 </div>
 );
}

export default App;

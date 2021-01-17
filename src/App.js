import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TotalTrees from './components/TotalTrees';
import RedeemSelect from './components/RedeemSelect';
import TreeCreation from './components/TreeCreation';
import PointStatus from './components/PointStatus';
import { Route, Switch } from 'react-router-dom';
import Impact from './Routes/Impact';
import Home from './Routes/Home';
import Success from './Routes/Success';

function App() {
  const points = 29500;

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' render={()=>(
            <Home />
        )}/>
        <Route exact path='/redeem' render={()=>(
          <TreeCreation />
        )}/>
        <Route exact path='/success' render={()=>(
          <Success />
        )}/>
        <Route exact path='/impact' render={()=>(
          <Impact />
        )}/>
      </Switch>
      <Footer />
      
    </div>
  );
}

export default App;

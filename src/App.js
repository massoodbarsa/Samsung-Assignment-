import './App.css';
import DataFetching from './components/DataFetching';
import ProductContextProvider from './context/ProductContextProvider'
import Home from '../src/pages/Home'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Product from './pages/Product';
import Navbar from './components/Navbar';


function App() {

  return (
    <ProductContextProvider>
      <BrowserRouter>
        <DataFetching />
        <Navbar/>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/Product/:id"><Product /></Route>
        </Switch>
      </BrowserRouter>
    </ProductContextProvider>
  );
}

export default App;

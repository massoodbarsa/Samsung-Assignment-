import './App.css';
import DataFetching from './components/DataFetching';
import ProductContextProvider from './context/ProductContextProvider'
import Home from '../src/pages/Home'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Products from './pages/Products';
import Navbar from './components/Navbar';


function App() {

  return (
    <ProductContextProvider>
      <BrowserRouter>
        <DataFetching />
        <Navbar/>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/Product/:id"><Products /></Route>
        </Switch>
      </BrowserRouter>
    </ProductContextProvider>
  );
}

export default App;

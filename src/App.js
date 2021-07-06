import './App.css';
import DataFetching from './components/DataFetching';
import ProductContextProvider from './context/ProductContextProvider'
import Home from '../src/pages/Home'


function App() {
  
  return (
    <ProductContextProvider>
        <DataFetching />
        <Home/>
    </ProductContextProvider>
    
   
  );
}

export default App;

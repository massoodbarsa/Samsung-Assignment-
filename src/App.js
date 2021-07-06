import './App.css';
import DataFetching from './components/DataFetching';
import ProductContextProvider from './context/ProductContextProvider'


function App() {
  return (
    <ProductContextProvider>
        <DataFetching />
    </ProductContextProvider>
    
   
  );
}

export default App;

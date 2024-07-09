import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/Product/ProductsList/ProductsList';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <ProductsList/>
    </>
  );
}

export default App;

import React from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Products from "./components/Products";
import Articles from './components/Articles';
import Main from "./components/Main";
import Medias from "./components/Medias";
import FAQs from './components/FAQs';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Products />
      <Articles />
      <Main />
      <Medias />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;

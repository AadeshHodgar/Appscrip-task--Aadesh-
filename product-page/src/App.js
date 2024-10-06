import React from 'react';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import MainPage from './MainPage';
// import Sidebar from './components/Sidebar/Sidebarr';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Sidebar/> */}
      {/* <HomePage /> */}
      <MainPage/>
      <Footer/>
      
    </div>
  );
}

export default App;

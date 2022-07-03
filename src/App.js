import React, {useState} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'



function App() {

  const [score, setScore] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

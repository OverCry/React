import Header from './components/Header'

function App() {
  //always returns a single parent element
  // basically, encapsulate everything in one <>
  // if you dont want it to be grouped as a div, use an empty angle bracket
  const name = 'Wong'

  //can write javascript right into {}
  //ints and bool uses {} instead of ""

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;

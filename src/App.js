function App() {
  //always returns a single parent element
  // basically, encapsulate everything in one <>
  // if you dont want it to be grouped as a div, use an empty angle bracket
  const name = 'Wong'

  //can write javascript right into {}

  return (
    <div className="container">
      <h1>Hello From React</h1>
      <h2>Hello {name}</h2>
    </div>
  );
}

export default App;

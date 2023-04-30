import { Navbar, Hero } from "./pages";
import { useContext } from "react";
import { DataContext } from "./Context";
import HomePage from "./pages/home page/HomePage";

function App() {
  const { showMenu } = useContext(DataContext);
  return (
    <div className="App">
      <Navbar />
      {!showMenu && <HomePage />}
    </div>
  );
}

export default App;

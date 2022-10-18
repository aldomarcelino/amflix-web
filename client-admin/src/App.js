import Dashboard from "./components/Dashboard";
import Genre from "./components/Genre";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Signin from "./components/Signin";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Sidebar />
      {/* <Signin /> */}
      <Dashboard />
      <Genre />
    </div>
  );
}

export default App;

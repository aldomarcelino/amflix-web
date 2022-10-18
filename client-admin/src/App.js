import Dashboard from "./pages/Dashboard";
import Genre from "./pages/Genre";
import NavBar from "./components/NavBar";
import RegisterAdmin from "./pages/RegisterAdmin";
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
      <RegisterAdmin />
    </div>
  );
}

export default App;

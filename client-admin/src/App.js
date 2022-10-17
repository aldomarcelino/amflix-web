import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Signin from "./components/Signin";

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <Signin /> */}
      <Dashboard />
    </div>
  );
}

export default App;

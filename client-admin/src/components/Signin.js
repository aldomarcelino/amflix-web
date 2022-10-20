import { useNavigate } from "react-router-dom";
function Signin() {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("access_token", "masukkk");
    navigate("/");
  };
  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-left text-4xl font-bold text-red font-mono">
            AMFLIX
          </h1>
          <h1 className="text-left text-2xl font-semibold font-sans">
            Admin Panel
          </h1>
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="******************"
          />
          <label for="remember" className="flex items-center w-1/2">
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-1 bg-white shadow"
            />
            <span className="text-sm text-gray-700 pt-1">Show Password</span>
          </label>
        </div>
        <div className="flex flex-col justify-items-start">
          <button
            onClick={handleLogin}
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-grey-darker mb-3 bg-red font-bold text-stone-50"
          >
            Sign In
          </button>
          <button>
            <p className="font-bold text-sm text-blue-500">Forgot Password?</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Signin;

function Signin() {
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
        </div>
        <div className="flex flex-col justify-items-start">
          <button>
            <p className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
              Forgot Password?
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Signin;

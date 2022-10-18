export default function NavBar() {
  return (
    <nav className="py-3 bg-black">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex-shrink-0 flex items-center">
          <h1 className="text-red text-3xl font-bold">AMFLIX</h1>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4 align-middle">
            <button
              href="#"
              className="text-white opacity-80 text-lg hover:opacity-100 px-3 py-2"
            >
              Home
            </button>
            <button
              href="#"
              className="text-white opacity-80 text-lg hover:opacity-100 px-3 py-2"
            >
              My List
            </button>
            <button
              href="#"
              className="text-white opacity-80 text-lg hover:opacity-100 px-3 py-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function NavBar() {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-red text-4xl font-bold cursor-pointer ">
        AMFLIX
      </h1>
      <div>
        <button
          href="#"
          className="text-white opacity-80 text-  text-lg hover:opacity-100 px-3 py-2"
        >
          Go To Admin Page
        </button>
      </div>
    </div>
  );
}

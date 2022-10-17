import Table from "./Table";

export default function Dashboard() {
  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Movie List
                </h3>
              </div>
              <div className="px-4">
                <button className="flex items-center h-10 bg-red text-white active:bg-rose-900 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Create Movie
                </button>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <Table />
          </div>
        </div>
      </div>
    </section>
  );
}

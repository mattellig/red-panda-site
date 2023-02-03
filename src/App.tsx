import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Link
        to="/"
        className="text-4xl text-center px-4 py-6 font-semibold"
        aria-label="Go to home"
      >
        Why Red Pandas are totes fire 🔥
      </Link>
      <aside className="flex-shrink-0 w-full bg-[#e1cee5]">
        <ul className="flex flex-wrap p-4 justify-center gap-x-6 text-lg">
          <li>
            <Link to="/" className="text-blue-900 hover:underline">
              IYKYK
            </Link>
          </li>
          <li>
            <Link to="scientific" className="text-blue-900 hover:underline">
              The tea
            </Link>
          </li>
          <li>
            <Link to="gallery/1" className="text-blue-900 hover:underline">
              Dank photos
            </Link>
          </li>
          <li>
            <Link to="anatomy" className="text-blue-900 hover:underline">
              No cap data
            </Link>
          </li>
          <li>
            <Link to="facts" className="text-blue-900 hover:underline">
              Vibe check
            </Link>
          </li>
          <li>
            <Link to="diet" className="text-blue-900 hover:underline">
              Boujee eats
            </Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-8 flex justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default App;

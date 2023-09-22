import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 mb-10 bg-gray-700">
      <h1 className="sm:text-2xl text-xl font-semibold">
        <Link href="/">Next Mongo</Link>
      </h1>
      <ul className="sm:text-xl flex items-center gap-10 text-lg">
        <li>
          <Link
            href="/new-task"
            className="hover:bg-sky-600 bg-sky-700 inline-block px-4 py-2 text-white transition-colors ease-in"
          >
            New Task
          </Link>
        </li>
        <li>
          <Link
            href="/tasks"
            className="bg-rose-700 hover:bg-rose-600 inline-block px-4 py-2 transition-colors ease-in"
          >
            Tasks
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

export default function SearchBar() {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search"
        className="h-8 w-full rounded-l-lg bg-gray-100 px-2 text-gray-800 focus:outline-none"
      />
      <button className="h-8 rounded-r-lg bg-gray-200 px-2 text-gray-800 hover:bg-gray-300 focus:outline-none">
        Search
      </button>
    </div>
  );
}

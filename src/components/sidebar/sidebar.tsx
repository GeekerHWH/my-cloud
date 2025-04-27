"use client";
export default function SideBar({ fontsFamily }: { fontsFamily: string }) {
  return (
    <div className="w-36 flex-col border-x-2 border-solid border-x-gray-200">
      <Titile fontsFamily={fontsFamily} />
      <List />
    </div>
  );
}

function Titile({ fontsFamily }: { fontsFamily: string }) {
  return <h1 className={`text-stale-800 p-4 text-2xl ${fontsFamily}`}>RDS</h1>;
}

function List() {
  return (
    <ul className="px-2">
      <li className="cursor-pointer py-2 hover:bg-gray-100">Item 1</li>
      <li className="cursor-pointer py-2 hover:bg-gray-100">Item 2</li>
      <li className="cursor-pointer py-2 hover:bg-gray-100">Item 3</li>
    </ul>
  );
}

import TopNav from "@/components/topnav/topnav";
import SideBar from "@/components/sidebar/sidebar";

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <TopNav></TopNav>
      <div className="flex flex-grow">
        <SideBar fontsFamily="font-mono" />
        <main className="flex-grow overflow-y-auto p-4">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
        </main>
      </div>
      {/* <div className=""></div> */}
    </div>
  );
}

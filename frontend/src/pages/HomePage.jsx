import Sidebar from "../components/layout/Sidebar"
import MainPanel from "../components/layout/MainPanel"
import SourcePanel from "../components/layout/SourcePanel"

function HomePage() {
  return (
    <div className="h-screen bg-[#0B0B0C] text-white">
      <div className="grid h-full grid-cols-[260px_1fr_320px]">
        <Sidebar />
        <MainPanel />
        <SourcePanel />
      </div>
    </div>
  )
}

export default HomePage
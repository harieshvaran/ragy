function Sidebar() {
  return (
    <div className="h-full bg-[#121214] border-r border-[#222226] flex flex-col">
      
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-white">
          DocScout
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          Document Intelligence
        </p>
      </div>

      <div className="px-6">
        <button className="w-full rounded-xl bg-white text-black py-3 text-sm font-medium hover:bg-zinc-200 transition">
          Upload Document
        </button>
      </div>

      <div className="mt-8 px-6">
        <h2 className="text-xs uppercase tracking-wider text-zinc-500">
          Documents
        </h2>

        <div className="mt-4 space-y-2">
          <div className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800 cursor-pointer">
            Operating Systems.pdf
          </div>

          <div className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800 cursor-pointer">
            Networking Notes.pdf
          </div>
        </div>
      </div>

      <div className="mt-8 px-6">
        <h2 className="text-xs uppercase tracking-wider text-zinc-500">
          Recent Sessions
        </h2>

        <div className="mt-4 space-y-2">
          <div className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800 cursor-pointer">
            TCP vs UDP
          </div>

          <div className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800 cursor-pointer">
            DNS Overview
          </div>

          <div className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800 cursor-pointer">
            HTTP Summary
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
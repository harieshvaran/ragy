function SourcePanel() {
  return (
    <div className="h-full border-l border-[#222226] bg-[#121214] p-6">

      <h3 className="text-lg font-semibold text-white">
        Sources
      </h3>

      <p className="mt-2 text-sm text-zinc-500">
        Retrieved context will appear here.
      </p>

      <div className="mt-8 rounded-2xl border border-[#222226] p-4">
        <p className="text-sm text-zinc-500">
          No sources available yet.
        </p>
      </div>

    </div>
  )
}

export default SourcePanel
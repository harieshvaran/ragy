function SourcePanel({ sources = [] }) {
  return (
    <div className="h-full overflow-auto border-l border-[#222226] bg-[#0B0B0C] p-6">

      <h2 className="mb-6 text-2xl font-semibold text-white">
        Sources
      </h2>

      {sources.length === 0 ? (
        <p className="text-zinc-500">
          Retrieved passages will appear here.
        </p>
      ) : (
        <div className="space-y-4">

          {sources.map((source, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#222226] bg-[#121214] p-4 text-sm text-zinc-300"
            >
              <div className="mb-2 text-xs font-semibold text-zinc-500">
                Source {index + 1}
              </div>

              {source}
            </div>
          ))}

        </div>
      )}

    </div>
  )
}

export default SourcePanel
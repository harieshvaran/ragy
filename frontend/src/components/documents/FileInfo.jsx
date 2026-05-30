function FileInfo({ file }) {
  if (!file) return null

  return (
    <div className="mt-4 rounded-xl border border-[#222226] bg-[#0B0B0C] p-4">
      <p className="text-sm text-zinc-300">
        Selected: {file.name}
      </p>
    </div>
  )
}

export default FileInfo
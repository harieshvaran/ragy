import UploadArea from "../documents/UploadArea"

function MainPanel() {
  return (
    <div className="flex h-full items-center justify-center px-10">
      <div className="max-w-2xl text-center">

        <div className="mb-10 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-[#222226] bg-[#121214] text-3xl">
            📄
          </div>
        </div>

        <h2 className="text-5xl font-semibold tracking-tight text-white">
          Explore a document
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
          Upload a PDF, trace concepts, compare ideas,
          and discover information through conversation.
        </p>

        <UploadArea />

      </div>
    </div>
  )
}

export default MainPanel
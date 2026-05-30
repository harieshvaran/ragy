import { useRef, useState } from "react"
import FileInfo from "./FileInfo"
import { uploadDocument } from "../../services/api"

function UploadArea() {
  const [file, setFile] = useState(null)
  const [uploadStatus, setUploadStatus] = useState("")

  const inputRef = useRef()

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0]

    if (!selectedFile) {
      return
    }

    setFile(selectedFile)

    try {
      setUploadStatus("Uploading...")

      const result = await uploadDocument(selectedFile)

      console.log(result)

      setUploadStatus("Upload successful")
    } catch (error) {
      console.error(error)

      setUploadStatus("Upload failed")
    }
  }

  return (
    <div className="mt-10">
      <div className="rounded-3xl border-2 border-dashed border-[#222226] bg-[#121214] p-12">
        <div className="text-center">

          <div className="text-5xl">
            📄
          </div>

          <h3 className="mt-4 text-xl font-medium text-white">
            Upload a document
          </h3>

          <p className="mt-2 text-zinc-500">
            Drag and drop a PDF or browse files.
          </p>

          <input
            ref={inputRef}
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileChange}
          />

          <button
            onClick={() => inputRef.current.click()}
            className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-zinc-200 transition"
          >
            Choose File
          </button>

          <FileInfo file={file} />

          <p className="mt-4 text-sm text-zinc-400">
            {uploadStatus}
          </p>

        </div>
      </div>
    </div>
  )
}

export default UploadArea
import { useState } from "react"

import UploadArea from "../documents/UploadArea"
import ChatInput from "../chat/ChatInput"
import ChatWindow from "../chat/ChatWindow"
import SourcePanel from "./SourcePanel"

function MainPanel() {
  const [messages, setMessages] = useState([])
  const [sources, setSources] = useState([])

  return (
    <div className="flex h-full">

      <div className="flex flex-1 flex-col">

        <div className="flex-1 overflow-auto px-10 py-10">

          <div className="mx-auto max-w-3xl">

            <div className="text-center">

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

            </div>

            <UploadArea />

            <ChatWindow messages={messages} />

          </div>

        </div>

        <ChatInput
          messages={messages}
          setMessages={setMessages}
          setSources={setSources}
        />

      </div>

      <div className="w-96">
        <SourcePanel sources={sources} />
      </div>

    </div>
  )
}

export default MainPanel
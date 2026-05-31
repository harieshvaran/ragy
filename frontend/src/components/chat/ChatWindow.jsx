import { useEffect, useRef } from "react"
import MessageBubble from "./MessageBubble"

function ChatWindow({ messages }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    })
  }, [messages])

  return (
    <div className="mt-8">

      {messages.length === 0 && (
        <div className="rounded-2xl border border-[#222226] bg-[#121214] p-6 text-zinc-500">
          Upload a document and start asking questions.
        </div>
      )}

      {messages.map((message, index) => (
        <MessageBubble
          key={index}
          role={message.role}
          content={message.content}
        />
      ))}

      <div ref={bottomRef}></div>

    </div>
  )
}

export default ChatWindow
function MessageBubble({ role, content }) {
  const isUser = role === "user"

  return (
    <div
      className={`mb-4 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-2xl rounded-2xl px-5 py-4 ${
          isUser
            ? "bg-white text-black"
            : "bg-[#121214] text-zinc-200 border border-[#222226]"
        }`}
      >
        {content}
      </div>
    </div>
  )
}

export default MessageBubble
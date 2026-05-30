import { useState } from "react"
import { askQuestion } from "../../services/api"

function ChatInput({
  messages,
  setMessages,
  setSources
}) {
  const [question, setQuestion] = useState("")
  const [loading, setLoading] = useState(false)

  const handleAsk = async () => {
    if (!question.trim()) {
      return
    }

    const userMessage = {
      role: "user",
      content: question
    }

    setMessages(prev => [
      ...prev,
      userMessage
    ])

    try {
      setLoading(true)

      const result = await askQuestion(question)

      const assistantMessage = {
        role: "assistant",
        content: result.answer
      }

      setMessages(prev => [
        ...prev,
        assistantMessage
      ])

      setSources(result.sources || [])

      setQuestion("")
    }
    catch (error) {
      console.error(error)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className="border-t border-[#222226] p-6">

      <div className="flex gap-3">

        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask something about the document..."
          className="flex-1 rounded-xl border border-[#222226] bg-[#121214] px-4 py-3 text-white outline-none"
        />

        <button
          onClick={handleAsk}
          className="rounded-xl bg-white px-5 py-3 font-medium text-black"
        >
          {loading ? "..." : "Ask"}
        </button>

      </div>

    </div>
  )
}

export default ChatInput
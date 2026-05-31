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
    if (!question.trim() || loading) {
      return
    }

    const userMessage = {
      role: "user",
      content: question
    }

    const thinkingMessage = {
      role: "assistant",
      content: "Thinking..."
    }

    setMessages(prev => [
      ...prev,
      userMessage,
      thinkingMessage
    ])

    const currentQuestion = question

    setQuestion("")

    try {
      setLoading(true)

      const result = await askQuestion(currentQuestion)

      setMessages(prev => {
        const updated = [...prev]

        updated[updated.length - 1] = {
          role: "assistant",
          content: result.answer
        }

        return updated
      })

      setSources(result.sources || [])
    }
    catch (error) {
      console.error(error)

      setMessages(prev => {
        const updated = [...prev]

        updated[updated.length - 1] = {
          role: "assistant",
          content: "Failed to get response from server."
        }

        return updated
      })
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAsk()
            }
          }}
          placeholder="Ask something about the document..."
          className="flex-1 rounded-xl border border-[#222226] bg-[#121214] px-4 py-3 text-white outline-none"
        />

        <button
          onClick={handleAsk}
          disabled={loading}
          className="rounded-xl bg-white px-5 py-3 font-medium text-black disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Ask"}
        </button>

      </div>

    </div>
  )
}

export default ChatInput
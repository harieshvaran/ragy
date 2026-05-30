function AnswerPanel({ answer }) {
  return (
    <div className="mt-6 rounded-2xl border border-[#222226] bg-[#121214] p-6">
      <h3 className="mb-3 text-lg font-semibold text-white">
        Answer
      </h3>

      <p className="whitespace-pre-wrap text-zinc-300">
        {answer || "Ask a question to begin."}
      </p>
    </div>
  )
}

export default AnswerPanel
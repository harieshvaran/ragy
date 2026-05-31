# RAGY

### Retrieval-Augmented Generation for Document Question Answering

RAGY is a full-stack AI-powered document intelligence platform that enables users to upload PDF documents and interact with them through natural language conversations. The system combines semantic retrieval, vector search, and a fine-tuned language model to generate context-aware answers grounded in document content.


## Features

- PDF document upload and processing
- Automatic text extraction using PyPDF
- Document chunking for efficient retrieval
- Semantic embeddings using Sentence Transformers
- Vector similarity search using ChromaDB
- Retrieval-Augmented Generation (RAG) pipeline
- Fine-tuned Qwen 2.5 language model with LoRA
- Source-grounded responses
- Interactive chat interface
- FastAPI backend and React frontend

---

## Tech Stack

### Frontend
- React
- Vite
- Axios
- Tailwind CSS

### Backend
- FastAPI
- Python

### AI / Machine Learning
- Qwen 2.5
- LoRA Fine-Tuning
- Sentence Transformers
- ChromaDB

### Document Processing
- PyPDF

---

## System Architecture

```text
User
 │
 ▼
React Frontend
 │
 ▼
FastAPI Backend
 │
 ├── PDF Processing (PyPDF)
 │
 ├── Embedding Generation
 │      │
 │      ▼
 │  Sentence Transformers
 │
 ├── Vector Storage
 │      │
 │      ▼
 │   ChromaDB
 │
 └── Answer Generation
        │
        ▼
   Qwen 2.5 + LoRA

            │
            ▼

    Answer + Sources
```

## Workflow

1. User uploads a PDF document.
2. Text is extracted from the PDF.
3. The document is split into chunks.
4. Embeddings are generated for each chunk.
5. Embeddings are stored in ChromaDB.
6. User asks a question.
7. Relevant chunks are retrieved using semantic search.
8. Retrieved context is sent to the language model.
9. The model generates a grounded response.
10. Answer and supporting sources are displayed.

---

## Example Capabilities

- Ask questions about uploaded documents
- Retrieve relevant information using semantic search
- View source passages used to generate answers
- Chat with document content through a conversational interface

---

## Future Improvements

- Multi-document support
- Hybrid keyword + vector retrieval
- Reranking for improved retrieval accuracy
- Hallucination detection
- Document management dashboard
- Deployment and cloud hosting

---

## Project Status

Current Version: **v1.0**

Implemented:
- End-to-end RAG pipeline
- Vector search
- Source grounding
- Fine-tuned local language model integration
- Interactive chat UI

---

## Author

~ Harieshvaran M
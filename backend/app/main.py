from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from pypdf import PdfReader
from sentence_transformers import SentenceTransformer
from model import generate_answer

import chromadb
import io


app = FastAPI()


app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)



embedding_model = SentenceTransformer(

    "all-MiniLM-L6-v2"

)


client = chromadb.PersistentClient(

    path="../chroma"

)


collection = client.get_or_create_collection(

    name="documents"

)




@app.get("/")
def home():

    return {

        "message":

        "DocScout backend running"

    }




@app.post("/upload")
async def upload_pdf(

    file: UploadFile = File(...)

):


    content = await file.read()


    pdf = PdfReader(

        io.BytesIO(content)

    )


    text = ""


    for page in pdf.pages:


        extracted = page.extract_text()


        if extracted:

            text += extracted




    chunks = []


    for i in range(

        0,

        len(text),

        500

    ):


        chunks.append(

            text[i:i+500]

        )




    embeddings = embedding_model.encode(

        chunks

    ).tolist()


    existing_ids = collection.get()["ids"]

    if len(existing_ids) > 0:

        collection.delete(

            ids=existing_ids

        )



    ids = [

        str(i)

        for i in range(

            len(chunks)

        )

    ]



    collection.add(

        documents=chunks,

        embeddings=embeddings,

        ids=ids

    )



    return {

        "stored_chunks":

        len(chunks)

    }




@app.get("/ask")
def ask(

    query: str

):


    query_embedding = embedding_model.encode(

        query

    ).tolist()



    results = collection.query(

        query_embeddings=[

            query_embedding

        ],

        n_results=2

    )



    context = "\n".join(

        results["documents"][0]

    )



    print("\n")
    print("===== RETRIEVED CONTEXT =====")
    print(context)
    print("=============================")
    print("\n")



    answer = generate_answer(

        context,

        query

    )



    return {

        "query":

        query,


        "answer":

        answer,


        "sources":

        results["documents"][0]

    }
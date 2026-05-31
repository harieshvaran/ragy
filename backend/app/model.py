from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM
)

from peft import PeftModel
import torch
import os


base_model = "Qwen/Qwen2.5-1.5B"


tokenizer = AutoTokenizer.from_pretrained(
    base_model
)


model = AutoModelForCausalLM.from_pretrained(

    base_model,

    torch_dtype=torch.float16,

    device_map="auto"

)


adapter_path = os.path.abspath(

    "../../models/DocScout_Qwen_LoRA"

)


model = PeftModel.from_pretrained(

    model,

    adapter_path,

    local_files_only=True

)


model.eval()



def generate_answer(

    context,

    query

):


    prompt = f"""
You are DocScout AI.

Answer the user's question using ONLY the provided context.

Rules:
- Do not invent information.
- Do not continue the document.
- Do not repeat the context.
- Keep the answer concise.
- If the answer is not found in the context, say:
  "I could not find this information in the document."

Context:
{context}

Question:
{query}

Answer:
"""


    inputs = tokenizer(

        prompt,

        return_tensors="pt",

        truncation=True,

        max_length=2048

    ).to(model.device)



    outputs = model.generate(

        **inputs,

        max_new_tokens=80,

        do_sample=False,

        temperature=0.1

    )



    response = tokenizer.decode(

        outputs[0],

        skip_special_tokens=True

    )


    answer = response.split("Answer:")[-1].strip()

    return answer
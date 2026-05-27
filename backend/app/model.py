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
Context:
{context}

Question:
{query}

Answer:
"""


    inputs = tokenizer(

        prompt,

        return_tensors="pt"

    ).to(model.device)



    outputs = model.generate(

        **inputs,

        max_new_tokens=100

    )



    response = tokenizer.decode(

        outputs[0],

        skip_special_tokens=True

    )


    return response
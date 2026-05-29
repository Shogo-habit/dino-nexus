import json

path = "/Users/kosako/kaihatsu/dinosaurs website/scratch/prev_step_463.json"
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

args = data.get("args", {})
content = args.get("ReplacementContent", "")
print(f"Length of ReplacementContent in step 463: {len(content)}")
# Let's save it to a text file
with open("scratch/prev_step_463_repl.txt", "w", encoding="utf-8") as out:
    out.write(content)
print("Saved to scratch/prev_step_463_repl.txt")

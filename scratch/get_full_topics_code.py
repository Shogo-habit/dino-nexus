import json

path = "scratch/prev_step_499.json"
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

args = data.get("args", {})
repl = args.get("ReplacementContent", "")

with open("scratch/step_499_repl_full.txt", "w", encoding="utf-8") as out:
    out.write(repl)

print(f"Saved Step 499 replacement content of length {len(repl)} to scratch/step_499_repl_full.txt")

import json

path = "scratch/prev_step_499.json"
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

args = data.get("args", {})
repl = args.get("ReplacementContent", "")
print("Step 499 ReplacementContent prefix:")
print(repl[:1500])

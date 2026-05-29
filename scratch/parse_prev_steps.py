import os
import json

scratch_dir = "/Users/kosako/kaihatsu/dinosaurs website/scratch"
files = [f for f in os.listdir(scratch_dir) if f.startswith("prev_step_") and f.endswith(".json")]

# Sort by step number
files.sort(key=lambda x: int(x.split("_")[2].split(".")[0]))

for fname in files:
    step_num = int(fname.split("_")[2].split(".")[0])
    path = os.path.join(scratch_dir, fname)
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    args = data.get("args", {})
    desc = args.get("Description", "")
    inst = args.get("Instruction", "")
    start = args.get("StartLine", "")
    end = args.get("EndLine", "")
    
    print(f"Step {step_num}: {desc[:60]} (lines {start}-{end})")

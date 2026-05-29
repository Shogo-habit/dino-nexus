import os
import re

scratch_dir = "/Users/kosako/kaihatsu/dinosaurs website/scratch"
files = [f for f in os.listdir(scratch_dir) if f.startswith("step_") and f.endswith("_content.txt")]

ranges = []
for fname in files:
    step_num = int(fname.split("_")[1])
    path = os.path.join(scratch_dir, fname)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Try to parse line numbers
    lines = content.split('\n')
    line_nums = []
    for l in lines:
        m = re.match(r"^(\d+):", l)
        if m:
            line_nums.append(int(m.group(1)))
    if line_nums:
        min_ln = min(line_nums)
        max_ln = max(line_nums)
        ranges.append((min_ln, max_ln, fname, step_num))

ranges.sort()
for r in ranges:
    print(f"File {r[2]} (Step {r[3]}): lines {r[0]} to {r[1]}")

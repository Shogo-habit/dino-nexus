with open("app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx in range(230, 260):
    if idx < len(lines):
        print(f"Line {idx+1}: {repr(lines[idx])}")

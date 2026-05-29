with open("app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "updateMetadata" in line or "generateDinoSchema" in line:
        print(f"Line {idx+1}: {repr(line)}")

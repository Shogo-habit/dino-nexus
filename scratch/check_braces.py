with open("app.js", "r", encoding="utf-8") as f:
    code = f.read()

# Let's check matching braces up to line 300
lines = code.split("\n")
brace_count = 0
for idx, line in enumerate(lines):
    # Remove strings and comments to be simple
    clean_line = ""
    in_str = False
    str_char = None
    i = 0
    while i < len(line):
        if line[i:i+2] == "//":
            break
        elif line[i] in ['"', "'", "`"]:
            if not in_str:
                in_str = True
                str_char = line[i]
            elif line[i] == str_char:
                in_str = False
        elif not in_str:
            clean_line += line[i]
        i += 1
        
    for c in clean_line:
        if c == "{":
            brace_count += 1
        elif c == "}":
            brace_count -= 1
            if brace_count < 0:
                print(f"Brace mismatch: closing brace without opening on line {idx+1}: {line}")
                brace_count = 0
    if idx < 300:
        pass # print(f"{idx+1}: {brace_count} | {line}")
print(f"End brace count: {brace_count}")

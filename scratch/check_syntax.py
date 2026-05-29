with open("app.js", "r", encoding="utf-8") as f:
    code = f.read()

# Let's count matching braces or compile the code line by line
try:
    compile(code, "app.js", "exec")
    print("Code compiles successfully!")
except SyntaxError as e:
    print(f"Syntax Error: {e.msg}")
    print(f"Line: {e.lineno}")
    print(f"Offset: {e.offset}")
    print(f"Text: {e.text}")

import json

log_path = '/Users/kosako/.gemini/antigravity/brain/667cd82c-cc76-441f-8fe0-8f34d949072f/.system_generated/logs/transcript.jsonl'
with open(log_path, 'r', encoding='utf-8') as f:
    for idx, line in enumerate(f):
        if idx == 273:
            data = json.loads(line)
            tc = data.get('tool_calls') or []
            for t in tc:
                args = t.get('args', {})
                content = args.get('ReplacementContent') or args.get('CodeContent') or ''
                if content:
                    print("Content length:", len(content))
                    # Let's parse it as a JSON string
                    # If it is wrapped in double quotes, json.loads will decode it
                    try:
                        parsed = json.loads(content)
                        print("Parsed via json.loads")
                    except Exception as e:
                        print("Failed json.loads, trying manual replacement:", e)
                        if content.startswith('"') and content.endswith('"'):
                            content = content[1:-1]
                        parsed = content.replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
                    
                    with open('scratch/extracted_functions_clean.js', 'w', encoding='utf-8') as out:
                        out.write(parsed)
                    print("Wrote clean functions successfully.")

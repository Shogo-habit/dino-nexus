import json
import re

with open("scratch/step_61_full.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for tc in data.get("tool_calls", []):
    args = tc.get("args", {})
    chunks_str = args.get("ReplacementChunks", [])
    if isinstance(chunks_str, str):
        # Let's clean the control characters or just load it with strict=False
        try:
            chunks = json.loads(chunks_str, strict=False)
        except Exception as e:
            # Try to fix escaped quotes/newlines manually
            print("Strict JSON load failed, trying regex clean:", e)
            # Just do a eval or custom parse
            # Actually, strict=False handles most control characters
            pass
    else:
        chunks = chunks_str
    
    print(f"Number of chunks: {len(chunks)}")
    for i, c in enumerate(chunks):
        print(f"\nChunk {i} (lines {c.get('StartLine')}-{c.get('EndLine')}):")
        print(f"TargetContent:\n{c.get('TargetContent')}\n")
        print(f"ReplacementContent:\n{c.get('ReplacementContent')}\n")

import json

log_path = "/Users/kosako/.gemini/antigravity/brain/baaeb70b-a5e5-4d0e-b78f-67d8eeb6789f/.system_generated/logs/transcript.jsonl"

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step_idx = data.get('step_index')
            if "tool_calls" in data:
                for tc in data["tool_calls"]:
                    name = tc.get("name", "")
                    if "replace" in name or "write" in name:
                        args = tc.get("args", {})
                        if "app.js" in args.get("TargetFile", "") or "app.js" in args.get("Target", ""):
                            print(f"\n================= STEP {step_idx}: {name} =================")
                            print(json.dumps(tc, indent=2, ensure_ascii=False))
        except Exception as e:
            pass

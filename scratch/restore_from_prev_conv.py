import json

log_path = "/Users/kosako/.gemini/antigravity/brain/667cd82c-cc76-441f-8fe0-8f34d949072f/.system_generated/logs/transcript.jsonl"

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
                        if "app.js" in args.get("TargetFile", ""):
                            print(f"Step {step_idx}: {name}")
                            # Let's write the details to a file
                            with open(f"scratch/prev_step_{step_idx}.json", "w", encoding="utf-8") as out:
                                json.dump(tc, out, indent=2, ensure_ascii=False)
                            print(f"  Saved to scratch/prev_step_{step_idx}.json")
        except Exception as e:
            pass

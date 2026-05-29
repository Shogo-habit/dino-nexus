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
                    if "write_to_file" in name:
                        args = tc.get("args", {})
                        print(f"Step {step_idx}: write_to_file to {args.get('TargetFile')}")
        except Exception as e:
            pass

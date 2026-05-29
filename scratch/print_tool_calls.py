import json

log_path = "/Users/kosako/.gemini/antigravity/brain/baaeb70b-a5e5-4d0e-b78f-67d8eeb6789f/.system_generated/logs/transcript.jsonl"

steps_to_inspect = [61, 105, 191]

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step_idx = data.get('step_index')
            if step_idx in steps_to_inspect:
                print(f"\n================= STEP {step_idx} =================")
                if "tool_calls" in data:
                    for tc in data["tool_calls"]:
                        print(f"Tool: {tc.get('name')}")
                        args = tc.get("args", {})
                        print(json.dumps(args, indent=2, ensure_ascii=False))
        except Exception as e:
            print("Error parsing line:", e)

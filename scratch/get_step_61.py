import json

log_path = "/Users/kosako/.gemini/antigravity/brain/baaeb70b-a5e5-4d0e-b78f-67d8eeb6789f/.system_generated/logs/transcript.jsonl"

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('step_index') == 61:
                # print the entire step
                with open("scratch/step_61_full.json", "w", encoding="utf-8") as out:
                    json.dump(data, out, indent=2, ensure_ascii=False)
                print("Saved Step 61 full to scratch/step_61_full.json")
        except Exception as e:
            pass

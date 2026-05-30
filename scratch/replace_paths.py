import os

replacements = [
    {
        "file": "/Users/kosako/kaihatsu/dinosaurs website/src/data/cyberAssets.ts",
        "find": ".png",
        "replace": ".webp"
    },
    {
        "file": "/Users/kosako/kaihatsu/dinosaurs website/src/pages/dictionary/[id].astro",
        "find": "/images/cyber/${d.id}.png",
        "replace": "/images/cyber/${d.id}.webp"
    },
    {
        "file": "/Users/kosako/kaihatsu/dinosaurs website/src/pages/dictionary/[id].astro",
        "find": "/images/cyber/human_front.png",
        "replace": "/images/cyber/human_front.webp"
    },
    {
        "file": "/Users/kosako/kaihatsu/dinosaurs website/src/pages/quiz/index.astro",
        "find": "/images/silhouette/${currentQ.dino.id}.png",
        "replace": "/images/silhouette/${currentQ.dino.id}.webp"
    },
    {
        "file": "/Users/kosako/kaihatsu/dinosaurs website/src/pages/quiz/index.astro",
        "find": "透過シルエットPNGを使用",
        "replace": "透過シルエットWebPを使用"
    }
]

for item in replacements:
    path = item["file"]
    if not os.path.exists(path):
        print(f"Error: {path} not found.")
        continue
    
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
        
    if item["find"] in content:
        new_content = content.replace(item["find"], item["replace"])
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Successfully replaced in {os.path.basename(path)}: '{item['find']}' -> '{item['replace']}'")
    else:
        print(f"Warning: '{item['find']}' not found in {os.path.basename(path)}")

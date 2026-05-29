import glob
import shutil
import os

dino_ids = [
    "tyrannosaurus", "triceratops", "spinosaurus", "stegosaurus", "ankylosaurus",
    "velociraptor", "allosaurus", "brachiosaurus", "mosasaurus", "iguanodon",
    "parasaurolophus", "pteranodon", "quetzalcoatlus", "therizinosaurus", "pachycephalosaurus"
]

artifacts_dir = "/Users/kosako/.gemini/antigravity/brain/39d22935-d9c5-4ac2-88c5-b58be109770e"
temp_dir = "/Users/kosako/kaihatsu/dinosaurs website/scratch/temp_silhouettes"

os.makedirs(temp_dir, exist_ok=True)

for dino_id in dino_ids:
    # タイムスタンプがついたファイルを探索
    pattern = os.path.join(artifacts_dir, f"{dino_id}_sil_*.png")
    matches = glob.glob(pattern)
    
    if not matches:
        print(f"Warning: No match found for {dino_id} with pattern {pattern}")
        continue
    
    # 最も新しいファイルを使用（タイムスタンプでソート）
    matches.sort()
    latest_file = matches[-1]
    
    dest_path = os.path.join(temp_dir, f"{dino_id}.png")
    shutil.copy2(latest_file, dest_path)
    print(f"Copied: {latest_file} -> {dest_path}")

print("Copy and rename complete!")

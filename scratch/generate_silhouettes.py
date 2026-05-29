from PIL import Image
import numpy as np
import os

dino_ids = [
    "tyrannosaurus", "triceratops", "spinosaurus", "stegosaurus", "ankylosaurus",
    "velociraptor", "allosaurus", "brachiosaurus", "mosasaurus", "iguanodon",
    "parasaurolophus", "pteranodon", "quetzalcoatlus", "therizinosaurus", "pachycephalosaurus"
]

target_dir = "/Users/kosako/kaihatsu/dinosaurs website/public/images/silhouette"
os.makedirs(target_dir, exist_ok=True)

for dino_id in dino_ids:
    src_path = f"/Users/kosako/kaihatsu/dinosaurs website/public/images/{dino_id}.webp"
    dest_path = f"{target_dir}/{dino_id}.png"
    
    if not os.path.exists(src_path):
        print(f"Error: Source image not found at {src_path}")
        continue
    
    # 画像を開く
    img = Image.open(src_path).convert("RGBA")
    arr = np.array(img)
    
    # 背景の黒 (R+G+B < 45) を透明化し、それ以外をシルエット用の黒に近い暗い紺（RGB=[11, 16, 25]）にする
    rgb_sum = arr[:, :, 0].astype(int) + arr[:, :, 1].astype(int) + arr[:, :, 2].astype(int)
    
    # マスクの作成 (輝度が45より大きい部分が恐竜)
    dino_mask = rgb_sum >= 45
    
    # 完全に新しいRGBA配列を作成
    new_arr = np.zeros_like(arr)
    
    # 恐竜の部分を不透明な暗い紺にする
    new_arr[dino_mask, 0] = 11  # R
    new_arr[dino_mask, 1] = 16  # G
    new_arr[dino_mask, 2] = 25  # B
    new_arr[dino_mask, 3] = 255 # A
    
    # 背景の部分は A=0（透明）
    new_arr[~dino_mask, 3] = 0
    
    # 保存
    new_img = Image.fromarray(new_arr, "RGBA")
    new_img.save(dest_path, "PNG")
    print(f"Generated silhouette for {dino_id} -> {dest_path}")

print("All silhouettes generated successfully!")

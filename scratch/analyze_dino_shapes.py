from PIL import Image
import numpy as np
import os

dino_ids = [
    "tyrannosaurus", "triceratops", "spinosaurus", "stegosaurus", "ankylosaurus",
    "velociraptor", "allosaurus", "brachiosaurus", "mosasaurus", "iguanodon",
    "parasaurolophus", "pteranodon", "quetzalcoatlus", "therizinosaurus", "pachycephalosaurus"
]

for dino_id in dino_ids:
    path = f"/Users/kosako/kaihatsu/dinosaurs website/public/images/cyber/{dino_id}.png"
    if not os.path.exists(path):
        print(f"{dino_id}: Image not found at {path}")
        continue
    
    img = Image.open(path)
    arr = np.array(img)
    
    # RGBのいずれかが10より大きい部分を検出
    # 通常、背景は黒（0,0,0）なので、RGBの最大値が10より大きい場所を探す
    rgb_max = arr[:, :, :3].max(axis=2)
    non_zero = np.argwhere(rgb_max > 10)
    
    if len(non_zero) > 0:
        ymin, xmin = non_zero.min(axis=0)
        ymax, xmax = non_zero.max(axis=0)
        h, w = arr.shape[0], arr.shape[1]
        print(f"{dino_id}: bbox = x({xmin}-{xmax}) y({ymin}-{ymax}) inside {w}x{h} ({xmin/w*100:.1f}% to {xmax/w*100:.1f}%)")
    else:
        print(f"{dino_id}: No bright pixels found")

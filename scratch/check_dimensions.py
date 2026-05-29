from PIL import Image
import os

target_dir = '/Users/kosako/kaihatsu/dinosaurs website/images/topics'
for f in sorted(os.listdir(target_dir)):
    if f.endswith('.webp'):
        try:
            img = Image.open(os.path.join(target_dir, f))
            print(f"{f}: {img.width}x{img.height}")
        except Exception as e:
            print(f"Failed to read {f}: {e}")

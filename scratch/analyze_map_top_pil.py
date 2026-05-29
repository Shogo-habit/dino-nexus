from PIL import Image
import numpy as np

img_path = "/Users/kosako/kaihatsu/dinosaurs website/public/images/cyber_world_map.png"
try:
    img = Image.open(img_path)
    print(f"Image format: {img.format}, Size: {img.size}, Mode: {img.mode}")
    
    # データをnumpy配列に変換
    arr = np.array(img)
    print(f"Array shape: {arr.shape}")
    
    # 上部300pxのピクセル値の平均を20px刻みで調べる
    for y in range(0, 300, 20):
        row = arr[y, :, :]
        # RGBまたはRGBAの平均値
        mean_val = np.mean(row, axis=0)
        print(f"Row y={y}: Mean color/alpha = {mean_val}")
except Exception as e:
    print(f"Error: {e}")

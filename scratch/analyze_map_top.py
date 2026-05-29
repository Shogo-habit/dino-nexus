import cv2
import numpy as np

# 画像の読み込み
img_path = "/Users/kosako/kaihatsu/dinosaurs website/public/images/cyber_world_map.png"
img = cv2.imread(img_path, cv2.IMREAD_UNCHANGED)

if img is None:
    print("Error: Image not found.")
else:
    print(f"Image shape: {img.shape}")
    # チャンネル数の確認
    channels = img.shape[2] if len(img.shape) > 2 else 1
    print(f"Channels: {channels}")
    
    # 上部100pxのピクセル分析
    # 空白（アルファ値=0、またはRGBが全て0に近い）かどうかをチェック
    for y in range(0, 300, 20):
        row = img[y, :, :]
        if channels == 4:
            # アルファ値
            alpha = row[:, 3]
            mean_alpha = np.mean(alpha)
            print(f"Row y={y}: Mean Alpha = {mean_alpha}")
        else:
            # RGBの明るさ
            mean_rgb = np.mean(row)
            print(f"Row y={y}: Mean Intensity = {mean_rgb}")

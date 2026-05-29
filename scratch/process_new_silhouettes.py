from PIL import Image
import numpy as np
import os

dino_ids = [
    "tyrannosaurus", "triceratops", "spinosaurus", "stegosaurus", "ankylosaurus",
    "velociraptor", "allosaurus", "brachiosaurus", "mosasaurus", "iguanodon",
    "parasaurolophus", "pteranodon", "quetzalcoatlus", "therizinosaurus", "pachycephalosaurus"
]

src_dir = "/Users/kosako/kaihatsu/dinosaurs website/scratch/temp_silhouettes"
dest_dir = "/Users/kosako/kaihatsu/dinosaurs website/public/images/silhouette"

os.makedirs(dest_dir, exist_ok=True)

for dino_id in dino_ids:
    src_path = os.path.join(src_dir, f"{dino_id}.png")
    dest_path = os.path.join(dest_dir, f"{dino_id}.png")
    
    if not os.path.exists(src_path):
        print(f"Error: Source image not found at {src_path}")
        continue
    
    # 画像を開く
    img = Image.open(src_path).convert("RGBA")
    arr = np.array(img, dtype=np.float32)
    
    # 輝度を計算 (Y = 0.299*R + 0.587*G + 0.114*B)
    r = arr[:, :, 0]
    g = arr[:, :, 1]
    b = arr[:, :, 2]
    luminance = 0.299 * r + 0.587 * g + 0.114 * b
    
    # 新しいRGBA画像用の配列
    new_arr = np.zeros_like(arr, dtype=np.uint8)
    
    # 色の設定: シルエット色である暗い紺 (RGB = [11, 16, 25])
    new_arr[:, :, 0] = 11  # R
    new_arr[:, :, 1] = 16  # G
    new_arr[:, :, 2] = 25  # B
    
    # アルファチャンネルのマッピング
    # 輝度が30以下は完全不透明 (A=255)
    # 輝度が240以上は完全透明 (A=0)
    # 中間は線形補間で滑らかに結合
    alpha = np.zeros_like(luminance)
    
    mask_opaque = luminance <= 30
    mask_transparent = luminance >= 240
    mask_inter = (luminance > 30) & (luminance < 240)
    
    alpha[mask_opaque] = 255
    alpha[mask_transparent] = 0
    
    # 中間部分のアルファ値の計算
    alpha[mask_inter] = 255.0 * (240.0 - luminance[mask_inter]) / (240.0 - 30.0)
    
    # アルファ値を適用
    new_arr[:, :, 3] = alpha.astype(np.uint8)
    
    # 保存
    new_img = Image.fromarray(new_arr, "RGBA")
    # 不要なマージンをトリミングして綺麗に中央配置するためにバウンディングボックスを取得して切り抜く
    # アルファ値が0より大きい部分のバウンディングボックスを取得
    bbox = new_img.getbbox()
    if bbox:
        # 少し余白（マージン）を持って切り抜く
        margin = 20
        w, h = new_img.size
        left = max(0, bbox[0] - margin)
        upper = max(0, bbox[1] - margin)
        right = min(w, bbox[2] + margin)
        lower = min(h, bbox[3] + margin)
        
        cropped_img = new_img.crop((left, upper, right, lower))
        
        # 最終的にアスペクト比を保ちつつ、統一されたキャンバスサイズ（例: 800x800 や 1000x1000）の背景透過画像にする
        # これによりクイズ画面で画像の歪みや見切れが発生しなくなります。
        canvas_size = (800, 800)
        final_img = Image.new("RGBA", canvas_size, (0, 0, 0, 0))
        
        # 切り抜いた恐竜を縮小・拡大して中央に配置
        cropped_w, cropped_h = cropped_img.size
        # キャンバスに収まる最大の縮尺を計算
        scale = min((canvas_size[0] - 80) / cropped_w, (canvas_size[1] - 80) / cropped_h)
        # 縮小・拡大
        new_w = int(cropped_w * scale)
        new_h = int(cropped_h * scale)
        resized_img = cropped_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # 中央にペースト
        paste_x = (canvas_size[0] - new_w) // 2
        paste_y = (canvas_size[1] - new_h) // 2
        final_img.paste(resized_img, (paste_x, paste_y), resized_img)
        
        final_img.save(dest_path, "PNG")
    else:
        new_img.save(dest_path, "PNG")
        
    print(f"Processed and saved silhouette for {dino_id} -> {dest_path}")

print("All silhouettes processed and saved successfully!")

import sys
from PIL import Image

def crop_3_1(img_path, out_path):
    img = Image.open(img_path)
    w, h = img.size
    
    target_h = w // 3
    if target_h > h:
        target_h = h
        target_w = h * 3
    else:
        target_w = w
        
    left = (w - target_w) / 2
    top = (h - target_h) / 2
    right = (w + target_w) / 2
    bottom = (h + target_h) / 2
    
    img.crop((left, top, right, bottom)).save(out_path)

if __name__ == "__main__":
    crop_3_1(sys.argv[1], sys.argv[2])

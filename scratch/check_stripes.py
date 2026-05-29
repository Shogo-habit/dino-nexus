from PIL import Image
import numpy as np
import os

def analyze_image(path):
    try:
        img = Image.open(path).convert('L')
    except Exception as e:
        return
    
    arr = np.array(img)
    row_means = np.mean(arr, axis=1)
    
    diffs = np.diff(row_means)
    alternations = 0
    for i in range(len(diffs)-1):
        if (diffs[i] > 0.1 and diffs[i+1] < -0.1) or (diffs[i] < -0.1 and diffs[i+1] > 0.1):
            alternations += 1
            
    ratio = alternations / len(row_means)
    if ratio > 0.35:
        print(f"BAKED STRIPES DETECTED: {os.path.basename(path)} (ratio: {ratio:.3f})")

if __name__ == '__main__':
    target_dir = '/Users/kosako/kaihatsu/dinosaurs website/images'
    for f in sorted(os.listdir(target_dir)):
        if f.endswith('.webp'):
            analyze_image(os.path.join(target_dir, f))

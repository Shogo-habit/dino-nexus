from PIL import Image
import numpy as np

def inspect_pixels(path):
    try:
        img = Image.open(path).convert('L')
    except Exception as e:
        print(f"Failed to load {path}: {e}")
        return
    
    arr = np.array(img)
    h, w = arr.shape
    
    # We inspect a vertical slice where there is actual content (not flat background)
    # Let's find a column with some variance
    col_idx = w // 2
    for x in range(w // 4, 3 * w // 4, 50):
        slice_data = arr[h // 4 : h // 4 + 30, x]
        # Check if the pixel values alternate up and down
        diffs = np.diff(slice_data)
        if len(diffs) > 0 and np.std(slice_data) > 10:
            col_idx = x
            break
            
    slice_data = arr[h // 4 : h // 4 + 30, col_idx]
    print(f"\n--- Pixel Slice (x={col_idx}, y={h // 4}..{h // 4 + 30}) for {path} ---")
    for y, val in enumerate(slice_data):
        print(f"y={h // 4 + y:03d}: {val}")

if __name__ == '__main__':
    inspect_pixels('/Users/kosako/kaihatsu/dinosaurs website/images/topics/dinosaur_timeline.webp')
    inspect_pixels('/Users/kosako/kaihatsu/dinosaurs website/images/topics/dinosaur_eras.webp')

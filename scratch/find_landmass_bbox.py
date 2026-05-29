from PIL import Image
import numpy as np

try:
    img = Image.open('images/cyber_world_map.png').convert('RGBA')
    width, height = img.size
    arr = np.array(img)
    
    # Neon colors (cyan/green) typically have high values in green and blue channels
    # Let's define bright neon pixels: Green > 80 or Blue > 80, and not just gray (difference between channels > 20)
    # Or simply: pixels with brightness > 100
    r = arr[:, :, 0].astype(float)
    g = arr[:, :, 1].astype(float)
    b = arr[:, :, 2].astype(float)
    
    # Calculate brightness
    brightness = (r + g + b) / 3
    
    # Find pixels that are bright (threshold > 40 to ignore very dim grid lines, let's try > 50, > 80, etc.)
    for threshold in [30, 50, 80, 120]:
        bright_pixels = brightness > threshold
        y_indices, x_indices = np.where(bright_pixels)
        if len(x_indices) > 0 and len(y_indices) > 0:
            min_x, max_x = np.min(x_indices), np.max(x_indices)
            min_y, max_y = np.min(y_indices), np.max(y_indices)
            print(f"Threshold {threshold}: Bounding Box of bright pixels: ({min_x}, {min_y}, {max_x}, {max_y}), Width: {max_x - min_x}, Height: {max_y - min_y}")
        else:
            print(f"Threshold {threshold}: No bright pixels found")

except Exception as e:
    print(f"Error: {e}")

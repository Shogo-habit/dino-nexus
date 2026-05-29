from PIL import Image
import numpy as np

try:
    img = Image.open('images/cyber_world_map.png').convert('RGBA')
    width, height = img.size
    print(f"Loaded image. Width: {width}, Height: {height}")
    
    # Convert to numpy array
    arr = np.array(img)
    
    # Get alpha and color data
    # Brightness can be approximated by R + G + B
    rgb_sum = arr[:, :, 0].astype(float) + arr[:, :, 1].astype(float) + arr[:, :, 2].astype(float)
    alpha = arr[:, :, 3]
    
    # Content is where alpha > 10 and brightness > 10
    has_content = (alpha > 10) & (rgb_sum > 10)
    
    # Check vertical distribution (along Y axis)
    y_content = np.any(has_content, axis=1)
    y_indices = np.where(y_content)[0]
    if len(y_indices) > 0:
        print(f"Content vertical range (Y): {y_indices[0]} to {y_indices[-1]}")
    else:
        print("No content found vertically")
        
    # Check horizontal distribution (along X axis)
    x_content = np.any(has_content, axis=0)
    x_indices = np.where(x_content)[0]
    if len(x_indices) > 0:
        print(f"Content horizontal range (X): {x_indices[0]} to {x_indices[-1]}")
    else:
        print("No content found horizontally")
        
    # Let's check density in 10 segments
    print("\nHorizontal Density (X axis 10 segments):")
    seg_w = width // 10
    for i in range(10):
        seg_content = has_content[:, i*seg_w:(i+1)*seg_w]
        percentage = (np.sum(seg_content) / (height * seg_w)) * 100
        print(f"Segment {i} ({i*seg_w} to {(i+1)*seg_w}): {percentage:.1f}% content pixels")
        
    print("\nVertical Density (Y axis 10 segments):")
    seg_h = height // 10
    for i in range(10):
        seg_content = has_content[i*seg_h:(i+1)*seg_h, :]
        percentage = (np.sum(seg_content) / (width * seg_h)) * 100
        print(f"Segment {i} ({i*seg_h} to {(i+1)*seg_h}): {percentage:.1f}% content pixels")

except Exception as e:
    print(f"Error: {e}")

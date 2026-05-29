from PIL import Image

try:
    img = Image.open('images/cyber_world_map.png')
    print(f"Format: {img.format}, Size: {img.size}, Mode: {img.mode}")
    
    # If the image has an alpha channel, find the bounding box of non-transparent pixels
    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
        alpha = img.convert('RGBA').split()[-1]
        bbox = alpha.getbbox()
        print(f"Non-transparent Bounding Box: {bbox}")
    else:
        # Otherwise, find the bounding box of non-black pixels
        gray = img.convert('L')
        # find pixels that are not black (threshold > 10)
        # getbbox only works on non-zero pixels
        thresholded = gray.point(lambda p: 255 if p > 10 else 0)
        bbox = thresholded.getbbox()
        print(f"Non-black Bounding Box (threshold > 10): {bbox}")
        
except Exception as e:
    print(f"Error: {e}")

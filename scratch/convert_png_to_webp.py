import os
import glob
from PIL import Image

def convert_png_to_webp(directory, quality=92):
    pattern = os.path.join(directory, "**/*.png")
    files = glob.glob(pattern, recursive=True)
    print(f"Scanning {directory} for PNG files... Found {len(files)} files.")
    
    converted_count = 0
    error_count = 0
    
    for png_path in files:
        base_dir, filename = os.path.split(png_path)
        name, ext = os.path.splitext(filename)
        webp_path = os.path.join(base_dir, f"{name}.webp")
        
        try:
            with Image.open(png_path) as img:
                # We save with transparency (RGBA) kept, quality 92 (great lossy details)
                img.save(webp_path, "WEBP", quality=quality)
            
            # Verify the converted file exists and is not empty
            if os.path.exists(webp_path) and os.path.getsize(webp_path) > 0:
                os.remove(png_path)
                converted_count += 1
            else:
                print(f"Error: Converted webp file for {png_path} is empty or missing.")
                error_count += 1
        except Exception as e:
            print(f"Failed to convert {png_path}: {e}")
            error_count += 1
            
    print(f"Conversion complete. Successful: {converted_count}, Errors: {error_count}")

if __name__ == "__main__":
    target_dir = "/Users/kosako/kaihatsu/dinosaurs website/public/images"
    convert_png_to_webp(target_dir)

from PIL import Image
import os

def check_alpha(path):
    try:
        img = Image.open(path)
        print(f"\n--- Alpha Channel Check for {os.path.basename(path)} ---")
        print(f"Mode: {img.mode}")
        if 'A' in img.mode or img.mode == 'RGBA':
            # Check if there are actual transparent pixels
            extrema = img.getextrema()
            # If the mode is RGBA, extrema has 4 tuples (min, max) for R, G, B, A
            alpha_extrema = extrema[3]
            print(f"Alpha range: {alpha_extrema}")
            if alpha_extrema[0] < 255:
                print(">>> Image has transparent pixels!")
            else:
                print(">>> Image is fully opaque (all alpha pixels are 255).")
        else:
            print(">>> Image has no alpha channel (fully opaque).")
    except Exception as e:
        print(f"Failed to check {path}: {e}")

if __name__ == '__main__':
    check_alpha('/Users/kosako/kaihatsu/dinosaurs website/images/topics/dinosaur_timeline.webp')
    check_alpha('/Users/kosako/kaihatsu/dinosaurs website/images/topics/trex_small_arms.webp')
    check_alpha('/Users/kosako/kaihatsu/dinosaurs website/images/allosaurus.webp')

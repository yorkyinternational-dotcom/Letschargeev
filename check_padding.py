import os
from PIL import Image

def analyze_crop(path):
    try:
        with Image.open(path) as img:
            bbox = img.getbbox()
            if bbox:
                crop_w = bbox[2] - bbox[0]
                crop_h = bbox[3] - bbox[1]
                
                print(f"File: {os.path.basename(path)}")
                print(f"  Total size: {img.size[0]}x{img.size[1]}")
                print(f"  Cropped size: {crop_w}x{crop_h} (Aspect: {crop_w/crop_h:.4f})")
                print(f"  Padding X: {(img.size[0]-crop_w)/img.size[0]*100:.1f}%, Padding Y: {(img.size[1]-crop_h)/img.size[1]*100:.1f}%")
            else:
                print(f"Empty image: {path}")
    except Exception as e:
        print(f"Error: {e}")

analyze_crop(r"c:\LetschargeEV\src\assets\images\logo_light.png")
analyze_crop(r"c:\LetschargeEV\src\assets\images\logo_blue.png")

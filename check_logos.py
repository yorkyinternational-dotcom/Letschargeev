import os
from PIL import Image

def analyze_image(path):
    try:
        with Image.open(path) as img:
            print(f"File: {os.path.basename(path)}")
            print(f"Dimensions: {img.size[0]}x{img.size[1]} (Aspect ratio: {img.size[0]/img.size[1]:.4f})")
    except Exception as e:
        print(f"Error reading {path}: {e}")

analyze_image(r"c:\LetschargeEV\src\assets\images\logo_light.png")
analyze_image(r"c:\LetschargeEV\src\assets\images\logo_blue.png")

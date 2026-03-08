import os
from PIL import Image

def normalize_logo(path, out_path, target_height=400):
    try:
        with Image.open(path) as img:
            # Force RGBA if not already
            img = img.convert("RGBA")
            
            # Get bounding box of non-transparent pixels
            bbox = img.getbbox()
            if not bbox:
                print(f"Empty image: {path}")
                return
                
            # Crop exactly to the pixels
            cropped = img.crop(bbox)
            
            # Calculate new width to maintain aspect ratio
            aspect = cropped.width / cropped.height
            target_width = int(target_height * aspect)
            
            # Resize
            resized = cropped.resize((target_width, target_height), Image.Resampling.LANCZOS)
            
            # Add uniform 5% padding around the tight crop just to be safe
            pad_x = int(target_width * 0.05)
            pad_y = int(target_height * 0.05)
            final_w = target_width + (pad_x * 2)
            final_h = target_height + (pad_y * 2)
            
            final_img = Image.new("RGBA", (final_w, final_h), (0, 0, 0, 0))
            final_img.paste(resized, (pad_x, pad_y))
            
            final_img.save(out_path)
            print(f"Saved {os.path.basename(out_path)} at final dimensions {final_w}x{final_h}")
    except Exception as e:
        print(f"Error processing {path}: {e}")

normalize_logo(r"c:\LetschargeEV\src\assets\images\logo_light.png", r"c:\LetschargeEV\src\assets\images\logo_light.png")
normalize_logo(r"c:\LetschargeEV\src\assets\images\logo_blue.png", r"c:\LetschargeEV\src\assets\images\logo_blue.png")

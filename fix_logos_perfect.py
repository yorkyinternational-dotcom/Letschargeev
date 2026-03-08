import os
from PIL import Image

def normalize_logos():
    try:
        path_light = r"c:\LetschargeEV\src\assets\images\logo_light.png"
        path_blue = r"c:\LetschargeEV\src\assets\images\logo_blue.png"
        
        img_light = Image.open(path_light).convert("RGBA")
        img_blue = Image.open(path_blue).convert("RGBA")
        
        box_light = img_light.getbbox()
        box_blue = img_blue.getbbox()
        
        if not box_light or not box_blue:
            return
            
        crop_light = img_light.crop(box_light)
        crop_blue = img_blue.crop(box_blue)
        
        aspect_light = crop_light.width / crop_light.height
        aspect_blue = crop_blue.width / crop_blue.height
        
        # Take the maximum aspect ratio so both fit on the exact same canvas shape
        max_aspect = max(aspect_light, aspect_blue)
        target_height = 400
        target_width = int(target_height * max_aspect)
        
        # Calculate padding to ensure exact dimensions
        pad_x = 40
        pad_y = 20
        final_w = target_width + (pad_x * 2)
        final_h = target_height + (pad_y * 2)
        
        def process_and_save(cropped, original_aspect, out_path):
            # Scale this image up to exactly 400 height
            this_w = int(400 * original_aspect)
            resized = cropped.resize((this_w, 400), Image.Resampling.LANCZOS)
            
            # Create a uniform transparent canvas
            final_img = Image.new("RGBA", (final_w, final_h), (0, 0, 0, 0))
            
            # Center this resized logo inside the uniform canvas horizontally
            offset_x = (final_w - this_w) // 2
            offset_y = pad_y
            final_img.paste(resized, (offset_x, offset_y))
            
            final_img.save(out_path)
            print(f"Saved {os.path.basename(out_path)} at {final_w}x{final_h}")

        process_and_save(crop_light, aspect_light, path_light)
        process_and_save(crop_blue, aspect_blue, path_blue)
        
    except Exception as e:
        print(f"Error: {e}")

normalize_logos()

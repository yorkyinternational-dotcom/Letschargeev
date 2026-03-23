from PIL import Image
import os

images = [
    (r"C:\Users\Dell\.gemini\antigravity\brain\1591a612-aa03-43a7-ac21-861f7968692a\dc_fast_charger_premium_1774182237919.png", r"c:\LetschargeEV\src\assets\images\dc_fast_charger.png"),
    (r"C:\Users\Dell\.gemini\antigravity\brain\1591a612-aa03-43a7-ac21-861f7968692a\ac_wallbox_premium_1774182269615.png", r"c:\LetschargeEV\src\assets\images\ac_wallbox.png"),
    (r"C:\Users\Dell\.gemini\antigravity\brain\1591a612-aa03-43a7-ac21-861f7968692a\ultra_hub_premium_1774182289307.png", r"c:\LetschargeEV\src\assets\images\ultra_fast_hub.png")
]

def make_transparent(img_path, out_path):
    try:
        img = Image.open(img_path).convert("RGBA")
        data = img.getdata()
        
        newData = []
        for item in data:
            # If pixel is almost pure white
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        
        # Optionally crop the empty space
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        img.save(out_path, "PNG")
        print(f"Processed: {os.path.basename(out_path)}")
    except Exception as e:
        print(f"Error on {img_path}: {e}")

for in_p, out_p in images:
    make_transparent(in_p, out_p)

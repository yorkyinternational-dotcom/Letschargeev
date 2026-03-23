from PIL import Image
import os
import shutil

images = [
    (r"C:\Users\Dell\.gemini\antigravity\brain\1591a612-aa03-43a7-ac21-861f7968692a\dc_fast_charger_8k_1774182422044.png", r"c:\LetschargeEV\src\assets\images\dc_fast_charger.png"),
    (r"C:\Users\Dell\.gemini\antigravity\brain\1591a612-aa03-43a7-ac21-861f7968692a\ac_wallbox_8k_1774182446003.png", r"c:\LetschargeEV\src\assets\images\ac_wallbox.png"),
    (r"C:\Users\Dell\.gemini\antigravity\brain\1591a612-aa03-43a7-ac21-861f7968692a\ultra_hub_8k_1774182459822.png", r"c:\LetschargeEV\src\assets\images\ultra_fast_hub.png")
]

dashboard_in = r"C:\Users\Dell\.gemini\antigravity\brain\1591a612-aa03-43a7-ac21-861f7968692a\cms_dashboard_8k_1774182477102.png"
dashboard_out = r"c:\LetschargeEV\src\assets\images\cms_dashboard.png"

def make_transparent(img_path, out_path):
    try:
        img = Image.open(img_path).convert("RGBA")
        data = img.getdata()
        
        newData = []
        for item in data:
            # If pixel is almost pure white, make it transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        
        # Crop the image tight to its bounding box
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        img.save(out_path, "PNG", optimize=True)
        print(f"Processed and padded: {os.path.basename(out_path)}")
    except Exception as e:
        print(f"Error on {img_path}: {e}")

for in_p, out_p in images:
    make_transparent(in_p, out_p)

try:
    shutil.copy2(dashboard_in, dashboard_out)
    print("Copied dashboard image.")
except Exception as e:
    print(e)

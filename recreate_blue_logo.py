import os
from PIL import Image, ImageOps

def create_blue_logo():
    try:
        path_light = r"c:\LetschargeEV\src\assets\images\logo_light.png"
        path_blue = r"c:\LetschargeEV\src\assets\images\logo_blue.png"
        
        # Open the white logo
        img = Image.open(path_light).convert("RGBA")
        
        # Get data
        data = img.getdata()
        
        # New data list
        new_data = []
        
        # Primary black color from LCEv branding #050505 (almost black)
        # Wait, the "blue" logo was actually the dark theme logo. In the site's context, 
        # the light theme uses logo_blue (which is actually a dark grey/black logo for light backgrounds)
        # Let's verify the colors needed. Usually "logo_blue" in this app was a dark variant.
        # Let's make it primary black: (5, 5, 5)
        
        for item in data:
            # Change all non-transparent white pixels to dark grey
            if item[3] > 0: # If not fully transparent
                # Keep original alpha, but change RGB to dark
                new_data.append((20, 20, 20, item[3]))
            else:
                new_data.append(item)
                
        # Update image data
        img.putdata(new_data)
        
        # Save as logo_blue.png
        img.save(path_blue)
        print(f"Successfully recreated logo_blue.png at {path_blue}")
        
    except Exception as e:
        print(f"Error: {e}")

create_blue_logo()

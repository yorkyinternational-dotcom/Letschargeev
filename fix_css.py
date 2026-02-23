import os
import re

# Simple CSS Auditor for LCEv Branding Consistency
# Scans src directory for hardcoded HEX/HSL colors and suggests replacements

brand_colors = {
    '#0A192F': 'text-primary / bg-primary (Deep LCEv Blue)',
    '#112240': 'primary-light',
    '#020c1b': 'primary-dark',
    '#00D2FF': 'text-accent / bg-accent (Electric Cyan)',
    '#00D68F': 'text-eco / bg-eco (Eco Green)',
}

def scan_files():
    src_dir = './src'
    hex_pattern = r'#(?:[0-9a-fA-F]{3}){1,2}'
    
    print(f"{'File':<40} | {'Line':<5} | {'Hardcoded Color':<15} | {'Suggestion':<20}")
    print("-" * 85)
    
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith(('.jsx', '.css')):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        for i, line in enumerate(f, 1):
                            matches = re.finditer(hex_pattern, line)
                            for match in matches:
                                color = match.group().upper()
                                # Ignore casing and shorthand
                                if len(color) == 4: # #FFF
                                    expanded = '#' + ''.join([c*2 for c in color[1:]])
                                else:
                                    expanded = color
                                    
                                if expanded in brand_colors:
                                    print(f"{file:<40} | {i:<5} | {color:<15} | {brand_colors[expanded]}")
                                elif color not in ['#FFFFFF', '#000000', '#FFF', '#000']:
                                     print(f"{file:<40} | {i:<5} | {color:<15} | Unknown - Check Branding")
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")

if __name__ == "__main__":
    scan_files()

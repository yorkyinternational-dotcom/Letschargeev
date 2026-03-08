import os

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Dictionary to tighten macro margins separating headings from grid data
        replacements = {
            'mb-12 md:mb-24': 'mb-12 md:mb-16',
            'mb-16 md:mb-32': 'mb-12 md:mb-16',
            'mb-12 md:mb-20': 'mb-10 md:mb-12',
            'gap-20 mb-12 flex': 'gap-12 mb-12 flex',
            'gap-20 mb-12 md:mb-24': 'gap-12 mb-12 md:mb-16'
        }

        new_content = content
        for old, new in replacements.items():
            new_content = new_content.replace(old, new)
            
        if content != new_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Refactored proximity spacing in {os.path.basename(filepath)}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

src_dir = r'c:\LetschargeEV\src'
for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.jsx'):
            process_file(os.path.join(root, file))

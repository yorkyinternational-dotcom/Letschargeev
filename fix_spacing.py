import os

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Dictionary of static large spacings to fluid responsive spacings
        replacements = {
            'pt-48 pb-32': 'pt-32 md:pt-48 pb-16 md:pb-32',
            'mt-32': 'mt-16 md:mt-32',
            'py-24 md:py-40': 'py-16 md:py-24 lg:py-32',
            'py-24 md:py-32': 'py-16 md:py-24',
            'pt-48 pb-24': 'pt-32 md:pt-48 pb-16 md:pb-24',
            'className="py-32"': 'className="py-16 md:py-32"',
            'py-32 ': 'py-16 md:py-32 ',
            'mb-24': 'mb-12 md:mb-24',
            'mb-32': 'mb-16 md:mb-32',
            'mb-20': 'mb-12 md:mb-20',
            'pt-32 pb-24': 'pt-24 md:pt-32 pb-16 md:pb-24',
            'mt-24': 'mt-12 md:mt-24',
            'pt-32 pb-32 lg:pb-16': 'pt-16 md:pt-32 pb-24 lg:pb-16',
        }

        new_content = content
        for old, new in replacements.items():
            new_content = new_content.replace(old, new)
            
        if content != new_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Refactored spacing in {os.path.basename(filepath)}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

src_dir = r'c:\LetschargeEV\src'
for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.jsx'):
            process_file(os.path.join(root, file))

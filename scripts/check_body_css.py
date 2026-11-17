import re

with open('scripts/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# find all color / background definitions for body or html or main
for m in re.finditer(r'(body|\.intro-content-wrapper|\.bg-pattern)[^{}]*\{([^}]+)\}', css):
    if 'color' in m.group(2) or 'background' in m.group(2):
        print(m.group(0).strip())
        print('-'*30)

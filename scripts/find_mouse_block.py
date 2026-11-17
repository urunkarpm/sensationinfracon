import re

with open('scripts/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

for m in re.finditer(r'([^{}]*mouse-block[^{}]*\{[^}]+\})', css):
    print(m.group(0))
    print('-'*30)

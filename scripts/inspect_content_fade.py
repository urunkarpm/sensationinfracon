import re

with open('scripts/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

for m in re.finditer(r'([^{}]*(?:content-fade|button-circle-group|circle-bar)[^{}]*\{[^}]+\})', css, re.I):
    print(m.group(0).strip())
    print('-'*30)

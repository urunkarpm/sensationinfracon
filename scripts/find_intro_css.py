import re

with open('scripts/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

for rule in re.findall(r'(\.intro-content[^{}]*\{[^}]+\})', css):
    print(rule)
    print('-'*40)

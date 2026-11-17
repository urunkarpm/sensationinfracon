import re

with open('scripts/gf_welcome.html', 'r', encoding='utf-8') as f:
    html = f.read()

scripts = re.findall(r'<script[^>]*src=[\"\']([^\"\']+)[\"\']', html)
print("External scripts:")
for s in scripts:
    print("  ", s)

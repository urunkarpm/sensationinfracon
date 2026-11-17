with open('scripts/theme.jquery.js', 'r', encoding='utf-8') as f:
    js = f.read()

for line in js.splitlines():
    if any(k in line.lower() for k in ['intro', 'mask', 'loaded', 'circle', 'scroll', 'fade']):
        print(line.strip())

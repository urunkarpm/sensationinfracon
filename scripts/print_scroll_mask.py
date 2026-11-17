with open('scripts/theme.jquery.js', 'r', encoding='utf-8') as f:
    js = f.read()

lines = js.splitlines()
print("\n".join(lines[280:335]))

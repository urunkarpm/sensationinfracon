with open('scripts/theme.jquery.js', 'r', encoding='utf-8') as f:
    js = f.read()

lines = js.splitlines()
for i, line in enumerate(lines):
    if any(k in line.lower() for k in ['intro-mask', 'wp-loaded', 'button-circle-group', 'animate']):
        start = max(0, i - 10)
        end = min(len(lines), i + 20)
        print(f"=== Match around line {i} ===")
        print("\n".join(lines[start:end]))
        print("\n" + "="*40 + "\n")

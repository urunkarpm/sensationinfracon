with open('scripts/theme.jquery.js', 'r', encoding='utf-8') as f:
    js = f.read()

lines = js.splitlines()
for i, line in enumerate(lines):
    if 'scroll-up-fast' in line or 'mousewheelevent' in line.lower() or 'intro-mask' in line:
        start = max(0, i - 5)
        end = min(len(lines), i + 15)
        print(f"=== Line {i} ===")
        print("\n".join(lines[start:end]))
        print("\n" + "="*30)

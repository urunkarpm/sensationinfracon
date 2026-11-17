import re

with open('scripts/gf_welcome.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('scripts/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

print("=== WELCOME HTML BODY ===")
body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.I)
if body_match:
    # remove scripts
    clean_body = re.sub(r'<script[^>]*>.*?</script>', '', body_match.group(1), flags=re.DOTALL | re.I)
    print(clean_body)

print("\n=== CSS RULES FOR INTRO ===")
for selector in ['intro', 'button-circle', 'logo', 'header-fixed', 'body']:
    matches = re.findall(rf'([^{{}}]*?{selector}[^{{}}]*?\{{[^}}]*\}})', css, re.I)
    print(f"\n--- Selector keyword: {selector} (found {len(matches)}) ---")
    for m in matches[:6]:
        print(m.strip())

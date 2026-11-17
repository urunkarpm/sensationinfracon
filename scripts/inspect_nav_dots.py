import re

with open('scripts/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

for sel in ['scroll-page', 'fp-nav', 'icon-mouse', 'open-menu-block']:
    matches = re.findall(rf'([^{{}}]*?\.{sel}[^{{}}]*?\{{[^}}]*\}})', css, re.I)
    print(f"\n--- {sel} ({len(matches)}) ---")
    for m in matches[:5]:
        print(m.strip())

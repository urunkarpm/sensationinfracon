import re

with open('scripts/gf_inner.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('scripts/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

print("=== SECTION CLASSES & STRUCTURE ===")
sections = re.findall(r'<section class=[\"\']section-page-wrapper.*?>(.*?)</section>', html, re.DOTALL)
for i, s in enumerate(sections):
    print(f"\n--- Section {i+1} HTML snippet ---")
    # print first 600 chars
    print(s[:600].strip())

print("\n=== CSS FOR SECTION-PAGE-WRAPPER & INNER-SECTION ===")
for sel in ['section-page-wrapper', 'inner-section', 'section-content-box', 'section-img-box']:
    matches = re.findall(rf'([^{{}}]*?\.{sel}[^{{}}]*?\{{[^}}]*\}})', css, re.I)
    print(f"\n--- {sel} ({len(matches)}) ---")
    for m in matches[:4]:
        print(m.strip())

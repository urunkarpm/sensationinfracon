import re

with open('scripts/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

selectors = [
    'intro-mask',
    'intro-content',
    'button-circle-group',
    'intro-logo-box',
    'animatecircleborder',
    'bg-pattern'
]

results = []
for sel in selectors:
    matches = re.findall(rf'([^{{}}]*?\.{sel}[^{{}}]*?\{{[^}}]*\}})', css, re.I)
    for m in matches:
        results.append(m.strip())

print(f"Found {len(results)} rules.")
with open('scripts/gf_exact_styles.css', 'w', encoding='utf-8') as f:
    f.write("\n\n".join(results))
print("Saved to scripts/gf_exact_styles.css")

import re

with open('scripts/gf_welcome.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('scripts/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

print("=== JAVASCRIPT IN WELCOME PAGE ===")
scripts = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL | re.I)
for i, s in enumerate(scripts):
    if any(k in s for k in ['intro', 'mask', 'circle', 'wp-loaded', 'animate', 'fade', 'cookie']):
        print(f"--- Script {i} ---")
        print(s.strip()[:1000])

print("\n=== ALL CSS RULES FOR INTRO-MASK & INTRO-CONTENT ===")
for m in re.finditer(r'([^{}]*(?:intro-mask|content-fade|animatecircleborder|circle-bar|intro-logo)[^{}]*\{[^}]+\})', css, re.I):
    print(m.group(0).strip())
    print('-'*30)

import re

with open('scripts/gf_inner.html', 'r', encoding='utf-8') as f:
    html = f.read()

# find navbar-collapse or menu-main-navigation
menu = re.search(r'<div class=[\"\']collapse navbar-collapse[\"\'][^>]*>(.*?)</div>', html, re.DOTALL)
if menu:
    print("=== NAV MENU ITEMS ===")
    links = re.findall(r'<a[^>]*>(.*?)</a>', menu.group(1))
    print("Links:", links)

# find footer in gf_inner
footer = re.search(r'<footer[^>]*>(.*?)</footer>', html, re.DOTALL)
if footer:
    print("=== FOOTER ===")
    print(footer.group(0))
else:
    # search for copyright or footer elements
    print("Footer matches:")
    for line in html.splitlines():
        if 'copyright' in line.lower() or 'privacy policy' in line.lower() or '©' in line:
            print("  ", line.strip())

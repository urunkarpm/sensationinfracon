import re

with open('scripts/gf_inner.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Header structure
header = re.search(r'<header[^>]*>.*?</header>', html, re.DOTALL)
if header:
    print("=== HEADER ===")
    print(header.group(0)[:1000])

# Navigation / Menu structure
menu = re.search(r'<nav[^>]*>.*?</nav>|<div class=[\"\']navbar.*?</div>', html, re.DOTALL)
if menu:
    print("=== MENU ===")
    print(menu.group(0)[:1000])

# Fullpage wrapper or main section
main = re.search(r'<main[^>]*>.*?</main>', html, re.DOTALL)
if main:
    print("=== MAIN SNIPPET ===")
    print(main.group(0)[:2000])

# Find all section-page-wrapper instances
sections = re.findall(r'<section class=[\"\']section-page-wrapper.*?>(.*?)</section>', html, re.DOTALL)
print(f"\nFound {len(sections)} sections in main page:")
for i, s in enumerate(sections):
    print(f"\n--- Section {i+1} ---")
    titles = re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', s)
    imgs = re.findall(r'<img[^>]*src=[\"\']([^\"\']+)[\"\']', s)
    bg_imgs = re.findall(r'background-image:\s*url\([\'\"]?([^\'\")]+)[\'\"]?\)', s)
    ps = re.findall(r'<p[^>]*>(.*?)</p>', s)
    print("Titles:", titles)
    print("Imgs:", imgs)
    print("Bg Imgs:", bg_imgs)
    if ps:
        print("P snippet:", ps[0][:150])

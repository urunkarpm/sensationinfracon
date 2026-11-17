import re

with open('scripts/gf_inner.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's see all sections in #full-height
main = re.search(r'<main id=[\"\']full-height[\"\']>(.*?)</main>', html, re.DOTALL)
if main:
    sections = re.findall(r'<section class=[\"\']section-page-wrapper.*?>(.*?)</section>', main.group(1), re.DOTALL)
    print(f"Total sections in #full-height: {len(sections)}")
    for i, s in enumerate(sections):
        print(f"\n================ SECTION {i+1} ================")
        # Titles
        h2 = re.findall(r'<h2[^>]*>(.*?)</h2>', s, re.DOTALL)
        print("H2:", h2)
        # Paragraphs
        p = re.findall(r'<p[^>]*>(.*?)</p>', s, re.DOTALL)
        if p:
            print("P:", p[0].strip()[:200])
        # Images
        imgs = re.findall(r'<img[^>]*src=[\"\']([^\"\']+)[\"\'][^>]*>', s)
        print("Images:", imgs)
        # Gif attributes
        gifs = re.findall(r'data-gif=[\"\']([^\"\']+)[\"\']', s)
        print("Gifs:", gifs)

# Check elements outside main
print("\n=== OTHER ELEMENTS IN INNER PAGE ===")
for elem in ['nav', 'header', 'footer', 'div id=[\"\']fp-nav[\"\']', 'class=[\"\']scroll-page']:
    m = re.findall(rf'(<[^>]*{elem}[^>]*>.*?</[^>]+>)', html, re.DOTALL | re.I)
    print(f"Elem {elem}: {len(m)} found")
    if m:
        print(m[0][:400])

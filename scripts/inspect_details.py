import re

with open('scripts/gf_welcome.html', 'r', encoding='utf-8') as f:
    welcome_html = f.read()

with open('scripts/gf_inner.html', 'r', encoding='utf-8') as f:
    inner_html = f.read()

print("=== WELCOME PAGE STYLES & ASSETS ===")
# find stylesheets
styles = re.findall(r'<link[^>]*rel=[\"\']stylesheet[\"\'][^>]*href=[\"\']([^\"\']+)[\"\']', welcome_html)
for s in styles:
    print("Stylesheet:", s)

# look for inline styles
inline_styles = re.findall(r'<style[^>]*>(.*?)</style>', welcome_html, re.DOTALL)
print("Inline styles count:", len(inline_styles))
if inline_styles:
    print("Inline style 1 sample:", inline_styles[0][:500])

# let's find the SVG logo and pattern
print("\nSVGs in welcome:")
for svg in re.findall(r'<svg.*?</svg>', welcome_html, re.DOTALL):
    print("SVG snippet:", svg[:200], "...\n")

print("\n=== INNER PAGE SECTIONS ===")
# find section classes / ids
sections = re.findall(r'<(section|div)[^>]*class=[\"\']([^\"\']*(?:slide|section|panel|fp-|fullpage)[^\"\']*)[\"\']', inner_html, re.I)
print("Inner sections:", sections)

# find main body classes
print("Inner body tag:", re.findall(r'<body[^>]*>', inner_html))

import re

with open('scripts/gf_welcome.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's find all hrefs and structure
print("Links found:")
for link in set(re.findall(r'href=[\"\']([^\"\']+)[\"\']', html)):
    if not link.startswith('#') and not link.endswith('.css') and not 'wp-' in link:
        print("  ", link)

# Let's inspect the main container and body
body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.I)
if body_match:
    body_content = body_match.group(1)
    # Print the direct children or structure
    print("\nBody length:", len(body_content))
    # Look for IDs or classes
    sections = re.findall(r'<div[^>]*class=[\"\']([^\"\']+)[\"\']', body_content)
    print("\nClasses in divs:", set(sections[:30]))

    # Print the main section structure
    main_match = re.search(r'(<main.*?</main>|<section.*?</section>|<div class=[\"\'].*?welcome.*?</div>)', body_content, re.DOTALL | re.I)
    if main_match:
        print("\nMain snippet:")
        print(main_match.group(0)[:1500])
    else:
        # Just print lines with enter
        print("\nEnter context:")
        for line in body_content.splitlines():
            if 'Enter' in line or 'enter' in line or 'logo' in line.lower():
                print("Line:", line.strip()[:200])

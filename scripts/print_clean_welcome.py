import re

with open('scripts/gf_welcome.html', 'r', encoding='utf-8') as f:
    html = f.read()

# get the header and main
body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL)
if body_match:
    b = body_match.group(1)
    # clean comments and noscripts
    b = re.sub(r'<!--.*?-->', '', b, flags=re.DOTALL)
    b = re.sub(r'<noscript>.*?</noscript>', '', b, flags=re.DOTALL)
    b = re.sub(r'<script.*?</script>', '', b, flags=re.DOTALL)
    print("=== CLEAN BODY OF GF WELCOME ===")
    for line in b.splitlines():
        if line.strip():
            print(line.rstrip())

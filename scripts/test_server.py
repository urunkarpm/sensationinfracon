import urllib.request
import re

for url in ['http://localhost:3000/', 'http://localhost:3000/welcome']:
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8')
        css_links = re.findall(r'<link[^>]*rel=[\"\']stylesheet[\"\'][^>]*href=[\"\']([^\"\']+)[\"\']', html)
        print(f"{url} -> status {resp.status}, length {len(html)}")
        print(f"CSS links found: {css_links}")
        for link in css_links:
            css_url = 'http://localhost:3000' + link
            with urllib.request.urlopen(urllib.request.Request(css_url)) as cresp:
                content = cresp.read()
                print(f"  CSS {link} -> status {cresp.status}, length {len(content)}")

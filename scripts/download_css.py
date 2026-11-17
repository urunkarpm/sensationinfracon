import urllib.request
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for name, url in [
    ('style.css', 'https://www.grayandfarrar.com/wp-content/themes/gray-and-farrar/style.css'),
    ('extra.css', 'https://www.grayandfarrar.com/wp-content/themes/gray-and-farrar/assets/css/extra.css')
]:
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            with open(f'scripts/{name}', 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Downloaded {name} ({len(content)} bytes)")
    except Exception as e:
        print(f"Error {name}: {e}")

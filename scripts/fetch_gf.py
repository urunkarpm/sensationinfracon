import urllib.request
import re
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

urls = ['https://www.grayandfarrar.com/welcome/', 'https://www.grayandfarrar.com/']

for url in urls:
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            print(f"=== URL: {url} (Length: {len(html)}) ===")
            title = re.findall(r'<title>(.*?)</title>', html, re.I)
            print("Title:", title)
            
            # Save raw HTML to analyze
            filename = 'scripts/gf_welcome.html' if 'welcome' in url else 'scripts/gf_home.html'
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(html)
            print(f"Saved to {filename}")

            clean = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', html, flags=re.DOTALL | re.I)
            text_snippets = [line.strip() for line in re.findall(r'>([^<]+)<', clean) if line.strip()]
            print("Text snippets (first 20):", text_snippets[:20])
    except Exception as e:
        print(f"Error fetching {url}: {e}")

import urllib.request
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Cookie': 'access_code=clear; entered=true'
}

url = 'https://www.grayandfarrar.com?access_code=clear'
try:
    # use a cookie jar to handle redirects and cookies
    import http.cookiejar
    cj = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
    req = urllib.request.Request(url, headers=headers)
    with opener.open(req, timeout=15) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        print("URL fetched:", resp.geturl())
        print("Cookies:", [c.name + '=' + c.value for c in cj])
        print("HTML length:", len(html))
        title = re.findall(r'<title>(.*?)</title>', html, re.I)
        print("Title:", title)
        with open('scripts/gf_inner.html', 'w', encoding='utf-8') as f:
            f.write(html)
        clean = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', html, flags=re.DOTALL | re.I)
        text_snippets = [line.strip() for line in re.findall(r'>([^<]+)<', clean) if line.strip()]
        print("Text snippets (first 30):", text_snippets[:30])
except Exception as e:
    print("Error:", e)

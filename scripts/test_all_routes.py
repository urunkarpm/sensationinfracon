import urllib.request

routes = [
    '/',
    '/welcome',
    '/about',
    '/projects',
    '/hospitality-partners',
    '/project-consultants',
    '/visionary-investments',
    '/channel-partners',
    '/testimonials',
    '/blog',
    '/contact',
]

for r in routes:
    url = f"http://localhost:3000{r}"
    try:
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req) as resp:
            print(f"{r:25} -> {resp.status} (length {len(resp.read())})")
    except Exception as e:
        print(f"{r:25} -> ERROR: {e}")

import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        
        import time
        import urllib.request
        for _ in range(30):
            try:
                urllib.request.urlopen("http://localhost:3000")
                break
            except:
                time.sleep(1)
        
        await page.goto('http://localhost:3000')
        await page.wait_for_timeout(2000)
        
        import os
        os.makedirs("docs", exist_ok=True)
        await page.screenshot(path='docs/screenshot.png', full_page=False)
        await browser.close()
        print("SCREENSHOT_CAPTURED")

asyncio.run(main())

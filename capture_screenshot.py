import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1920, 'height': 1080})
        
        import time
        import urllib.request
        for _ in range(30):
            try:
                urllib.request.urlopen("http://localhost:3000")
                break
            except:
                time.sleep(1)
        
        await page.goto('http://localhost:3000')
        print("Scrolling page to trigger animations...")
        
        # Scroll down slowly to trigger all Framer Motion whileInView elements
        await page.evaluate('''async () => {
            await new Promise((resolve) => {
                let totalHeight = 0;
                let distance = 500;
                let timer = setInterval(() => {
                    let scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;
                    if(totalHeight >= scrollHeight - window.innerHeight){
                        clearInterval(timer);
                        resolve();
                    }
                }, 200);
            });
            window.scrollTo(0, 0); // Scroll back to top
        }''')
        
        print("Waiting 2 seconds for animations to settle...")
        await page.wait_for_timeout(2000)
        
        # Hide Next.js build indicator
        await page.evaluate('''() => {
            const nextjsOverlay = document.querySelector('nextjs-portal');
            if (nextjsOverlay) nextjsOverlay.remove();
        }''')
        
        import os
        os.makedirs("docs", exist_ok=True)
        # Capture FULL PAGE screenshot
        await page.screenshot(path='docs/screenshot.png', full_page=True)
        await browser.close()
        print("SCREENSHOT_CAPTURED")

asyncio.run(main())

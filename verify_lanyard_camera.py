import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 800})
        await page.goto('http://localhost:5173/')

        # Scroll and wait for Lanyard
        await page.mouse.wheel(0, 500)
        await page.wait_for_timeout(3000)

        await page.screenshot(path='/home/jules/verification/lanyard_camera_15.png')
        await browser.close()

asyncio.run(main())

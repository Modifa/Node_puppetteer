const http = require('http');
const app = require('./app');
const port = process.env.PORT || 8080;
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

const screenshot = 'page.png';
const Username = '@modifa_brat';
const Password = 'Modifa19';
try{
  
(async () => {
    
  const browser = await puppeteer.launch({ headless: false, executablePath:'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe' })
  const page = await browser.newPage()
  await page.setExtraHTTPHeaders({
    'accept-language': 'en-US,en;q=0.9,hy;q=0.8'
});
await page.goto('https://twitter.com/i/flow/login',{ waitUntil: 'load', timeout: 0 });
  await page.waitForSelector('input[type="text"]')
  await page.type('input[type="text"]',Username);
  // await Promise.all([
  // page.waitForNavigation(),
  await page.keyboard.press('Enter')
// ]);
// await page.setDefaultNavigationTimeout(0);
// await page.waitForSelector('input[type="password"]');
// await page.type('input[type="password"]', Password);
  // await Promise.all([
  await page.screenshot({ path: screenshot })
  // ]);
  // await page.type('#login_field',Username)
  // await page.type('#password',Password)
  // await page.click('[name="commit"]')
  browser.close()
  console.log('See screenshot: ' + screenshot)

})()

}catch(err){
  console.log(err)
}
const server = http.createServer(app);
console.log("connected successfully on: ",port);

server.listen(port);


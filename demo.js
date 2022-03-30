let puppeteer = require('puppeteer')

console.log('Before')

let browserWillbeLauchedPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    rgs: ['--start-fullscreen', '--start-maximized']
})

browserWillbeLauchedPromise.then(function(browserInstance){
    let newTabPromise = browserInstance.newPage()

    return newTabPromise;
}).then(function(newTab){
    console.log('New Tab opened')
    let pageWillBeOpenedPromise = newTab.goto('https://www.pepcoding.com/#')
    return pageWillBeOpenedPromise
}).then(function(){
    console.log('Website Opened')
})

console.log('After')
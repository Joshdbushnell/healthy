var weight = {}



var searchSite = (fillout, gender, system, age, life, feet, inch, weight) => {
    fillout
        .waitForElementVisible('@app')
        .useXpath()
        .click("//*[contains(text(), 'Weight')]")
        .useCss()    
        .setValue('@gender', gender)
        .setValue('@system', system)
        .click('@age')
        .clearValue('@age')
        .setValue('@age', age)
        .setValue('@life', life)
        .click('@feet')
        .clearValue('@feet')
        .setValue('@feet', feet)
        .click('@inch')
        .clearValue('@inch')
        .setValue('@inch', inch)
        .click('@weight')
        .clearValue('@weight')
        .setValue('@weight', weight)
        .click('@btn2')
        .expect.element('@cur').text.to.equal(weight)
    fillout
        .useXpath()
        .click("//*[contains(text(), 'Moving')]")
        .useCss()  

        

        
        

        
    

}


var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}

module.exports = {
    before: browser => {
        weight = browser.page.objectPage()
        weight.navigate()


            .waitForElementPresent('@app', 5000)
    },
    after: browser => {
        browser.end()
    },

    'search': browser => {
        weight
            searchSite(weight, 'm', 'us', '29', '1.375',  '5', '10', '135')
            searchSite(weight, 'm', 'us', '29', '1.375',  '60', '45', '200')
            searchSite(weight, 'f', 'us', '50', '1.375',  '30', '30', '500')
       
    },

}
        
var weight = {}



var searchSite = (fillout, activity, min, pounds) => {
    fillout
        .waitForElementVisible('@app') 
        .waitForElementPresent('@activity')
        .setValue('@activity', activity)
        .click('@min')
        .clearValue('@min')
        .setValue('@min', min)
        .click('@pounds')
        .clearValue('@pounds')
        .setValue('@pounds', pounds)
        .click('@btn')
        .expect.element('@calories').to.be.present.before(500)
        

        
        

        
    

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
            searchSite(weight, 'rope jumping', '10', '135')
            searchSite(weight, 'cooking', '50', '250')
            searchSite(weight, 'jogging', '60', '175')
       
    },

}
        
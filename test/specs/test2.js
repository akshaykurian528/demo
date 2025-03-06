import main from "../pageobjects/main"


describe('Amazon Website E2E testing', function () {

    it('check Amazon Website page is launched', async function () {
        await main.LaunchUrl()
    })

    it('Selecting the search dropdown box and clicking the electronics option from dropdown', async function(){
        await main.searchDropdown();
    }) 
    it('Searching Product', async function(){
            await main.searchBar();
            await main.search();
        })
    it('Find first product with Amazon Prime label and adding to cart', async function () {
            await main.findFirstPrimeProduct();
    });
})

import main from "../pageobjects/main"


describe('Amazon Website E2E testing', function () {

    it('check Amazon Website page is launched', async function () {
        await main.LaunchUrl()
    })

    it('Selecting the search dropdown box and clicking the electronics option from dropdown', async function(){
        await main.searchDropdown();
    })
    //Search the product
    it('Searching Product', async function(){
        await main.searchBar();
        await main.search();
    })
    // Find the first product with prime
    it('Find first product with Amazon Prime label and adding to cart', async function () {
        await main.findFirstPrimeProduct();
    });

    it('Verify that an item exists in the cart', async () => {
        await main.cart();
        const cartItems = await $$('//span[contains(@class, "sc-product-title")]');
        expect(cartItems.length).toBeGreaterThan(0);
    });     

    it('Delete item from cart and ver', async () => {
        await main.deleteCartItem();
        const cartItems = await $$('//span[contains(@class, "sc-product-title")]');
        expect(cartItems.length).toBe(0);
    });    
    
})

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

    //Find first product with Amazon Prime label and adding to cart

    it('Find first product with Amazon Prime label and adding to cart', async function () {
        await main.findFirstPrimeProduct();
    });

    //Verify that an item exists in the cart

    it('Verify that an item exists in the cart', async () => {
        await main.cart();
        const cartItems = await $$('//span[contains(@class, "sc-product-title")]');
        expect(cartItems.length).toBeGreaterThan(0);
    });     

    // Test to perform deletion of product in cart
    it('Delete item from cart and ver', async () => {
        await main.deleteCartItem();
        const cartItems = await $$('//span[contains(@class, "sc-product-title")]');
        expect(cartItems.length).toBe(0);
    });    
    
})

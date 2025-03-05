class Main {
    constructor() {
        this.$searchDropdownBox = () => $(`//select[@id="searchDropdownBox"]`);
        this.$searchBar = () => $(`//input[@id="twotabsearchtextbox"]`)
        this.$searchButton = () => $(`//input[@id="nav-search-submit-button"]`)
        this.$cartButton = () => $(`//span[@id="nav-cart-count"]`)
        this.$deleteButton = () => $(`//input[contains(@value, "Delete")]`)
    }

    async LaunchUrl() {
        await browser.url('https://www.amazon.in/');
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
    }

    async searchDropdown () {
        await this.$searchDropdownBox().click();
        await this.$searchDropdownBox().selectByVisibleText("Electronics");
    }

    async searchBar () {
        await this.$searchBar().click();
        await this.$searchBar().setValue('Apple');
    }

    async search () {
        await this.$searchButton().click();
    }

    async findFirstPrimeProduct() {
        const products = await $$('//div[@data-component-type="s-search-result"]');
        for (let product of products) {
            const primeIcon = await product.$('.a-icon.a-icon-prime.a-icon-medium');
            if (await primeIcon.isExisting()) {
                const addToCartButton = await product.$('//button[contains(text(), "Add to cart")]');
                if (await addToCartButton.isExisting()) {
                    await product.scrollIntoView();
                    await browser.pause(3000);
                    await addToCartButton.click();
                    await browser.pause(4000);
                    break;
                }
            }
        }
    }

    async cart() {
        await this.$cartButton().click();
    }

    async deleteCartItem() {
        await browser.pause(4000); // Wait for cart page to load
        await this.$deleteButton().click();
        await browser.pause(4000); // Wait for deletion to complete
    }    
    
    
}

export default new Main();

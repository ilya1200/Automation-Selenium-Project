class AnaliyticsPage {
    constructor(selenium) {
        this.selenium = selenium;
        this.locators = {
            emailSent:{
                locator: "div.badge:nth-child(2) div.badge-val",
                type: "css"
            },
            outstandingClients:{
                locator: "div.badge:nth-child(3) div.badge-val",
                type: "css"
            }
        }
    }

    /**
     * @returns The number of Emails Sent
     */
    async getEmailsSent(){
        return parseInt(await this.selenium.getTextFromElement(this.locators.emailSent.locator,this.locators.emailSent.type))
    }

    async navigateToAnaliyticsPage() {
        await this.selenium.getURL("https://lh-crm.herokuapp.com/analytics");
    }

    
    /**
     * @returns The number of Outstanding Clients
     */
    async getOutstandingClients(){
        return parseInt(await this.selenium.getTextFromElement(this.locators.outstandingClients.locator,this.locators.outstandingClients.type))
    }
}

module.exports = AnaliyticsPage;
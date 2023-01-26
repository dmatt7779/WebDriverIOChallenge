import Page from './page.js';

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("[name='UserName']");
    }

    get inputPassword () {
        return $("[name='Password']");
    }

    get loginBtn () {
        return $('#login');
    }

    get loginTextStatus () {
        return $('#loginstatus');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }

    open () {
        return super.open('sampleapp');
    }
}

const loginPage = new LoginPage();
export default loginPage;

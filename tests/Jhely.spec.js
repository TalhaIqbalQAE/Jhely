const {test, expect} = require('@playwright/test');

test('User Register Test (Valid Credentials)', async ({browser})=>
{
    //Browser Setup
    const context = await browser.newContext();
    const page = await context.newPage();
    
    //#region Locators

    //Register Page
    const FullNameLocator = page.locator('#name');
    const EmailLocator = page.locator('#email-address');
    const PasswordLocator = page.locator('#password');
    const PolicyCheckboxLocator = page.locator('span.checkmark').first();
    const ReceiveEmailCheckboxLocator = page.locator('span.checkmark').last();
    const RegisterButtonLocator = page.locator("//button[@type='submit']");
   
    //#endregion
    
    //Open URL
    await page.goto("https://jhely.com/bo/auth/register/individual?redirectTo=/bo");

    await FullNameLocator.type('abc1');
    await EmailLocator.type('abc1@gmail.com');
    await PasswordLocator.type('12345678');
    await PolicyCheckboxLocator.click();
    await ReceiveEmailCheckboxLocator.click();
    await RegisterButtonLocator.click();
});

test('User Register Test (Email Already Registered)', async ({browser})=>
{
    //Browser Setup
    const context = await browser.newContext();
    const page = await context.newPage();
    
    //#region Locators

    //Register Page
    const FullNameLocator = page.locator('#name');
    const EmailLocator = page.locator('#email-address');
    const PasswordLocator = page.locator('#password');
    const PolicyCheckboxLocator = page.locator('span.checkmark').first();
    const ReceiveEmailCheckboxLocator = page.locator('span.checkmark').last();
    const RegisterButtonLocator = page.locator("//button[@type='submit']");

    const UserAlreadyRegisteredErrorLocator = page.locator("//div[@class='bg-red-400 py-3 px-5 text-white']");
   
    //#endregion
    
    //Open URL
    await page.goto("https://jhely.com/bo/auth/register/individual?redirectTo=/bo");

    await FullNameLocator.type('abc');
    await EmailLocator.type('abc@gmail.com');
    await PasswordLocator.type('12345678');
    await PolicyCheckboxLocator.click();
    await ReceiveEmailCheckboxLocator.click();
    await RegisterButtonLocator.click();
    //Assertion
    await expect(UserAlreadyRegisteredErrorLocator).toContainText("Correo electrónico ya registrado");
});

test('User Register Test (Without Full Name)', async ({browser})=>
{
    //Browser Setup
    const context = await browser.newContext();
    const page = await context.newPage();
    
    //#region Locators

    //Register Page
    const FullNameLocator = page.locator('#name');
    const EmailLocator = page.locator('#email-address');
    const PasswordLocator = page.locator('#password');
    const PolicyCheckboxLocator = page.locator('span.checkmark').first();
    const ReceiveEmailCheckboxLocator = page.locator('span.checkmark').last();
    const RegisterButtonLocator = page.locator("//button[@type='submit']");

    const FullNameErrorLocator = page.locator("//div[@class='text-xs font-light text-red-500 mt-1 ml-4']").first();
   
    //#endregion
    
    //Open URL
    await page.goto("https://jhely.com/bo/auth/register/individual?redirectTo=/bo");

    await FullNameLocator.type('');
    await EmailLocator.type('abc@gmail.com');
    await PasswordLocator.type('12345678');
    await PolicyCheckboxLocator.click();
    await ReceiveEmailCheckboxLocator.click();
    await RegisterButtonLocator.click();
    //Assertion
    await expect(FullNameErrorLocator).toContainText("Se requiere el nombre");
});

test('User Register Test (Without Email)', async ({browser})=>
{
    //Browser Setup
    const context = await browser.newContext();
    const page = await context.newPage();
    
    //#region Locators

    //Register Page
    const FullNameLocator = page.locator('#name');
    const EmailLocator = page.locator('#email-address');
    const PasswordLocator = page.locator('#password');
    const PolicyCheckboxLocator = page.locator('span.checkmark').first();
    const ReceiveEmailCheckboxLocator = page.locator('span.checkmark').last();
    const RegisterButtonLocator = page.locator("//button[@type='submit']");

    const EmailErrorLocator = page.locator("//div[@class='text-xs font-light text-red-500 mt-1 ml-4']").first();
   
    //#endregion
    
    //Open URL
    await page.goto("https://jhely.com/bo/auth/register/individual?redirectTo=/bo");

    await FullNameLocator.type('abc');
    await EmailLocator.type('');
    await PasswordLocator.type('12345678');
    await PolicyCheckboxLocator.click();
    await ReceiveEmailCheckboxLocator.click();
    await RegisterButtonLocator.click();
    await page.waitForTimeout(1000);
    //Assertion
    await expect(EmailErrorLocator).toContainText("Se requiere Dirección de correo electrónico");
});

test('User Register Test (Without Password)', async ({browser})=>
{
    //Browser Setup
    const context = await browser.newContext();
    const page = await context.newPage();
    
    //#region Locators

    //Register Page
    const FullNameLocator = page.locator('#name');
    const EmailLocator = page.locator('#email-address');
    const PasswordLocator = page.locator('#password');
    const PolicyCheckboxLocator = page.locator('span.checkmark').first();
    const ReceiveEmailCheckboxLocator = page.locator('span.checkmark').last();
    const RegisterButtonLocator = page.locator("//button[@type='submit']");

    const PasswordErrorLocator = page.locator("//div[@class='text-xs font-light text-red-500 mt-1 ml-4']").first();
   
    //#endregion
    
    //Open URL
    await page.goto("https://jhely.com/bo/auth/register/individual?redirectTo=/bo");

    await FullNameLocator.type('abc');
    await EmailLocator.type('abc@gmail.com');
    await PasswordLocator.type('');
    await PolicyCheckboxLocator.click();
    await ReceiveEmailCheckboxLocator.click();
    await RegisterButtonLocator.click();

    await expect(PasswordErrorLocator).toContainText("Se requiere contraseña");
});

test('User Register Test (Without Checking Policy Checkbox)', async ({browser})=>
{
    //Browser Setup
    const context = await browser.newContext();
    const page = await context.newPage();
    
    //#region Locators

    //Register Page
    const FullNameLocator = page.locator('#name');
    const EmailLocator = page.locator('#email-address');
    const PasswordLocator = page.locator('#password');
    const ReceiveEmailCheckboxLocator = page.locator('span.checkmark').last();
    const RegisterButtonLocator = page.locator("//button[@type='submit']");

    const PolicyCheckboxErrorLocator = page.locator("//div[@class='text-xs font-light text-red-500 mt-1 ml-4']").first();
   
    //#endregion
    
    //Open URL
    await page.goto("https://jhely.com/bo/auth/register/individual?redirectTo=/bo");

    await FullNameLocator.type('abc');
    await EmailLocator.type('abc@gmail.com');
    await PasswordLocator.type('12345678');
    await ReceiveEmailCheckboxLocator.click();
    await RegisterButtonLocator.click();

    await expect(PolicyCheckboxErrorLocator).toContainText("The terms and conditions must be accepted.");
});
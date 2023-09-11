class findElements {
    async validaElements(lista){
        const actualList = []

        // find multiple elements $$
        const textList = await $$('android.widget.TextView');
        
        // loop through them
        for (const element of textList) {
            actualList.push(await element.getText());
        }

        // assert the list
        await expect(actualList).toEqual(lista)
    }
    get botaoApp() {return $('~App')}
    get Fragment() {return $('~Fragment')}
    get botaoActivity() {return $('~Activity')}
    get botaoSecure() {return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')}
    get SecureDialog() {return $('~Secure Dialog')}
    get SecureSurfaceView() {return $('~Secure Surface View')}
    get SecureWindow() {return $('~Secure Window')}
}

module.exports = new findElements();
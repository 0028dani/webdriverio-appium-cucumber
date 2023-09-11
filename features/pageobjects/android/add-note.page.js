class AddNoteScreen {
    get threepoints() {return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn3"]')}
    get Settings() {return $('//*[@text="Settings"]')}
    get defaultColor() {return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/color"]')}
    get colorPurple() {return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/txt6"]')}
    get back() {return $('~Navigate up')}
    get skipBtn() {return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')}
    get addNoteTxt() {return $('//*[@text="Add note"]')}
    get textOption () {return $('//*[@text="Text"]')}
    get textEditing() {return $('//*[@text="Editing"]')}
    get noteHeading() {return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')}
    get noteBody() {return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')}
    get editBtn() {return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')}
    get viewNote() {return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')}

    async saveNote() {
        await driver.back()
        await driver.back()
    }

    async restart(){
        await driver.launchApp()   
    }

}

module.exports = new AddNoteScreen();

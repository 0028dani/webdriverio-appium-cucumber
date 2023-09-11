const { Given, When, Then } = require('@wdio/cucumber-framework');

const AddNoteScreen = require('../../pageobjects/android/add-note.page');

Given(/^que pulo o tutorial$/, async () => {
        await AddNoteScreen.skipBtn.click();
});

When(/^altero a nota padrão de cor$/, async () => {
        await AddNoteScreen.threepoints.click();
        await AddNoteScreen.Settings.click();
        await AddNoteScreen.defaultColor.click();
        await AddNoteScreen.colorPurple.click();
        await AddNoteScreen.back.click();
        await expect((AddNoteScreen.addNoteTxt)).toBeDisplayed();
});

When(/^adicione o titulo (.*) da nota com conteudo (.*)$/, async (titulo, conteudo) => {
        await (AddNoteScreen.addNoteTxt).click();
        await (AddNoteScreen.textOption).click();
        await expect((AddNoteScreen.textEditing)).toBeDisplayed();

        // add note title
        await (AddNoteScreen.noteHeading).addValue(titulo)

        // add note body
        await (AddNoteScreen.noteBody).addValue(conteudo.replaceAll(', ', '\n'))
});

When(/^salvo a nota$/, async () => {
        await AddNoteScreen.saveNote()
});


Then(/^Terei uma nota salva com conteudo salvo (.*)$/, async (conteudoSalvo) => {
        await expect((AddNoteScreen.editBtn)).toBeDisplayed();
        await expect((AddNoteScreen.viewNote)).toHaveText(conteudoSalvo.replaceAll(', ', '\n'));
        await AddNoteScreen.restart() 
});


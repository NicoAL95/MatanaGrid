const getEl = id => document.getElementById(id)

const iFrame = getEl('iFrame').contentWindow.document
const htmlTextArea = getEl('htmlTextarea')
const cssTextArea = getEl('cssTextarea')
const jsTextArea = getEl('jsTextarea')

function evaluateCode() {
    iFrame.open()
    iFrame.writeln(
        htmlTextArea.value +
        '<style>' +
        cssTextArea.value +
        '</style>' +
        '<script>' +
        jsTextArea.value +
        '</script>'
    )
    iFrame.close()
}
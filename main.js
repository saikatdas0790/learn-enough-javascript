let Phrase = require("mhartl-palindrome");

function palindromeTester() {
    event.preventDefault();
    let phrase = new Phrase(event.target.phrase.value);
    let palindromeResult = document.querySelector("#palindromeResult");

    if (phrase.palindrome()) {
        palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
    } else {
        palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let tester = document.querySelector("#palindromeTester");
    tester.addEventListener("submit", () => {palindromeTester(event)});
});
const inputParagraph = document.querySelector(".input");
const outputParagraph = document.querySelector(".output");

let message1 = "";
let content = ""
let length = 0;
const text1 = "The fat cat run down the street.\n It was searching for a run to eat.";
let newText = text1


inputParagraph.textContent = newText;
inputParagraph.style.whiteSpace = 'pre-wrap';

// the g means global
const regex1 = /cat/g;
message1 = regex1.exec(newText);
length = newText.indexOf(message1);
content = `${message1}\t\t at character: ${length}`;
outputParagraph.textContent = content;
outputParagraph.style.whiteSpace = 'pre-wrap';

// the + means one or more of that character
const regex2 = /e+/g;
message1 = regex2.exec(newText) !== null ? regex2.exec(newText) : newText.includes(regex2);
length = newText.indexOf(message1);
content = `${content}
${message1}\t\t at character: ${length}`;
outputParagraph.textContent = content;

// the ? means optional
const regex3 = /e+?a/g;
message1 = regex3.exec(newText) !== null ? regex3.exec(newText) : newText.includes(regex3);
length = newText.indexOf(message1);
content = `${content}
${message1}\t\t at character: ${length}`;
outputParagraph.textContent = content;

// the * means it matches all there is to it. Like re* it matches with the whole r, e, re.
const regex4 = /re*/g;
message1 = regex4.exec(newText) !== null ? regex4.exec(newText) : newText.includes(regex4);
length = newText.indexOf(message1);
content = `${content}
${message1}\t\t at character: ${length}`;
outputParagraph.textContent = content;

// the . means any letter or space but not a newline. Like .at it can mean cat, fat, mat and so on.
const regex5 = /.at/g;
message1 = regex5.exec(newText) !== null ? regex5.exec(newText) : newText.includes(regex5);
length = newText.indexOf(message1);
content = `${content}
${message1}\t\t at character: ${length}`;
outputParagraph.textContent = content;

// the \ is an escape character for special characters. Like \. this to include the period in the string.
const regex6 = /......\./g;
message1 = regex6.exec(newText) !== null ? regex6.exec(newText) : newText.includes(regex6);
length = newText.indexOf(message1);
content = `${content}
${message1}\t\t at character: ${length}`;
outputParagraph.textContent = content;

// \w = word \W = not a word \s = space \S = not a space
// \w{min, max}
const regex7 = /\w{4,6}/g;
message1 = regex7.exec(newText) !== null ? regex7.exec(newText) : newText.includes(regex7);
length = newText.indexOf(message1);
content = `${content}
${message1}\t\t at character: ${length}`;
outputParagraph.textContent = content;

// the [] means you can choose any letter within this bracket. You can do range like [a-zA-Z], [0-9]
const regex8 = /[fc]at/g;
message1 = regex8.exec(newText) !== null ? regex8.exec(newText) : newText.includes(regex8);
length = newText.indexOf(message1);
content = `${content}
${message1}\t\t at character: ${length}`;
outputParagraph.textContent = content;

// the () means anything inside the parenthesis can be their own group.
// th e | means anything between the left or right of the OR symbol. Like (t|T), it means it can use any of t and T
const regex9 = /(t|T)he/g;
message1 = regex9.exec(newText) !== null ? regex9.exec(newText) : newText.includes(regex9);
length = newText.indexOf(message1);
content = `${content}
${message1}\t\t at character: ${length}`;
outputParagraph.textContent = content;

const regex10 = /(t|e|r){2,3}/g;
message1 = regex10.exec(newText) !== null ? regex10.exec(newText) : newText.includes(regex10);
length = newText.indexOf(message1);
content = `${content}
${message1}\t\t at character: ${length}`;
outputParagraph.textContent = content;

// the ^ means the beginning of the line.
// the m in /[a-z]/m means multiline
/*
const regex11 = /^I/gm;
message1 = regex11.exec(newText) !== null ? regex11.exec(newText) : newText.includes(regex11);
length = newText.indexOf(message1);
content = `${content}
${message1} at character: ${length}`;
outputParagraph.textContent = content;
*/

// the $ means match the end of our statement. Like \.$ means it looking to period to match in your statement.
const regex12 = /\.$/g;
message1 = regex12.exec(newText) !== null ? regex12.exec(newText) : newText.includes(regex12);
length = newText.indexOf(message1);
content = `${content}
${message1}\t\t at character: ${length}`;
outputParagraph.textContent = content;

// the ?<= means positive look behind. Like (?<=[tT]he). means in "The cat ", the space between The and cat is the answer.
const regex13 = /(?<=[tT]he)./g;
message1 = regex13.exec(newText) !== null ? regex13.exec(newText) : newText.includes(regex13);
length = newText.indexOf(message1);
content = `${content}
${message1}\t\t at character: ${length}`;
outputParagraph.textContent = content;

// the ?<! means negative look behind. Like (?<![tT]he). in "The cat", it matches the word
const regex14 = /(?<![tT]he)./g;
message1 = regex14.exec(newText) !== null ? regex14.exec(newText) : newText.includes(regex14);
length = newText.indexOf(message1);
content = `${content}
${message1}\t\t at character: ${length}`;
outputParagraph.textContent = content;

// the ?= means look ahead. The opposite of it is ?! means to look for every word except for the target.
const regex15 = /.(?=at)/g;
message1 = regex15.exec(newText) !== null ? regex15.exec(newText) : newText.includes(regex15);
length = newText.indexOf(message1);
content = `${content}
${message1}\t\t at character: ${length}`;
outputParagraph.textContent = content;

const regex16 = /.(?!at)/g;
message1 = regex16.exec(newText) !== null ? regex16.exec(newText) : newText.includes(regex16);
length = newText.indexOf(message1);
content = `${content}
${message1}\t\t at character: ${length}`;
outputParagraph.textContent = content;


// 1. the \d means digit
// 2. the ?<areacode> is the name of the group of the 3 digit number.
let num1 = "+63-123-456-7890";

const regex17 = /((\+63)[ -])?(?<areacode>\d{3})[ -]?(\d{3})[ -]?(\d{4})/g;
message1 = regex17.exec(num1)
content = `${content}\t\t
${message1}`;
outputParagraph.textContent = content;


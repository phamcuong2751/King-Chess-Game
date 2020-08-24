// var imported = document.createElement('script');
// imported.src = './js/LoadBroad/declareVariable.js';
// document.head.appendChild(imported);
const kingWhite = '<p>♕</p>'
const queenWhite = '<p>♔</p>'
const bishopWhite = '<p>♗</p>'
const castleWhite = '<p>♖</p>'
const knightWhite = '<p>♘</p>'
const pawnWhite = '<p>♙</p>'

const kingBlack = '<p>♛</p>'
const queenBlack = '<p>♚</p>'
const bishopBlack = '<p>♝</p>'
const castleBlack = '<p>♜</p>'
const knightBlack = '<p>♞</p>'
const pawnBlack = '<p>♟</p>'

const posTop = '0'
const posBot = '7'
const posTopPawn = '1'
const posBotPawn = '6'

var chessboard = document.getElementById("chessboard");
var indexAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
var content = '';
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        if (i % 2 == 0) {
            if (j % 2 == 0) content += '<div class="block-white" onmouseout="mouseOut(this)" onmouseover="hoverEvent(this)" onclick="inindexSqare(this)" id="' + i + indexAlphabet[j] + '"></div>';
            else content += '<div class="block-black" onmouseout="mouseOut(this)" onmouseover="hoverEvent(this)" onclick="inindexSqare(this)" id="' + i + indexAlphabet[j] + '"></div>';
        } else {
            if (j % 2 == 0) content += '<div class="block-black" onmouseout="mouseOut(this)" onmouseover="hoverEvent(this)" onclick="inindexSqare(this)" id="' + i + indexAlphabet[j] + '"></div>';
            else content += '<div class="block-white" onmouseout="mouseOut(this)" onmouseover="hoverEvent(this)" onclick="inindexSqare(this)" id="' + i + indexAlphabet[j] + '"></div>';
        }
    }
}
chessboard.innerHTML = content;

function inindexSqare(idElement) {
    return idElement.id
}


// Place the pieces white on the board
function placePieces(nameChessman, idChessman) {
    var indexChessman = document.getElementById(idChessman.toString());
    var place = nameChessman.toString();
    indexChessman.innerHTML = place;
}

// Place the pieces pawn white on the board
for (let i = 0; i < 8; i++) {
    placePieces(pawnWhite, posBotPawn + indexAlphabet[i])
}
for (let i = 0; i < 8; i++) {
    if (i == 0 || i == 7) { placePieces(castleWhite, posBot + indexAlphabet[i]) }
    else if (i == 1 || i == 6) { placePieces(knightWhite, posBot + indexAlphabet[i]) }
    else if (i == 2 || i == 5) { placePieces(bishopWhite, posBot + indexAlphabet[i]) }
    else {
        placePieces(kingWhite, posBot + indexAlphabet[4])
        placePieces(queenWhite, posBot + indexAlphabet[3])
    }
}

// Place the pieces pawn black on the board
for (let i = 0; i < 8; i++) {
    placePieces(pawnBlack, posTopPawn + indexAlphabet[i])
}
for (let i = 0; i < 8; i++) {
    if (i == 0 || i == 7) { placePieces(castleBlack, posTop + indexAlphabet[i]) }
    else if (i == 1 || i == 6) { placePieces(knightBlack, posTop + indexAlphabet[i]) }
    else if (i == 2 || i == 5) { placePieces(bishopBlack, posTop + indexAlphabet[i]) }
    else {
        placePieces(kingBlack, posTop + indexAlphabet[4])
        placePieces(queenBlack, posTop + indexAlphabet[3])
    }
}

//fucntion change color when mouse over a square on broad
function hoverEvent(index) {
    // if (indexChessman.id.toString() == inindexSqare(index).toString()) {
    //     for (let i = 0; i < 8; i++) {
    //         for (let j = 0; j < 8; j++) {
    //             let temp = '';
    //             if (i == 0) { temp += i + indexAlphabet[j] }
    //             else { temp += i + 'a' }
    //             var newSquaresOne = document.getElementById(temp);
    //             newSquaresOne.style.background = '#ebdc87';
    //         }
    //     }
    // }
}
//fucntion change color when mouse out a square on broad
function mouseOut(index) {
    // if (indexChessman.id.toString() == inindexSqare(index).toString()) {
    //     for (let i = 0; i < 8; i++) {
    //         for (let j = 0; j < 8; j++) {
    //             let temp = '';
    //             if (i == 0) { temp += i + indexAlphabet[j] }
    //             else { temp += i + 'a' }
    //             var newSquaresOne = document.getElementById(temp);
    //             if (i == 0) {
    //                 if (j % 2 == 0) { newSquaresOne.style.background = 'white' }
    //                 else { newSquaresOne.style.background = '#b0cac7' }
    //             }
    //             else {
    //                 if (i % 2 == 0) { newSquaresOne.style.background = 'white' }
    //                 else { newSquaresOne.style.background = '#b0cac7' }
    //             }
    //         }
    //     }
    // }
}


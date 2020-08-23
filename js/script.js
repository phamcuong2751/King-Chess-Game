var chessmansBlack = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜', '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'];
var chessmansWhite = ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'];
var chessboard = document.getElementById("chessboard");
var indexAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
var content = '';
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        if (i % 2 == 0) {
            if (j % 2 == 0) content += '<div class="block-white" onclick="indexFunction(this)" id="' + indexAlphabet[i] + j + '"></div>';
            else content += '<div class="block-black" onclick="indexFunction(this)" id="' + indexAlphabet[i] + j + '"></div>';
        } else {
            if (j % 2 == 0) content += '<div class="block-black" onclick="indexFunction(this)" id="' + indexAlphabet[i] + j + '"></div>';
            else content += '<div class="block-white" onclick="indexFunction(this)" id="' + indexAlphabet[i] + j + '"></div>';
        }
        // if (i < 2) {
        //     content = content + chessmansBlack[(i * 8) + j] + '</div>';
        // } else if (i >= 6) {
        //     content = content + chessmansWhite[(i - 6) * 8 + j] + '</div>';
        // } else {
        //     content += '</div>';
        // }
    }
}
chessboard.innerHTML = content;    

function indexFunction(idElement)
{
    var fakeID = idElement.id;
    console.log(this.fakeID)
}
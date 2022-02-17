const wordSearch = (letters, word) => {

    let joined = "";
    let vertJoin = "";
    let vertical = [];
    
    for (let i = 0; i < letters[0].length; i++) {
        for (let j = 0; j < letters.length; j++) {
            vertical.push(letters[j][i]);
        }
        vertJoin = vertical.join('');
        if (vertJoin.includes(word)) {
            return true;
        } else vertMatch = false;

        vertical = [];
    }
    for (let k = 0; k < letters.length; k++) {

        joined = letters[k].join("");
        if (joined.includes(word)) {
            return true;

        } else horiMatch = false;


    }
    if (vertMatch === false && horiMatch === false) {
        return false;
    }
};

module.exports = wordSearch;

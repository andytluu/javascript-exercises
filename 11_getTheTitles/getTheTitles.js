const getTheTitles = function(obj) {
    //let arr = [];
    const arr = obj.map((book) => {
        return book.title;
    });

    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;

const removeFromArray = function(array, ...args) {
    args.forEach((element) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                array.splice(i, 1);
            }
        }
    });

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

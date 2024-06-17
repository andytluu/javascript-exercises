const findTheOldest = function(obj) {
    const oldest = obj.map((person) => {
        let compare = {};
        let age = 0;
        if(!("yearOfDeath" in person)){
            let today = new Date();
            let currentYear = today.getFullYear();
            age = currentYear - person.yearOfBirth;
        }
        else{
            age = person.yearOfDeath - person.yearOfBirth;
        }
        compare["name"] = person.name;
        compare["year"] = age;
        return compare;
    });

    oldest.sort(function (a,b) {
        return a.year - b.year;
    });

    old = oldest[oldest.length - 1];
    return old;
};

// Do not edit below this line
module.exports = findTheOldest;

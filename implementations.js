// Array methods

Array.prototype.push = function(elem) {
    arr[arr.length] = elem;
    return arr.length;
}

Array.prototype.pop = function() {
    if (this.length == 0) {
        return null;
    }
    let lastElem = this[this.length - 1];
    this.length--;

    return lastElem;
}

Array.prototype.shift = function(arr) {
    if (arr.length == 0) {
        return null;
    }

    let firstElem = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        arr[i - 1] = arr[i]
    }
    arr.length--;

    return firstElem;
}

Array.prototype.unshift = function(arr, elem) {
    for (let i = arr.length; i > 0; --i) {
        arr[i] = arr[i - 1];
    }

    arr[0] = elem;
}

Array.prototype.concat = function(arr) {
    let result = [];

    for (let i = 0; i < this.length; ++i) {
        result[i] = this[i];
    }

    for (let i = 0; i < arr.length; ++i) {
        result[i + this.length] = arr[i];
    }

    return result;
}

Array.prototype.join = function(delimiter) {
    let res = "";
    for (let i = 0; i < this.length; ++i) {
        res += this[i];
        if (i < this.length - 1) {
            res += delimiter;
        }
    }

    return res;
}

Array.prototype.map = function(callback) {
    let newArr = [];
    for (let i = 0; i < this.length; ++i) {
        newArr[i] = callback(this[i], i);
    }

    return newArr;
}

Array.prototype.filter = function(callback) {
    let newArr = [];
    for (let i = 0; i < this.length; ++i) {
        if (callback(this[i], i)) {
            newArr[newArr.length] = this[i];
        }
    }

    return newArr;
}

Array.prototype.reduce = function(callback, aggr) {
    let sum = aggr ? aggr : 0;
    for (let i = 0; i < this.length; ++i) {
        sum = callback(aggr, sum);
    }

    return sum;
}

Array.prototype.find = function(elem) {
    let res = null;

    for (let i = 0; i < this.length; ++i) {
        if (this[i] == elem) {
            res = this[i];
            break;
        }
    }

    return res;
}

Array.prototype.some = function (callback) {
    for (let i = 0; i < this.length; ++i) {
        if (callback(this[i])) {
            return true;
        }
    }

    return false;
}

Array.prototype.every = function(callback) {
    for (let i = 0; i < this.length; ++i) {
        if (!callback(this[i])) {
            return false;
        }
    }

    return true;
}

Array.prototype.flat = function(level) {
    level = level || 1;
    let newArr = [];

    for (let i = 0; i < this.length; ++i) {
        if (Array.isArray(this[i])) {
            let flattened = flat(level - 1);
            for (let j = 0; i < flattened.length; ++j) {
                newArr[newArr.length] = flattened[j];    
            }
        } else {
            newArr[newArr.length] = this.i;
        }
    }

    return newArr;
}

Array.prototype.indexOf = function(elem) {
    for (let i = 0; i< this.length; ++i) {
        if (this[i] == elem) {
            return i;
        }
    }

    return -1;
}

Array.prototype.includes = function(elem) {
    for (let i = 0; i < this.length; ++i) {
        if (this[i] == elem) {
            return true;
        }
    }

    return false;
}

// String methods

String.prototype.split = function(delimiter) {
    let newArr = [];
    let str = '';
    for (let i = 0; i < this.length; i++) {
        if (this[i] === delimiter) {
            newArr[newArr.length] = str;
            str = '';
        } else {
            str += this[i];
        }
    }
    newArr[newArr.length] = str;
    return newArr;
}

String.prototype.substring = function(start, end) {
    end = end || this.length;
    let res = "";

    for (let i = start; i < end; ++i) {
        res += this[i];
    }

    return res;
}

String.prototype.slice = function(start, end) {
    return this.substring(start, end);
}

String.prototype.replace = function(search, replacement) {
    let res = "";

    for (let i = 0; i < this.length; ++i) {
        if (this.substring(i, i + search.length) === search) {
            res += replacement;
            i += search.length - 1;
        } else {
            res += this[i]
        }
    }

    return res;
}

String.prototype.indexOf = function(search) {
    for (let i = 0; i < this.length; ++i) {
        if (this.substring(i, i+search.length) === search) {
            return i;
        }
    }

    return -1;
}

String.prototype.includes = function(value) {
    return this.indexOf(value) != -1;
}

String.prototype.trim = function() {
    let i = 0, j = this.length - 1;

    while (this[i] == " " && i < j) {
        i++;
    }

    while (this[j] == "" && j >= i) {
        j--;
    }

    return this.substring(j, j + 1);
}

String.prototype.repeat = function(str, count) {
    let res = "";

    for (let i = 0; i < count; ++i) {
        res += str;
    }

    return res;
}

String.prototype.charAt = function(index) {
    return this[index];
}

String.prototype.toUpperCase = function() {
    let res = "";

    for (let i = 0; i < this.length; ++i) {
        let char = this.charCodeAt(i);
        if (char >= 97 && char <= 122) {
            res += String.fromCharCode(char - 32);
        } else {
            res += this[i];
        }
    }

    return res;
} 
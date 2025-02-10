function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function div(x, y) {
    if (y == 0) {
        return "Undefined";
    }
    return x / y;
}

function rem(x, y) {
    if (y == 0) {
        return "Undefined";
    }
    return x % y;
}

function output(x, y, res, op) {
    document.getElementById("res").innerHTML = `The ${op} of ${x} and ${y} is ${res}.`
}
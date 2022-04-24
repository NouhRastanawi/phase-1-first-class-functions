const receivesAFunction = (callback => callback());

const returnsANamedFunction = function() {
    let name = function named(){
    }
    return name;
}

const returnsAnAnonymousFunction = function() {
    return (name) => name + 1;
}
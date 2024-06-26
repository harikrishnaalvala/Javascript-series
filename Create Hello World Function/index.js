/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        const name="Hello World"
        return name
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

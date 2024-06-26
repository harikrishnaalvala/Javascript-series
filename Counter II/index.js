/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let presentValue=init;

    function increment(){
        return ++presentValue;
    }
    function reset(){
        return (presentValue=init);
    }
    function decrement(){
        return --presentValue;
    }
return {increment, decrement,reset}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let cv = init;
    return{
        increment: function(){
            cv++;
            return cv;
        },
        decrement: function(){
            cv--;
            return cv;
        },
        reset: function(){
            cv=init;
            return cv;
        },
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

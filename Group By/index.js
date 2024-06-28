/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped,item)=>{
        const k=fn(item);
        if (!grouped[k]){
            grouped[k]=[];
        }
        grouped[k].push(item);
        return grouped
    },{})
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

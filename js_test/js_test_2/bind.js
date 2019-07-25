//implement js bind function

Function.prototype.myBind = function(func, obj){
    return function() {
        return func.apply(obj, arguments);
    }
};
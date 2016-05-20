/**
 * Created by ssunflower on 2016/5/20
 */

(function (){

    var MutilKeyMap = function(){
        this.vector = {};
    };

    MutilKeyMap.prototype.set=function(){
        if (arguments.length < 2 )return;
        var keys = [];
        for (var i=0;i<arguments.length-1;i++){
            keys.push(arguments[i])
        }
        this.vector[keys.sort()] = arguments[arguments.length-1]
    };

    MutilKeyMap.prototype.get=function(){
        var keys = [];
        for (var i=0;i<arguments.length;i++){
            keys.push(arguments[i])
        }
        return this.vector[keys.sort()];
    };

    MutilKeyMap.prototype.mapOtherKeys=function(key){
        var keys = [];
        for (var k in this.vector){
            var k_array = k.split(',')
            for (var i=0;i<k_array.length;i++){
                if (key == k_array[i]){
                    for (var j=0;j<k_array.length;j++){
                        if (key !== k_array[j]){
                            keys.push(k_array[j])
                        }
                    }
                    break;
                }
            }
        }
        return keys;
    };

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = MutilKeyMap;
    else
        window.MutilKeyMap = MutilKeyMap;
})();


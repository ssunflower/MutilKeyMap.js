# usages: #
 
    var m = new MutilKeyMap()
    
    m.set('red','37',8001)
    
    m.set('red','38',8002)
    
    m.set('black','37',8003)
    
    m.set('black','39',8004)
    
    m.get('red','37')
    8001
    m.get('37','red')
    8001
    m.mapOtherKeys('red')
    ["37", "38"]
    m.mapOtherKeys('37')
    ["red", "black"]

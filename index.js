function clone (obj) {
    
    var clon,
        hasOwn = Object.prototype.hasOwnProperty;
    
    if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
            clon = [];
            
            for (var i = 0; i < obj.length; i++) {
                if (typeof obj[i] === 'object') { 
                    clon.push( clone(obj[i]));
                } else {
                    clon.push(obj[i]);
                };
            };
            
        } else {
            clon = {};
            for (var prop in obj) {
                  if( hasOwn.call(obj, prop ) ) {
                      if (typeof obj[prop] === 'object') {
                          clon[prop] = clone(obj[prop]);
                      } else {
                          clon[prop] = obj[prop];
                      };
                  }; 
            };
        };
        
       return clon;
        
    } else {
        return obj;
    }
}

module.exports.deep = clone;

module.exports.withJSON = function (obj) {
    return JSON.parse(JSON.stringify(obj));
}
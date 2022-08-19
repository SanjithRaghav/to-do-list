



var engDate=()=>{
    var date=new Date();
    var options={'weekday':'long','day':'numeric','month':'long'};
    return date.toLocaleDateString('en-US',options);
}
exports.engDate=engDate;


var hindDate=()=>{
    var date=new Date();
    var options={'weekday':'long','day':'numeric','month':'long'};
    return date.toLocaleDateString('hi-IN',options);
}
exports.hindDate=hindDate;
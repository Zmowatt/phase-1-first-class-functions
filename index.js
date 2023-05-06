function receivesAFunction (iAmTired){
    return iAmTired();
}
iAmTired(function () {return 'Time for bed!'});



function returnsANamedFunction (){
    return function riseAndShine(){ 
    }
}

function returnsAnAnonymousFunction (){
    return function(){

    }
}

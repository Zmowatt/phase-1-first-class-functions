function receivesAFunction(testTime){
    return testTime()
};
function testTime(){
    console.log = 'Time to Study!'
};

function returnsANamedFunction(){
    return function partyTime(){
    }
};

function returnsAnAnonymousFunction(){
    return function(){

    }
}

function shout(string) {
    return string.toUpperCase() ;
}
function whisper(string) {
    return string.toLowerCase() ;
}
function logShout(string) {
    console.log(string.toUpperCase()) ;
}
function logWhisper(string) {
    console.log(string.toLowerCase()) ;
}
function sayHiToHeadphonedRoommate(string) {
 var iCantHear = "I can't hear you!"

    if(string.toLowerCase) {
        return iCantHear;
    }
    else if(string.toUpperCase() === HELLO){
        return "YES INDEED";
    }
    if(string === `let\'s have dinner together!`){
        return "I would love to";
    }

}

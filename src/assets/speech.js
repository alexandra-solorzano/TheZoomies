const speechArray = {
    bronson : ["Do you ever think about tomorrow?","Michael", "ernard", "LMAO","AH","Not Bad", "number 1, number 1, number 1", "you love that", "I love you papa john","good brain path","P.O.T", "I like routers"],
    alex2 : ["bronson", "stop", "*eye glare*", "absolutely not", "totally","remember in the office when...", "putaneska","dope", "I hate bronson", "hurtful", "bronson's bulling me"],
    alex : ["tabulation","Badge pack", "I'm getting the fuck boi","I'm swamped with rewards", "I'm gonna run through the test plan", "I like cranes", "Oh so I'm just talking to myself", "Stop being a smartass","Great Collaboration", "okay boss"],
    ernest : ["*excitement intensifies*","nyet", "that's what she said", "EH!", "bless you", "no, actually *passionately*", "ok boomer","big brain","it really do be like that", "*pulls out meme*"],
    michael : ["mhm", "What movie is that from?","*sings*", "If you want recipe, I have a recipe ", "ummm...nooooo","Robbing peter to pay paul","*pulls up Betty White's nudes*", "I can eat whatever I want, as long as I don't go over my points...","sure"]
}
function getLength(name) {
  
        if(name == "bronson")
            return speechArray.bronson.length;
        if(name == "alex2")
            return speechArray.alex2.length;
        if(name == "alex")
            return speechArray.alex.length;
        if(name == "ernest")
            return speechArray.ernest.length;
        if(name =="micheal")
            return speechArray.michael.length;
}

function speak(speaker){
    switch(speaker){
      case "bronson":
        return speechArray.bronson[Math.floor(speechArray.bronson.length * Math.random())];
      case "alex2":
       return speechArray.alex2[Math.floor(speechArray.alex2.length * Math.random())];
      case "alex":
        return speechArray.alex[Math.floor(speechArray.alex.length * Math.random())];
      case "ernest":
        return speechArray.ernest[Math.floor(speechArray.ernest.length * Math.random())];
      case "michael":
        return speechArray.michael[Math.floor(speechArray.michael.length * Math.random())];
    }
}
export {speechArray, getLength, speak};
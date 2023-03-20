function shout(string) {
    return string.toUpperCase();
    // todo
  }
  function whisper(string) {
    return string.toLowerCase();
    // todo
  }
  function logShout(string) {
    return console.log(string.toUpperCase());
    // todo
  }
  function logWhisper(string) {
    return console.log(string.toLowerCase())
  }
  function sayHiToHeadphonedRoommate(string) {
    let low = 'I can\'t hear you!'
    let yes = "YES INDEED!"
    let dinner = 'I would love to!'
    if (string === string.toLowerCase())
    return low
    else if (string === string.toUpperCase())
    return yes
    else if (string === "Let's have dinner together!")
    return dinner
  }
  
//Had some trouble figuring this out, referenced this wesbos video a bit: https://github.com/wesbos/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/index-FINISHED.html

//Created a function to play the audio on an event (keydown)
function play(e) {

  //select audio elements on page based on key pressed
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //execute play function on audio selected
  audio.play();
}

//To select all html buttons on page, create an array selecting class .key.
//This I had trouble with. Are there other methods to select elements on a page and add them to an array?
const keys = Array.from(document.querySelectorAll('.key'));

//Loop through each element in the array, listen for the keydown action on keyboard, then execute play function
keys.forEach(key => document.addEventListener('keydown', play));


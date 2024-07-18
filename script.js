const pianoType = document.getElementById('selectBox');
// console.log(selectBox.value);

let folder = pianoType.value;

function changeFolder(){
    folder=pianoType.value;
    console.log(folder);
}

// function to play the sound
function playSound(key) {
    switch (key) {
        case 'C':
            var audio = new Audio(`${folder}/C.mp3`);
            audio.play();
            break;
        case 'C#':
            var audio = new Audio(`${folder}/Csharp.mp3`);
            audio.play();
            break;
        case 'D':
            var audio = new Audio(`${folder}/D.mp3`);
            audio.play();
            break;
        case 'D#':
            var audio = new Audio(`${folder}/Dsharp.mp3`);
            audio.play();
            break;
        case 'E':
            var audio = new Audio(`${folder}/E.mp3`);
            audio.play();
            break;
        case 'F':
            var audio = new Audio(`${folder}/F.mp3`);
            audio.play();
            break;
        case 'F#':
            var audio = new Audio(`${folder}/Fsharp.mp3`);
            audio.play();
            break;
        case 'G':
            var audio = new Audio(`${folder}/G.mp3`);
            audio.play();
            break;
        case 'G#':
            var audio = new Audio(`${folder}/Gsharp.mp3`);
            audio.play();
            break;
        case 'A':
            var audio = new Audio(`${folder}/A.mp3`);
            audio.play();
            break;
        case 'A#':
            var audio = new Audio(`${folder}/Asharp.mp3`);
            audio.play();
            break;
        case 'B':
            var audio = new Audio(`${folder}/B.mp3`);
            audio.play();
            break;
    
        default:
            break;
    }
}
// selecting all the keys
let keys = document.querySelectorAll('.keys');

// to add event listner on all keys when clicked
for (let i = 0; i < keys.length; i++) {
    
    keys[i].addEventListener('click', ()=>{
        playSound(keys[i].id);
        // console.log();
    });
}

// to play the sound on keyboard keys and animate the keys when the keydown is pressed

document.addEventListener('keydown',(e)=>{
    let key = e.key;
    let keyUppercase = key.toUpperCase();
    switch (keyUppercase) {
        case 'Z':
            // displaying the animation of keypress using w active
            document.getElementById('C').classList.add('wactive'); 
            setTimeout(() => {
                document.getElementById('C').classList.remove('wactive'); 
            }, 100);
            // displaying the animation of keypress using w active

            playSound('C')
            break;
        case 'S':
            document.getElementById('C#').classList.add('bactive'); 
            setTimeout(() => {
                document.getElementById('C#').classList.remove('bactive'); 
            }, 100);
            playSound('C#')
            break;
        case 'X':
            document.getElementById('D').classList.add('wactive'); 
            setTimeout(() => {
                document.getElementById('D').classList.remove('wactive'); 
            }, 100);
            playSound('D')
            break;
        case 'D':
            document.getElementById('D#').classList.add('bactive'); 
            setTimeout(() => {
                document.getElementById('D#').classList.remove('bactive'); 
            }, 100);
            playSound('D#')
            break;
        case 'C':
            document.getElementById('E').classList.add('wactive'); 
            setTimeout(() => {
                document.getElementById('E').classList.remove('wactive'); 
            }, 100);
            playSound('E')
            break;
        case 'V':
            document.getElementById('F').classList.add('wactive'); 
            setTimeout(() => {
                document.getElementById('F').classList.remove('wactive'); 
            }, 100);
            playSound('F')
            break;
        case 'G':
            document.getElementById('F#').classList.add('bactive'); 
            setTimeout(() => {
                document.getElementById('F#').classList.remove('bactive'); 
            }, 100);
            playSound('F#')
            break;
        case 'B':
            document.getElementById('G').classList.add('wactive'); 
            setTimeout(() => {
                document.getElementById('G').classList.remove('wactive'); 
            }, 100);
            playSound('G')
            break;
        case 'H':
            document.getElementById('G#').classList.add('bactive'); 
            setTimeout(() => {
                document.getElementById('G#').classList.remove('bactive'); 
            }, 100);
            playSound('G#')
            break;
        case 'N':
            document.getElementById('A').classList.add('wactive'); 
            setTimeout(() => {
                document.getElementById('A').classList.remove('wactive'); 
            }, 100);
            playSound('A')
            break;
        case 'J':
            document.getElementById('A#').classList.add('bactive'); 
            setTimeout(() => {
                document.getElementById('A#').classList.remove('bactive'); 
            }, 100);
            playSound('A#')
            break;
        case 'M':
            document.getElementById('B').classList.add('wactive'); 
            setTimeout(() => {
                document.getElementById('B').classList.remove('wactive'); 
            }, 100);
            playSound('B')
            break;
        
        default:
            break;
    }
});



// to animate the keys when the keydown is pressed

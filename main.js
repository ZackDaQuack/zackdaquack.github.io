// Enter
//const profilePage = document.getElementById("profile");
//profilePage.style.display = 'none';


// Profile click secret
const clickSound = new Audio('quack.mp3');
const profileImage = document.querySelector('.image-wrapper');
function playClickSound() {
    const newClickSound = new Audio('quack.mp3');
    newClickSound.play();
}
profileImage.addEventListener('click', function() {
    playClickSound();
});


// Username Copier
const username = document.querySelector('.username');
username.addEventListener('click', function() {
    navigator.clipboard.writeText("zackdaquack");
    username.innerHTML = "Copied to clipboard!";
    setTimeout(function() {
       username.innerHTML = "ZackDaQuack";
       username.classList.remove('transitioning');
    }, 2000); // 2000 milliseconds (2 seconds)
});

// Discord Notifier
const discord = document.querySelector('.fa-discord');
discord.addEventListener('click', function() {
    username.innerHTML = "➡️ ZackDaQuack ⬅️";
    setTimeout(function() {
       username.innerHTML = "ZackDaQuack";
    }, 3000);
});

// Arrow Notifier
const downarrow = document.querySelector('.down-arrow');
downarrow.addEventListener('click', function() {
    username.innerHTML = "Dosn't work yet lol";
    setTimeout(function() {
       username.innerHTML = "ZackDaQuack";
    }, 1500);
});


// Page scroller
//function scrollDownBy100() {
    //const viewportHeight = window.innerHeight;
    //window.scrollBy(0, viewportHeight);
//}



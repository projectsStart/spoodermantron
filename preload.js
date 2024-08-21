document.addEventListener("DOMContentLoaded", function () {
    var thunderGif = document.querySelector('.thunder-gif');
    var thunderGif2 = document.querySelector('.thunder-gif2');

    var thunderGifSrc = './images/thunder.gif';

    var delayTime = 1000;

    function changeThunderGif() {
        thunderGif.src = thunderGifSrc;
        thunderGif2.src = thunderGifSrc;

        setTimeout(function () {
            thunderGif.src = '';
            thunderGif2.src = '';
        }, delayTime);
    }

    changeThunderGif();

    setInterval(changeThunderGif, delayTime * 2);
});

var textContainer = document.getElementById('textContainer');
var phrases = ['In this community, individuals from different walks of life came together, united by their shared passion for Bitcoin. They recognized the need to stand up against the actions of centralized authorities and regulatory bodies, such as the SEC (Securities and Exchange Commission), that sought to impose restrictions and hinder the growth of cryptocurrencies...',
    'Together, they formed a tight-knit community that believed in the fundamental principles of Bitcoin: transparency, privacy, and financial sovereignty. They understood that Bitcoin was more than just a digital currency; it was a symbol of freedom and empowerment...',
    'As the community grew, so did their determination to spread the message of Bitcoin potential to the world. They organized meetups, conferences, and educational initiatives to educate others about the benefits of decentralized finance and the importance of taking control of one`s financial future...',
    'Their efforts did not go unnoticed. People from all walks of life began to join the movement, realizing the power that Bitcoin held to disrupt the traditional financial system. Together, they formed a strong network of individuals who were passionate about building a more inclusive and equitable financial future...',
    'Despite the challenges they faced, such as regulatory hurdles and misinformation campaigns, the community remained resilient. They stood united, advocating for the adoption of Bitcoin and other cryptocurrencies as a means to break free from the shackles of centralized control...',
    'Their story serves as a reminder that when like-minded individuals come together, they have the power to shape the future. Through their unity and unwavering belief in the decentralized revolution, they planted the seeds of change and paved the way for a more democratic and transparent financial system.',
    'Remember, together we can create a world where financial freedom and empowerment are accessible to all. Let us stand united and continue to advocate for the decentralization movement, driving positive change and embracing the potential of cryptocurrencies...',
    'JOIN THE CULT'];

var index = 0;

var typingSound = new Audio('./sound/cult.mp3');

var textContainer = document.getElementById('textContainer');
var phrases = ['Cult of Base: Embracing the DeGen Revolution...',
    'In the heart of the digital realm, a group of pioneering souls have risen to create something extraordinary. They are the DeGens, a community of fearless visionaries and unconventional thinkers, bound together by their unyielding passion for the blockchain. With a shared goal of pushing the boundaries of what`s possible, they have come together to form a unique haven known as the Base cult...',
    'In this enigmatic haven, the DeGens gather to share ideas, challenge norms, and explore the limitless potential of decentralized technologies. This isn`t just any community; it`s a melting pot of creativity, innovation, and a touch of audacity. The Cult of the Blockchain is where individuals who see beyond the status quo find solace and camaraderie....',
    'But make no mistake, this is no ordinary cult. There are no dogmas, no rigid rules, and certainly no charismatic leaders to blindly follow. Instead, the Cult of the Blockchain is founded upon principles of self-discovery, exploration, and a relentless pursuit of breaking the mold. Here, the DeGens revel in the art of creation, forging new pathways in a landscape where the rules are still being written....',
    'The cornerstone of the Cult`s ideology is the belief in the power of decentralized systems to reshape the world. They understand that the blockchain is more than just a technological marvel; it`s a revolution waiting to be fully realized. By embracing their inner DeGen – a term that`s not derogatory, but rather an emblem of their unconventional approach – they seek to liberate themselves from traditional constraints and make their mark on the future....',
    'Within the Cult of the Blockchain, inclusivity reigns supreme. No matter one`s background, expertise, or wild ideas, all are welcomed with open arms. The DeGens know that diversity is their greatest asset, as it fuels the fire of creativity and drives innovation to unforeseen heights. They`re united by a shared ambition to explore uncharted territories and unearth new solutions to the world`s most pressing challenges....',
    'As the sun sets over the virtual horizon, the members of the Cult of the Blockchain gather in their digital sanctum, ready to embark on another journey of discovery. They may be dismissed as "degenerates" by some, but they wear the label proudly, for it signifies their willingness to defy convention and carve a path that only they can tread.',
    'Remember, together we can create a world where financial freedom and empowerment are accessible to all. Let us stand united and continue to advocate for the decentralization movement, driving positive change and embracing the potential of cryptocurrencies...',
    'JOIN THE CULT'];

var index = 0;
var typingSound = new Audio('./sound/cult.mp3');

var interval;

function typeText() {
    var currentPhrase = phrases[index];
    var charIndex = 0;
    clearInterval(interval);
    
    interval = setInterval(function () {
        if (charIndex < currentPhrase.length) {
            textContainer.textContent += currentPhrase.charAt(charIndex);
            charIndex++;
            typingSound.play();
        } else {
            clearInterval(interval);
        }
    }, 100); // Intervalo de tiempo para mostrar cada caracter, puedes ajustarlo según tus necesidades
}

textContainer.addEventListener('click', function () {
    if (index < phrases.length) {
        if (textContainer.textContent === phrases[index]) {
            index++;
            textContainer.textContent = '';
            typeText();
        } else {
            clearInterval(interval);
            textContainer.textContent = phrases[index];
        }
    }
    
    if (index === phrases.length) {
        window.location.href = 'main.html';
    }
});

typeText();





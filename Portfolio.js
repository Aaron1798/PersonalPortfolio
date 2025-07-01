//This is the clickable buttons that redirect to pages

function Table_Buttons(url) {
    window.location.href = url;
}

document.getElementById('button1').addEventListener('click', function() {
    Table_Buttons('https://www.artstation.com/artwork/kNZ6aA');
});

document.getElementById('button2').addEventListener('click', function() {
    Table_Buttons('https://www.artstation.com/artwork/XgWoAL');
});

document.getElementById('button3').addEventListener('click', function() {
    Table_Buttons('https://www.artstation.com/artwork/RydlwX');
});

document.getElementById('button4').addEventListener('click', function() {
    Table_Buttons('https://www.artstation.com/artwork/w0boaL');
});

document.getElementById('button5').addEventListener('click', function() {
    Table_Buttons('https://www.artstation.com/artwork/yDena9');
});

document.getElementById('button6').addEventListener('click', function() {
    Table_Buttons('https://www.artstation.com/artwork/Ke5Dnr');
});


function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}


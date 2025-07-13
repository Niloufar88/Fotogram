// variables:

const replaceImg = document.querySelectorAll('figure img');
const mainImg = document.querySelector('.img-circle img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let counter = 0;

const overlay = document.getElementById('overlay');

const imageTitle = ["Budapest", "Deutschland", "Hamburg", "Hamburg", "Hamburg", "Hamburg", "Hamburg", "Mattighofen", "Mittelwald", "Nürenberg", "Rom", "Rothenburg ob der Tauber", "Rom", "Rom", "Tallinn", "Wien", "Österreich", "Österreich", "Österreich", "Passau"];

const imageNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


//replace-image-function:

replaceImg.forEach((image, i) => {

    image.addEventListener('click', function(e) {
        e.stopPropagation();
        document.getElementById('overlay').classList.toggle('d-none');
        mainImg.src = this.getAttribute("src"),
            counter = i;

        for (let i = 0; i < imageNumber.length; i++) {

            document.getElementById('img-counter').innerHTML = `<ul>${imageNumber[counter]} / ${replaceImg.length}</ul>`;
        }

        for (let i = 0; i < imageTitle.length; i++) {
            document.getElementById('img-text').innerHTML = `<ul> ${imageTitle[counter]} </ul>`;

        }

    })

});

// prev-Button-function:

prevButton.addEventListener('click', function(e) {
    e.stopPropagation();
    counter--;
    if (counter < 0) counter = replaceImg.length - 1;
    mainImg.src = replaceImg[counter].getAttribute("src");
    document.getElementById('img-counter').innerHTML = `<ul>${counter+1} / ${replaceImg.length}</ul>`;
    for (let i = 0; i < imageTitle.length; i++) {
        document.getElementById('img-text').innerHTML = `<ul> ${imageTitle[counter]} </ul>`;

    }
});

// next-button-function:

nextButton.addEventListener('click', function(e) {
    e.stopPropagation();
    counter++;
    if (counter >= replaceImg.length) counter = 0;
    mainImg.src = replaceImg[counter].getAttribute("src");
    document.getElementById('img-counter').innerHTML = `<ul>${counter+1} / ${replaceImg.length}</ul>`;
    for (let i = 0; i < imageTitle.length; i++) {
        document.getElementById('img-text').innerHTML = `<ul> ${imageTitle[counter]} </ul>`;

    }
});

//overlay-functions:

function hideOverlay(elementId) {
    document.getElementById('overlay').classList.add("d-none");
    counter = 0;
    stopPropagationFurthur(elementId);
}

function stopPropagationFurthur(elementId) {
    document.getElementById(elementId).addEventListener("click", (event) => {
        event.stopPropagation();

    })

}
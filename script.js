

let questions = [["1 - Which of these players have 5 ballon'd'or", "Zidane Zinedine", "Lionel Messi", "Cristiano Ronaldo", "Luis Figo"],
["2 - Who is your favorite football player?", "Cristiano Ronaldo", "Lionel Messi", "Eden Hazard", "Sadio Mane"],
["3 - Which of these players won the world cup?", "Ronaldo", "Cristiano Ronaldo", "Zinedine Zidane", "Diego Maradona"],
["4 - How Much Times Has Lionel Messi Won The World Cup?", "1", "2", "3", "never"], ["5 - What is the best team you think in the world?", "Barcelona FC", "Liverpool FC", "Bayern Munich FC", "Real Madrid FC"]];

let reponsesVraies = ["Lionel Messi", "Cristiano Ronaldo", "Diego Maradona", "never", "Barcelona FC"];

let next = document.getElementById('next');
let prev = document.getElementById('prev');
let terminer = document.getElementById('terminer');

let button = document.getElementById('button');
let counter = 0;
let SectionReponse = document.getElementById('mysection');

button?.addEventListener('click', NextPage);

function NextPage() {
    window.location.href = 'quizz.html';

}

document.getElementById('question').innerHTML = questions[0][0];
document.getElementById('choix1').innerHTML = questions[0][1];
document.getElementById('choix2').innerHTML = questions[0][2];
document.getElementById('choix3').innerHTML = questions[0][3];
document.getElementById('choix4').innerHTML = questions[0][4];


if (counter == 0) {
    document.getElementById('prev').style.display = 'none';
}
if (counter == 0) {
    terminer.style.display = 'none';
}

next.addEventListener('click', function () {
    if (counter < 5) {
        counter++;
        document.getElementById('question').innerHTML = questions[counter][0];
        document.getElementById('choix1').innerHTML = questions[counter][1];
        document.getElementById('choix2').innerHTML = questions[counter][2];
        document.getElementById('choix3').innerHTML = questions[counter][3];
        document.getElementById('choix4').innerHTML = questions[counter][4];
        document.getElementById('choix1').style.backgroundColor = '#3666d4';
        document.getElementById('choix2').style.backgroundColor = '#3666d4';
        document.getElementById('choix3').style.backgroundColor = '#3666d4';
        document.getElementById('choix4').style.backgroundColor = '#3666d4';

    }
    if (counter > 0) {
        document.getElementById('prev').style.display = 'block';
    }

    if (counter == 4) {
        next.style.display = 'none';
    }
    if (counter < 4) {
        terminer.style.display = 'none';
    } else {
        terminer.style.display = 'block';
    }
})

prev.addEventListener('click', function () {
    document.getElementById('question').innerHTML = questions[counter - 1][0];
    document.getElementById('choix1').innerHTML = questions[counter - 1][1];
    document.getElementById('choix2').innerHTML = questions[counter - 1][2];
    document.getElementById('choix3').innerHTML = questions[counter - 1][3];
    document.getElementById('choix4').innerHTML = questions[counter - 1][4];
    document.getElementById('choix1').style.backgroundColor = '#3666d4';
    document.getElementById('choix2').style.backgroundColor = '#3666d4';
    document.getElementById('choix3').style.backgroundColor = '#3666d4';
    document.getElementById('choix4').style.backgroundColor = '#3666d4';
    counter--;

})
let score = 0;
for (let i = 1; i <= 5; i++) {
    const reponscheck = document.getElementById(`choix${i}`);
    reponscheck?.addEventListener('click', () => {
        if (reponscheck.innerText === reponsesVraies[counter]) {
            reponscheck.style.backgroundColor = 'green';
            score = score + 5;
        }
        else {
            reponscheck.style.backgroundColor = 'red';
        }
    })
}
let ScoreAffichage = document.getElementById('all');
terminer?.addEventListener('click', () => {
        SectionReponse.style.display = 'none';
        next.style.display = 'none';
        prev.style.display = 'none';
        terminer.style.display = 'none' ;
        document.getElementById('question').style.display = 'none';
        let scoreF = document.createElement('div');
        scoreF.textContent = `votre score est : ${score}` ;
        scoreF.classList.add('score');
        ScoreAffichage.appendChild(scoreF);       
})





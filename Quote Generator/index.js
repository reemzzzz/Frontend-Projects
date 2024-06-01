var btn = document.getElementById("quotebtn");
var quoteTextElement = document.getElementById("quoteText");

var quotes = [
    "“Be yourself; everyone else is already taken.”― Oscar Wilde"
    ,"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ― Marilyn Monroe"
    ,"“So many books, so little time.”― Frank Zappa"
    ,"“A room without books is like a body without a soul.” ― Marcus Tullius Cicero"
    ,"“You only live once, but if you do it right, once is enough.” ― Mae West"
    ,"“Be the change that you wish to see in the world.”― Mahatma Gandhi"
    ,"“In three words I can sum up everything I've learned about life: it goes on.” ― Robert Frost"
    ,"“If you tell the truth, you don't have to remember anything.” ― Mark Twain"
]

var indexArr = [];

function btnAction(){
    
    var previousIndex = indexArr.pop;

    var i = 0;
    var text = '';
    var len = quotes.length;
    do {
        randomIndex = Math.floor(Math.random() * len);
    } while (randomIndex === previousIndex);
    quoteTextElement.classList.replace('d-none' , 'd-block');
    var text = `<p class="mt-5">${quotes[randomIndex]}</p>`;
    quoteTextElement.innerHTML = text;

    console.log(randomIndex)
    previousIndex = randomIndex;
    
      
}



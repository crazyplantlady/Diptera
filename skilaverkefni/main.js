

// allt sem gerist fyrir utan function og slaufusviga gerist strax 
// ef það er eitthvað sem ég vil að gerist á öðrum tíma, þá er það functions



var myDiv = document.querySelector("#form");
myDiv.innerHTML=
//skiptir ul máli hér? 
`
<ul class="list"></ul>  
Nafn <input id="name" type="text">
Aldur <input id="age" type="text">
Mynd: <input id="pic" type="text" align="middle">
Einkunn: <input id="score" type="text"> 
Um persónuna <textarea name="about" class="txtarea" rows="4"></textarea>  

<button>Bæta við persónu</button>
`
var button = document.querySelector("button");
var infoDiv = document.querySelector("#info");

var names = ["Ross Geller", "Chandler Bing", "Joey Tribbiani", "Monica Geller", "Rachel Green", "Phoebe Buffay"];
var photos = ["img/Ross.jpg",
            "img/Chandler.jpg", 
            "img/Joey.jpg", 
            "img/Monica.jpg",
            "img/Rachel.jpg",
            "img/phoebe.jpg"
        ];
var age = [ "18 október 1968", "8.apríl 1968", "1968", "22. mars 1970", "5. maí 1970", "16. febrúar 1967"];
var text =[ "Ross er með doktorsgráðu í fornleifafræði, hann er eldri bróðir Monicu og er þekktur fyrir að giftast konum og skilja við þær. Hann er búinn að standa í skilnaði þrisvar og á 2 börn með 2 konum.",
            "Chandler er fyndni gæjinn í hópnum, hann er klaufalegur og besti vinur Joey, þeir búa saman og eru nágrannar Rachel og Monicu. Chandler endar með Monicu og flytja inn saman",
            "Joey er herbergisfélagi Chandler, hann vinnur sem sápuóperuleikari og er myndarlegi gæjinn, glaumgosinn í hópnum og á ekki erfitt með að ná sér í konur.",
            "Monica er kokkur og með OCD fyrir þrifum. Hún þarf að hafa allt eins og hún vill hafa það. Hún er yngri systir Ross, besta vinkona Rachel og giftist Chandler.",
            "Rachel kemur inn í hópinn eftir að hafa hætt við brúðkaup. Hún vinnur í tískubransanum.Hún og Ross eru off/on yfir allar seríurnar og enda á að eignast dóttur saman.",
            "Phoebe er ófyrirséðasti karakterinn, skrítin og brýtur allar forskráðar persónuleikareglur. Hún býr ein og er framan af ekki í löngum samböndum en endar á að giftast."        
        ];
var scores = ["7/10","5/10","6/10","6/10","5/10","8/10"];

var loop = function (){
for (var i = 0; i<names.length;i++){
    infoDiv.innerHTML += 
    `
    <div class="flex">
        <div class="card">
        <img src="${photos[i]}"/>
        <h1>${names[i]}</h1>
        <h5>Afmælisdagur: ${age[i]}</h5>
        <p>${text[i]}</p> <br/>
        <p>Karaktereinkunn ${scores[i]}</p>
        </div>
    </div>
    `}
}
    var card = function(){
        infoDiv.innerHTML ="";
        myDiv + infoDiv;
        names.push(document.querySelector("#name").value);
        age.push(document.querySelector("#").value);
        names.push(document.querySelector("#name").value);
        names.push(document.querySelector("#name").value);
        names.push(document.querySelector("#name").value);
        loop()
     }
    button.onclick = card;
    loop()


        // hvernig get ég flexað cards?
    // get ég stækkað input fields, "about"? -check.
    // er hægt að style-a, og hvernig á maður að targeta input fields? -check. 

    // function hvernig 

     // stoobid consumer, web assembly. 
     // cookieqlicker

     //delphie, delfie


     // búa til div utan um fyrirfram gefnu upplýsingarnar 
    
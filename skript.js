/* Nedan globala variabler som behövs för kodens funktionalitet
 */

let stodlinjer = false; //anger om stödlinjer ska visas
let irorelse = false; //anger om spelaren är i rörelse
let koordinater = false; //anger om koordinater sa visas
let ljudPa = true; //anger om ljudet är på
let meddelandeKo = []; //kö för meddelanden (endast ett meddelande åt gången kan visas
let meddelandeKoHandelser = []; //kö för händelser för meddelandeköer
let meddelandeSkrivs = false; //anges om ett meddelande visas just nu
let skuggor = true; //anger om skuggor ska ritas
let riktning = 2; //anger vilken riktning spelaren går i. 0=upp 1=höger 2=neråt 3=vänster
let story = false; //anger huruvida storyn just nu är aktiv
let mitten = [1.5, 2.5]; //anger spelarens nuvarande position och var mitten är [x, y]
let utrustning = ["Toothbrush"]; //den utrustning som spelaren har.
let block = [1, 2]; //anger det block spelaren är på [x, y]
let synfalt = 4; //anger hur långt spelaren ser
let bredd; //Bredden på fönstret (sköts programmatiskt)
let hojd; //Höjden -""-
let ruta = 70; //Hur stor en ruta är (px)
let rorelsepa = true; //Om man får röra sig just nu
let hallerNere = [false, false, false, false]; //vilka piltangenter som hålls nere (vänster, höger, upp, ner)
let stridPagar = false;
let halsa = 100; //ANger spelarens nuvarande hälsa
let nyborjare = true; //Nybörjare har vissa fördelar.
let inventory = false; //anger om inventory är öppet
let vantId;

/*Nedan nivåer. Att göra: separera till separat JSON "resurser"
 */
let niva1 = [
    [0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 2, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let niva2 = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 4, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 5, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2],
    [2, 6, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 7, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 8, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 9, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

];
let niva3 = [
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0],
    [0, 2, 1, 2, 2, 2, 1, 1, 1, 2, 9, 9, 9, 9, 2, 1, 1, 1, 2, 0],
    [0, 2, 1, 2, 2, 2, 1, 1, 1, 2, 9, 9, 9, 9, 2, 1, 1, 1, 2, 0],
    [0, 2, 1, 2, 2, 2, 1, 1, 1, 2, 9, 9, 9, 9, 2, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 2, 9, 9, 9, 9, 2, 2, 4, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 1, 1, 1, 1, 2, 2, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let varlden = niva3; // Anger den aktuella världen
let varelser = [
    
]; //varelser i den aktuella världen

/*
Mall för varelse:
{
        id: 0,
        x: 5,
        y: 5,
        riktning: 0,
        rorelse: false,
        strid: false,
        utrustning: [],
        halsa: 100
}
*/

//Ställ in ljudvolym för bakgrundsljud
document.getElementById("metall1")
    .volume = 0.1;
document.getElementById("metall2")
    .volume = 0.1;





let saknas = new Image();
saknas.src = "https://lh3.googleusercontent.com/Cw__t8VkDUzVl-Mf9AtLuUXLIASHRc2CwhwXFw8vnl4j0pW711ZqAnBk8fygblu9K-R7JX0DzBvMDymhXyWcJg=s400"; //Textur för saknat block

let blocks = resurser.block;
let entiteter = resurser.entiteter;
let bilderdata = []; //Här skapas programmatiskt en lista med Image-objekt för blocktexturerna
let vaggar = []; //Här skapas programmatiskt en lista med ID-nummer för väggar
let ljud = []; //här skapas programmatiskt en lista med gångljud för block
let entitettexturer = []; //entiteternas texturer
let ljudid; //aktuellt ljudid



/*
    Nedan procedurer som körs vid start
*/
let spelplan = document.getElementById("spelplan"); //Canvas med spelplan
let skuggplan = document.getElementById("skugga"); //Canvas med skugga


let p = spelplan.getContext("2d"); //Context för spelplan
let s = skuggplan.getContext("2d"); //Context för skuggplan


laddaBilder(); //Tar block-URLerna och skapar Image av dem som läggs i bilderdata.
setInterval(rorelse, 50); //Starta rörelsekontroll
setTimeout(ljudFranGolv, 500); //Starta ljudloop (anropas rekursivt beroende på ljudens längd)

kontrolleraLarare(); //se om Jorge är här

setInterval(uppdateraVarelser, 50);

function uppdateraBreddHojd() {
    bredd = window.innerWidth;
    hojd = window.innerHeight;
    spelplan.width = bredd;
    spelplan.height = hojd;
    skuggplan.width = bredd;
    skuggplan.height = hojd;
}

/*
    Nedan tangenttryckningshanterare
*/
document.onkeyup = function tangentUpp(handelse) {
    //När en tangent tas upp, säg att den ej längre är nere
    if(handelse.key === "ArrowLeft")
        hallerNere[0] = false;
    else if(handelse.key === "ArrowRight")
        hallerNere[1] = false;
    else if(handelse.key === "ArrowUp")
        hallerNere[2] = false;
    else if(handelse.key === "ArrowDown")
        hallerNere[3] = false;
    irorelse = hallerNere.includes(true);
    //Kontrollera om spelaren rör sig och lagra i boolean
    rita(); //För att se till att spelarens figur slutar gå
};
document.onkeydown = function tangentNer(handelse) {
    /*
    Röreslerelaterat
    */

    //När en tangent trycks ner, säg att den är nere om det gäller rörelse
    if(handelse.key === "ArrowLeft")
        hallerNere[0] = true;
    else if(handelse.key === "ArrowRight")
        hallerNere[1] = true;
    else if(handelse.key === "ArrowUp")
        hallerNere[2] = true;
    else if(handelse.key === "ArrowDown")
        hallerNere[3] = true;
    irorelse = hallerNere.includes(true); //Kontrollera om spelaren rör sig och lagra i boolean


    /*
    Nivåbyte via nummertangenterna. ATt göra: radera detta.
    */
    /*if(handelse.key === "1") {
        varlden = niva1;
        mitten = [8, 6];
        block = [8, 6];
        rita();
    }
    if(handelse.key === "2") {
        varlden = niva2;
        mitten = [1.5, 1.5];
        block = [1, 1];
        rita();
    }*/
    
    if(handelse.key === "i")
        oppnaStangUtrustning(); //inventory = I

    /*
    Fuskkoder
    */
    if(handelse.ctrlKey && handelse.key === "x") {
        korFuskkod(prompt("Ange kod"));
        
    }

    /*
    Övrigt
    */

    if(handelse.key === "Enter") //Retur = interaktion
        interagera();



};


/*
    Hanterar röresle. Körs automatiskt 20 ggr/sek.
*/
function rorelse() {
    let dx = 0;
    let dy = 0;
    //Kolla vilka tangenter som är nere och lägg på korrekt värde till delta X och delta Y
    if(hallerNere[0]) {
        dx -= 0.2;
        riktning = 3;
    }
    if(hallerNere[1]) {
        dx += 0.2;
        riktning = 1;
    }
    if(hallerNere[2]) {
        dy -= 0.2;
        riktning = 0;
    }
    if(hallerNere[3]) {
        dy += 0.2;
        riktning = 2;
    }

    //Flytta spelaren om villkoren uppfylls
    //Villkor 1: Kollision. Ser om blocket man hamnar på efter dx och dy förändringar är vägg. Hindrar då
    //Villkor 2: röresle ska vara på
    //Villkor 3: man får ej gå utanför världen
    //Villkor 4: När meddelanden skrivs hindras rörelse
    if(!vaggar.includes(varlden[Math.floor(mitten[0] + dx - 20 / ruta)][Math.floor(mitten[1] + dy - 20 / ruta)]) && !vaggar.includes(varlden[Math.floor(mitten[0] + dx + 20 / ruta)][Math.floor(mitten[1] + dy + 20 / ruta)]) && !vaggar.includes(varlden[Math.floor(mitten[0] + dx - 20 / ruta)][Math.floor(mitten[1] + dy + 20 / ruta)]) && !vaggar.includes(varlden[Math.floor(mitten[0] + dx + 20 / ruta)][Math.floor(mitten[1] + dy - 20 / ruta)]) && rorelsepa && varlden[0][Math.round(mitten[1] + dy)] !== undefined && !meddelandeSkrivs && !stridPagar) {
        mitten[0] += dx; //uppdatera koordinater
        mitten[1] += dy;
        block[0] = Math.floor(mitten[0]); //uppdatera vilket block man är på
        block[1] = Math.floor(mitten[1]);
    }
    
    if(varlden[block[0]][block[1]] === 0 && (dx !== 0 || dy !== 0) && rorelsepa) { //Om man har gått på ett block man faller igenom och rör sig just nu ska fallanmimationen spelas
        rorelsepa = false;
        for(let figur of document.getElementsByClassName("figur")) //Gäller samtliga riktningsbilder
            figur.classList.add("faller");
        document.getElementById("oof").play(); //Spela ljud
        setTimeout(dog, 5000); //Ladda om sidan om 5 sek
    }
    
    if(koordinater) //Visa koordinater om så önskas
        document.getElementById("pos")
        .innerHTML = "X: " + mitten[0] + "<br>Y: " + mitten[1];
}

//funktionen körs efter att varje ljud tagit slut
function ljudFranGolv() {
    let langd = 1; //Om inget ljud ska köras på detta block (sek)
    if(irorelse && ljudPa) { //kontrollera att ljud ska spelas
        let material = varlden[block[0]][block[1]];
        ljudalternativ = ljud[material]; //hämta ljuden för blocket man nu står på
        let slumpindex = Math.floor(ljudalternativ.length * Math.random()); //slumpa fram ett
        ljudid = ljudalternativ[slumpindex];
        langd = ljudid.duration;
        ljudid.volume = 0.3; //Volym på 30 %
        ljudid.play(); //spela det

    }
    setTimeout(ljudFranGolv, langd * 1000); //när det är klart, kör om processen 
}

/*
HANTERAR ALL GRAFIK
*/
function rita() {
    if(rorelsepa) {
        for(let figur of document.getElementsByClassName("figur")) //Dölj alla bilder för att sen visa den aktuella
            figur.classList.add("dold");
        if(irorelse) //Om i rörelse
            document.getElementById("figur" + riktning) //Visa rörelse med rätt riktning
            .classList.remove("dold");
        else //Om stilla
            document.getElementById("figur" + riktning + "stilla") //Visa stilla med rätt riktning
            .classList.remove("dold");
    }
    uppdateraBreddHojd(); //Få rätt värden på variablerna bredd och höjd
    p.clearRect(0, 0, spelplan.width, spelplan.height); //Rensa spelplanen
    let startX = mitten[0] - (bredd / ruta) / 2; //Räkna ut koordinaterna i översta högra hörnet
    let startY = mitten[1] - (hojd / ruta) / 2; //där spelplanen börjar ritas
    
    for(let x = Math.floor(startX); varlden.length > x; x++) { //Loopa igenom varje block som ska ritas
        for(let y = Math.floor(startY); varlden[0].length > y; y++) {
            if(x >= 0 && y >= 0) { //Om blocket finns i världsarrayen
                let bild = bilderdata[varlden[x][y]]; //Hämtar Image-objektet för det aktuella blocket
                if(bild !== undefined) { //Om den finns
                    p.drawImage(bild, (x - startX) * ruta, (y - startY) * ruta, ruta, ruta); //Rita den
                } else { //annars
                    p.drawImage(saknas, (x - startX) * ruta, (y - startY) * ruta, ruta, ruta); //Rita saknasblocket
                    p.strokeText("ID saknas: " + varlden[x][y], (x - startX) * ruta, (y - startY) * ruta + 10); //SKriv meddelande
                }
                //p.strokeText(x + ", " + y, (x - startX) * ruta, (y - startY) * ruta);

            }
        }
    }
    
    //RITA VARELSER
    for(let varelse of varelser) {
        if(varelse.x >= startX && varelse.y >= startY) { //Om det är inom världen
            let bild;
            if(varelse.id >= 0 && varelse.id < entiteter.length) { //Kontrollera att varelsens id är korrekt
                bild = varelse.rorelse ? entitettexturer[varelse.id][varelse.riktning + 4] : entitettexturer[varelse.id][varelse.riktning]; //Rita varelsen, komplett med riktnings- och rörelsehantering
            }
            else {
                bild = saknas; //Annars, rita saknasgrej
                p.strokeText("Entitet saknas: " + varelse.id, (varelse.x - startX) * ruta, (varelse.y - startY) * ruta, ruta, ruta);
            }
            p.drawImage(bild, (varelse.x - startX) * ruta, (varelse.y - startY) * ruta, 128, 128); //Rita varelsen
        }
    }
    
    //HANTERA SKUGGOR
    if(skuggor) { //kontrollera att skuggor ska ritas
        s.fillRect(0, 0, bredd, hojd); //rensa skuggcanvas (=gör svart)
        s.globalCompositeOperation = "destination-out";
        s.arc((mitten[0] - startX) * ruta, (mitten[1] - startY) * ruta, synfalt * ruta, 0, 2 * Math.PI);
        s.fill(); //Gör hål i en cirkel som är synfältet
        s.globalCompositeOperation = "source-over";
        let vaggarKoord = [];
        start: for(let x = 0; varlden.length > x; x++) { //Hitta samtliga väggar och lägg in i lista
            for(let y = 0; varlden[0].length > y; y++) {
                if(vaggar.includes(varlden[x][y])) {
                    vaggarKoord.push([x, y]);
                }
            }
        }

        let detalj = 0.25; //Bredd för varje skuggruta (per block)
        let persX; //spelare X
        let persY; //spelare Y
        let vaggX; //vägg X
        let vaggY; //vägg Y
        let minX; //Kant minsta X
        let minY; //Kant minsta Y
        let maxX; //Kant största X
        let maxY; //Kant största Y
        /*
        ATT GÖRA:
        Bättre skugga
        */
        for(let x = block[0] - synfalt; x <= block[0] + synfalt + 1; x += detalj) { //för varje ruta som ska skuggas
            for(let y = block[1] - synfalt; y <= block[1] + synfalt + 1; y += detalj) {
                persX = mitten[0];
                persY = mitten[1];

                for(let vagg of vaggarKoord) { //löp igenom alla väggar
                    vaggX = vagg[0];
                    vaggY = vagg[1]; //Om linje till spelare korsar en vägg, skugga
                    if(linjeRektangelKorsar(x + detalj / 2, y + detalj / 2, persX, persY, vaggX, vaggY, 1, 1)) {
                        let vaggDar = x < 0 || y < 0 ? false : vaggar.includes(varlden[Math.floor(x + detalj / 2)][Math.floor(y + detalj / 2)]);
                        if(!vaggDar) {
                            s.fillRect((x - startX) * ruta, (y - startY) * ruta, ruta * detalj + 0.01, ruta * detalj + 0.01);
                            break;
                        }
                    }
                }
            }
        }

    }
}
//s.fillRect((x - startX) * ruta, (y - startY) * ruta, ruta * detalj, ruta * detalj);

function dog() { //LADDA OM
    window.location.reload();
}

//Hantera interaktioner (från resurser.js)
function interagera() {
    let x = block[0];
    let y = block[1];
    //Ta blocket framför spelaren (olika beroende på riktning)
    switch(riktning) {
        case 0:
            y--;
            break;
        case 1:
            x++;
            break;
        case 2:
            y++;
            break;
        case 3:
            x--;
            break;
    }
    if(blocks[varlden[x][y]].interaktion.typ === "bli-block") { //OLIKA TYPER AV INTERAKTIONER
        varlden[x][y] = blocks[varlden[x][y]].interaktion.varde;
    }
    
}

//Skapa en meddelanderuta med ett visst meddelande (lägger i kö)
function meddelanderuta(meddelande) {
    meddelandeKo.push(meddelande);
    if(!meddelandeSkrivs)
        initieraMeddelande();  //Om kön är tom, kör direkt 
}

function initieraMeddelande() {
    let meddelande = meddelandeKo.shift(); //ta senaste i kln.
    if(meddelande.length < 60)
        document.getElementById("meddelanderuta") //Se till att rutan har rätt stil (ej debug)
        .style.lineHeight = "100px";
    else
        document.getElementById("meddelanderuta")
        .style.lineHeight = "initial";
    document.getElementById("meddelanderuta")
        .style.display = "block";
    document.getElementById("meddelanderuta") //Töm
        .innerHTML = "";
    skrivmaskin(meddelande, 0); //starta skrivmaskin
}

function skrivmaskin(meddelande, gang) { //Börja skriv meddelandet
    meddelandeSkrivs = true;
    document.getElementById("meddelanderuta")
        .innerHTML += meddelande.charAt(gang);
    if(gang <= meddelande.length) //Om meddelandet ej är klart, schemalägg nästa bokstav
        setTimeout(skrivmaskin, 100, meddelande, gang + 1);
    else
        setTimeout(function() { //Annars, säg att nästa meddelande ska visas
            document.getElementById("meddelanderuta").style.display = "none";
            meddelandeSkrivs = false;
            initieraMeddelande();
        }, 3000);
}

function testmeddelande(meddelande) { //DEBUGMEDDELANDE
    document.getElementById("meddelanderuta")
        .innerHTML += meddelande + "<br>";
    document.getElementById("meddelanderuta")
        .style.display = "block";
    document.getElementById("meddelanderuta")
        .style.overflow = "scroll";
    document.getElementById("meddelanderuta")
        .style.height = "30vh";
}

function linjerKorsar(x1, y1, x2, y2, x3, y3, x4, y4) { //Tackar tackar nån snubbe på nätet!!!!!

    // calculate the distance to intersection point
    let uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
    let uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

    // if uA and uB are between 0-1, lines are colliding
    if(uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
        return true;
    }
    return false;
}

function linjeRektangelKorsar(x1, y1, x2, y2, rx, ry, rw, rh) { //Tackar tackar nån snubbe på nätet!!!!!

    // check if the line has hit any of the rectangle's sides
    // uses the Line/Line function below
    let left = linjerKorsar(x1, y1, x2, y2, rx, ry, rx, ry + rh);
    let right = linjerKorsar(x1, y1, x2, y2, rx + rw, ry, rx + rw, ry + rh);
    let top = linjerKorsar(x1, y1, x2, y2, rx, ry, rx + rw, ry);
    let bottom = linjerKorsar(x1, y1, x2, y2, rx, ry + rh, rx + rw, ry + rh);

    // if ANY of the above are true, the line
    // has hit the rectangle
    if(left || right || top || bottom) {
        return true;
    }
    return false;
}

function laddaBilder() {
    for(let ettblock of blocks) {
        let bild = new Image();
        bild.src = ettblock.textur;
        bilderdata.push(bild);
        if(ettblock.vagg)
            vaggar.push(ettblock.id);
        let ljudfordetta = [];
        if(ettblock.gangljud.length > 1) {

            for(let ljudurl of ettblock.gangljud) {
                let ljudobjekt = document.createElement("AUDIO");
                ljudobjekt.src = ljudurl;
                ljudfordetta.push(ljudobjekt);
            }
        }
        ljud.push(ljudfordetta);
    }
    
    for(let enentitet of entiteter) {
        let bilder = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
        for(let i = 0; i < enentitet.texturer.stilla.length; i++) {
            bilder[i].src = enentitet.texturer.stilla[i];
        }
        for(let i = 4; i < enentitet.texturer.rorelse.length + 4; i++) {
            bilder[i].src = enentitet.texturer.rorelse[i - 4];
        }
        entitettexturer[enentitet.id] = (bilder);
    }
    bilderdata[bilderdata.length - 1].onload = rita;
}

function uppdateraVarelser() {
    if(!meddelandeSkrivs && !stridPagar) {
        for(let varelse of varelser) {
            let dx = 0;
            let dy = 0;
            let rorelse;
            
            if(varelse.id > entiteter.length)
                continue;
            if(Math.sqrt(Math.pow(varelse.x - mitten[0], 2) + Math.pow(varelse.y - mitten[1], 2)) >= 4)
                rorelse = entiteter[varelse.id].beteende.ensam;
            else
                rorelse = entiteter[varelse.id].beteende.spelare;
            if(rorelse.typ === "ga-omkring") {
                if(Math.floor(Math.random() * 8) === 0) {
                    varelse.riktning = Math.floor(Math.random() * 4);
                    switch(varelse.riktning) {
                        case 0:
                            dy -= 0.2 * rorelse.varde;
                            break;
                        case 1:
                            dx += 0.2 * rorelse.varde;
                            break;
                        case 2:
                            dy += 0.2 * rorelse.varde;
                            break;
                        case 3:
                            dx -= 0.2 * rorelse.varde;
                            break;
                    }
                    
                    if(Math.floor(Math.random() * 3) === 0)
                        varelse.rorelse = !varelse.rorelse;
                    if(!varelse.rorelse) {
                        dx = 0;
                        dy = 0;
                    }
                }
            }
            else if(rorelse.typ === "forbered-strid") {
                varelse.rorelse = true;
                if(Math.random() < 0.5) {
                    if(Math.abs(mitten[0] - varelse.x) > Math.abs(mitten[1] - varelse.y)) {
                        if(varelse.x - mitten[0] < 0) {
                            dx += 0.2 * rorelse.varde;
                            varelse.riktning = 3;
                        }
                        else {
                            dx -= 0.2 * rorelse.varde;
                            varelse.riktning = 1;
                        }
                    }
                    else {
                        if(varelse.y - mitten[1] < 0) {
                            dy += 0.2 * rorelse.varde;
                            varelse.riktning = 0;
                        }
                        else {
                            dy -= 0.2 * rorelse.varde;
                            varelse.riktning = 2;
                        }
                    }
                }
                else {
                    if(varelse.riktning === 3) {
                            dx += 0.2 * rorelse.varde;
                            
                    }
                    else if(varelse.riktning === 1){
                        dx -= 0.2 * rorelse.varde;
                    }
                    else if(varelse.riktning === 0){
                        dy += 0.2 * rorelse.varde;
                    }
                    else if(varelse.riktning === 2){
                        dy -= 0.2 * rorelse.varde;
                    }
                }
            }
            
            if(!vaggar.includes(varlden[Math.floor(varelse.x + dx)][Math.floor(varelse.y + dy)]) && !vaggar.includes(varlden[Math.floor(varelse.x + dx + 40 / ruta)][Math.floor(varelse.y + dy + 40 / ruta)]) && !vaggar.includes(varlden[Math.floor(varelse.x + dx + 40 / ruta)][Math.floor(varelse.y + dy)]) && !vaggar.includes(varlden[Math.floor(varelse.x + dx)][Math.floor(varelse.y + dy + 40 / ruta)])) {
                varelse.x += dx;
                varelse.y += dy;
            }
            
            if(varelse.strid && Math.sqrt(Math.pow(varelse.x - mitten[0], 2) + Math.pow(varelse.y - mitten[1], 2)) <= 1) {
                meddelanderuta("Hans Yolo VS. " + entiteter[varelse.id].namn);
                stridPagar = true;
                paborjaStrid(varelse, utrustning);
            }
            if(varlden[Math.floor(varelse.x)][Math.floor(varelse.y)] === 0) {
                varelser.splice(varelser.indexOf(varelse), 1);
                document.getElementById("oof").play();
            }
        }
    }
    rita();
}
    
function korFuskkod(fuskkod) {
    if(fuskkod === "godnatt")
            rorelsepa = false;
        if(fuskkod === "godmorgon")
            rorelsepa = true;
        if(fuskkod === "oof") {
            rorelsepa = false;
            for(let figur of document.getElementsByClassName("figur"))
                figur.classList.add("faller");
            document.getElementById("oof").play();
            setTimeout(function() {
                rorelsepa = true;
            }, 5000);
        }
        if(fuskkod === "jorge") {
            utrustning.push("Jorge");
            meddelanderuta("Du har nu utrustats med Jorges mod och Pentium 13 GHz");
        }
        if(fuskkod === "skrjtz")
            interaktioner = [1, 0, 5, 3, 5, 4, 7, 6];
        if(fuskkod === "skrjtz2")
            vaggar = [0, 5];
        if(fuskkod === "vilse")
            koordinater = true;
        if(fuskkod === "kastrull")
            ljudPa = ljudPa ? false : true;
        if(fuskkod === "högerextrem")
            hallerNere[1] = true;
        if(fuskkod === "vänsterextrem")
            hallerNere[0] = true;
        if(fuskkod === "snälla nån") {
            vaggar = [2, 3, 4, 7];
            interaktioner = [0, 1, 2, 3, 5, 4, 7, 6];
        }
        if(fuskkod === "minecraft") {
            bilderdata[1].src = "https://lh3.googleusercontent.com/r6hcRC36CzWCl30MUbabHMUI_KT_yFarwA2bFmBMnvYJ4KpesmjTQvGM_-5rn64JbJYzQRf7N8rYrm0q_BE";
            bilderdata[2].src = "https://image.flaticon.com/icons/png/128/698/698684.png";
        }
        if(fuskkod.substr(0, 15) === "teknisk rapport")
            meddelanderuta(fuskkod.substring(16));
        if(fuskkod.substr(0, 20) === "lång teknisk rapport")
            testmeddelande(fuskkod.substring(21));
        if(fuskkod.substr(0, 6) === "kikare")
            synfalt = Number(fuskkod.substring(7));
        if(fuskkod.substr(0, 12) === "en gång till") {
            fuskkod = fuskkod.substring(13);
            let antalGanger = Number(fuskkod.substring(0, fuskkod.indexOf(" ")));
            fuskkod = fuskkod.substring(fuskkod.indexOf(" ") + 1);
            for(let i = 1; i < antalGanger; i++) {
                korFuskkod(fuskkod.replace(/¤/g, i));
            }
        }
        if(fuskkod.substr(0, 8) === "setblock")
            varlden[block[0]][block[1]] = Number(fuskkod.substring(9));
        if(fuskkod.substr(0, 9) === "angreifen") {
            if(stridPagar) {
            }
        }
        if(fuskkod.substr(0, 5) === "gimme")
            utrustning.push(fuskkod.substring(6));
        if(fuskkod.substr(0, 5) === "strid") {
            let varelsen = Number(fuskkod.substring(6));
            varelser.push({
                id: varelsen,
                x: mitten[0],
                y: mitten[1],
                riktning: 0,
                rorelse: true,
                strid: true,
                utrustning: ["Gun", "Light saber"],
                halsa: varelsen >= 0 && varelsen < entiteter.length ? entiteter[varelsen].halsa : 100
            });
        }
        if(fuskkod.substr(0, 4) === "zooo")
            varelser.push({
                id: Number(fuskkod.substring(5)),
                x: mitten[0],
                y: mitten[1],
                rorelse: false,
                riktning: 0,
                strid: false,
                utrustning: [],
                halsa: fuskkod.substring(5) >= 0 && fuskkod.substring(5) < entiteter.length ? entiteter[fuskkod.substring(5)].halsa : 100
            });
        if(fuskkod === "dark hater")
            skuggor = !skuggor;
        if(fuskkod === "creativemode")
            clearInterval(vantId);
        if(fuskkod === "arsenik") {
            varelser = [];
        }
        if(fuskkod === "tillbax") {
            document.getElementById("strid").style.display = "none";
            document.getElementById("spela-varlden").style.display = "block";
            stridPagar = false;
        }
        if(fuskkod === "hp potion") {
            halsa += 100;
        }
        if(fuskkod === "ti84")
            meddelanderuta("Plebräknare");
        if(fuskkod === "story!!!") {
            story = true;
            varelser.push({
                id: 0,
                x: 2.5,
                y: 7.5,
                riktning: 0,
                rorelse: false,
                strid: true,
                utrustning: ["Gun"],
                halsa: entiteter[0].halsa
            });
            varelser.push({
                id: 0,
                x: 6.7,
                y: 6.3,
                riktning: 0,
                rorelse: false,
                strid: true,
                utrustning: ["Gun"],
                halsa: entiteter[0].halsa
            }); 
            meddelanderuta("Walk around the corner using ←↑→↓");
            vantId = setInterval(function() {
                if(mitten[0] >= 4 && mitten[1] >= 5) {
                    meddelanderuta("Oh no 2 edvans. You need to fight them in order to escape.");
                    clearInterval(vantId);
                    vantId = setInterval(function() {
                        if(varelser.length === 0) {
                            meddelanderuta("Good job. Press ENTER to open doors.");
                            clearInterval(vantId);
                            vantId = setInterval(function() {
                                if(mitten[0] >= 10) {
                                    varelser.push({
                                        id: 0,
                                        x: 12,
                                        y: 7,
                                        riktning: 0,
                                        rorelse: false,
                                        strid: true,
                                        utrustning: ["Gun", "Light saber"],
                                        halsa: entiteter[0].halsa
                                    }); 
                                    meddelanderuta("Oh no edvan with light saber. Very dangerous.");
                                    clearInterval(vantId);
                                    vantId = setInterval(function() {
                                        if(varelser.length === 0) {
                                            clearInterval(vantId);
                                            setTimeout(function() {
                                                meddelanderuta("This was the end of the teaser. You may continue exploring the space ship.");
                                                varelser.push({
                                                    id: 1,
                                                    x: 1,
                                                    y: 16,
                                                    riktning: 0,
                                                    rorelse: false,
                                                    strid: true,
                                                    utrustning: [],
                                                    halsa: entiteter[1].halsa
                                                });
                                            }, 10000);
                                        }
                                    }, 10);
                                }
                            }, 10);
                        }
                    }, 10);
                }
            }, 10);
        }

}

function laddaUtrustning() {
}

function oppnaStangUtrustning() {
    if(!inventory) {
        laddaUtrustning();
        //document.getElementById("inventoryruta").style.display = "block";
        inventory = true;
    }
    else {
        document.getElementById("inventoryruta").style.display = "none";
        inventory = false;
    }
}

function kontrolleraLarare() { //Om det är Jorge ska en informationsruta visas
    let url = window.location.href;
    if(url.includes("?")) {
        let efterFragetecken = url.substring(url.indexOf("?") + 1);
        if(efterFragetecken === "jorge=1") {
            document.getElementById("jorge-info").style.display = "block";
            utrustning.push("Jorge");
        }
    }
}

function spela() {
    document.getElementById("spela-varlden").style.display = "block";
    korFuskkod("story!!!");
    document.getElementById("spelaknapp").blur();
}
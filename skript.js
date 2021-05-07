/* Nedan globala variabler som behövs för kodens funktionalitet
 */
let stodlinjer = false; //anger om stödlinjer ska visas
let irorelse = false; //anger om spelaren är i rörelse
let koordinater = false; //anger om koordinater sa visas
let ljudPa = true; //anger om ljudet är på
let meddelandeKo = []; //kö för meddelanden (endast ett meddelande åt gången kan visas
let meddelandeSkrivs = false; //anges om ett meddelande visas just nu
let skuggor = true; //anger om skuggor ska ritas
let riktning = 2; //anger vilken riktning spelaren går i. 0=upp 1=höger 2=neråt 3=vänster
let story = false; //anger huruvida storyn just nu är aktiv
let mitten = [8, 6]; //anger spelarens nuvarande position och var mitten är [x, y]
let block = [8, 6]; //anger det block spelaren är på [x, y]
let synfalt = 4; //anger hur långt spelaren ser
let bredd; //Bredden på fönstret (sköts programmatiskt)
let hojd; //Höjden -""-
let ruta = 70; //Hur stor en ruta är (px)
let rorelsepa = true; //Om man får röra sig just nu
let hallerNere = [false, false, false, false]; //vilka piltangenter som hålls nere (vänster, höger, upp, ner)
let stridPagar = false;


/*Nedan nivåer. Att göra: separera till separat JSON "resurser"
 */
let niva1 = [
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 0],
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1]
];
let varlden = niva1; // Anger den aktuella världen
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
        utrustning: []
}
*/

//Ställ in ljudvolym för bakgrundsljud
document.getElementById("metall1")
    .volume = 0.1;
document.getElementById("metall2")
    .volume = 0.1;

/*Nedan resurser som krävs för bild och ljud. Att göra: exportera till JSON "resurser"
 */






let saknas = new Image();
saknas.src = "https://icmods.mineprogramming.org/api/img/111.png"; //Textur för saknat block

let blocks = resurser.block;
let entiteter = resurser.entiteter;
let bilderdata = []; //Här skapas programmatiskt en lista med Image-objekt för blocktexturerna
let vaggar = []; //Här skapas programmatiskt en lista med ID-nummer för väggar
let ljud = []; //här skapas programmatiskt en lista med gångljud för block
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
    if(handelse.key === "1") {
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
    }
    if(handelse.key === "3") {
        varlden = niva3;
        mitten = [1, 1];
        block = [1, 1];
        rita();
    }

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

    //DÅlig hantering av skott u storyn. Att göra: uppdatera
    if(handelse.key === " " && story && !meddelandeSkrivs) { //Får endast göra under story och när meddelandet är klart
        document.getElementById("oof")
            .play();
        varelser = [];
        rita();
        setTimeout(meddelanderuta, 2000, "Mer kommer sen.");
        story = false; //Stäng av story
    }


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
    //ATT GÖRA: Förbättra kollisionshanteringen. Usel just nu.
    if(!vaggar.includes(varlden[Math.floor(mitten[0] + dx - 20 / ruta)][Math.floor(mitten[1] + dy - 20 / ruta)]) && !vaggar.includes(varlden[Math.floor(mitten[0] + dx + 20 / ruta)][Math.floor(mitten[1] + dy + 20 / ruta)]) && rorelsepa && varlden[0][Math.round(mitten[1] + dy)] !== undefined && !meddelandeSkrivs && !stridPagar) {
        mitten[0] += dx; //uppdatera koordinater
        mitten[1] += dy;
        block[0] = Math.floor(mitten[0]); //uppdatera vilket block man är på
        block[1] = Math.floor(mitten[1]);
        if(dx !== 0 || dy !== 0) //rita om om förändring har skett
            rita();
    }
    if(koordinater) //Visa koordinater om så önskas
        document.getElementById("pos")
        .innerHTML = "X: " + mitten[0] + "<br>Y: " + mitten[1];
}

//funktionen körs efter att varje ljud tagit slut
function ljudFranGolv() {
    if(irorelse && ljudPa) { //kontrollera att ljud ska spelas
        let material = varlden[block[0]][block[1]];
        ljudalternativ = ljud[material]; //hämta ljuden för blocket man nu står på
        let slumpindex = Math.floor(ljudalternativ.length * Math.random()); //slumpa fram ett
        ljudid = ljudalternativ[slumpindex];
        ljudid.play(); //spela det

    }
    setTimeout(ljudFranGolv, ljudid.duration * 1000); //när det är klart, kör om processen
}


function rita() {
    for(let figur of document.getElementsByClassName("figur"))
        figur.classList.add("dold");
    if(irorelse)
        document.getElementById("figur" + riktning)
        .classList.remove("dold");
    else
        document.getElementById("figur" + riktning + "stilla")
        .classList.remove("dold");
    uppdateraBreddHojd();
    p.clearRect(0, 0, spelplan.width, spelplan.height);
    let startX = mitten[0] - (bredd / ruta) / 2;
    let startY = mitten[1] - (hojd / ruta) / 2;
    for(let x = Math.floor(startX); varlden.length > x; x++) {
        for(let y = Math.floor(startY); varlden[0].length > y; y++) {
            if(x >= 0 && y >= 0) {
                let bild = bilderdata[varlden[x][y]];
                if(bild !== undefined) {
                    p.drawImage(bild, (x - startX) * ruta, (y - startY) * ruta, ruta, ruta);
                } else {
                    p.drawImage(saknas, (x - startX) * ruta, (y - startY) * ruta, ruta, ruta);
                    p.strokeText("ID saknas: " + varlden[x][y], (x - startX) * ruta, (y - startY) * ruta + 10);
                }
                //p.strokeText(x + ", " + y, (x - startX) * ruta, (y - startY) * ruta);

            }
        }
    }
    for(let varelse of varelser) {
        if(varelse.x >= startX && varelse.y >= startY) {
            if(varelse.id >= 0 && varelse.id < entiteter.length) {
                let bild = new Image();
                bild.src = entiteter[varelse.id].rorelse ? entiteter[varelse.id].texturer.rorelse[varelse.riktning] : entiteter[varelse.id].texturer.stilla[varelse.riktning];
                p.drawImage(bild, (varelse.x - startX) * ruta, (varelse.y - startY) * ruta, ruta, ruta);
            }
            else {
                p.drawImage(saknas, (varelse.x - startX) * ruta, (varelse.y - startY) * ruta, ruta, ruta);
                p.strokeText("Entitet saknas: " + varelse.id, (varelse.x - startX) * ruta, (varelse.y - startY) * ruta, ruta, ruta);
            }
        }
    }
    
    if(varlden[block[0]][block[1]] === 0) {
        rorelsepa = false;
        for(let figur of document.getElementsByClassName("figur"))
            figur.classList.add("faller");
        document.getElementById("oof")
            .play();
        setTimeout(dog, 5000);
    }

    if(skuggor) {
        s.fillRect(0, 0, bredd, hojd);
        s.globalCompositeOperation = "destination-out";
        s.arc((mitten[0] - startX) * ruta, (mitten[1] - startY) * ruta, synfalt * ruta, 0, 2 * Math.PI);
        s.fill();
        s.globalCompositeOperation = "source-over";
        let vaggarKoord = [];
        start: for(let x = 0; varlden.length > x; x++) {
            for(let y = 0; varlden[0].length > y; y++) {
                if(vaggar.includes(varlden[x][y])) {
                    vaggarKoord.push([x, y]);
                }
            }
        }

        let detalj = 0.25;
        let persX;
        let persY;
        let vaggX;
        let vaggY;
        let minX;
        let minY;
        let maxX;
        let maxY;
        for(let x = block[0] - synfalt; x <= block[0] + synfalt + 1; x += detalj) {
            for(let y = block[1] - synfalt; y <= block[1] + synfalt + 1; y += detalj) {
                persX = mitten[0];
                persY = mitten[1];

                for(let vagg of vaggarKoord) {
                    vaggX = vagg[0];
                    vaggY = vagg[1];
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

function dog() {
    window.location.reload();
}

function interagera() {
    let x = block[0];
    let y = block[1];
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
    if(blocks[varlden[x][y]].interaktion.typ === "bli-block") {
        varlden[x][y] = blocks[varlden[x][y]].interaktion.varde;
    }
    rita();
    
}

function meddelanderuta(meddelande) {
    if(meddelandeSkrivs) {
        setTimeout(meddelanderuta, 1000, meddelande);
        return;
    }
    if(meddelande.length < 30)
        document.getElementById("meddelanderuta")
        .style.lineHeight = "100px";
    else
        document.getElementById("meddelanderuta")
        .style.lineHeight = "initial";
    meddelande = meddelande.replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/nyrad/g, "<br>");
    document.getElementById("meddelanderuta")
        .style.display = "block";
    document.getElementById("meddelanderuta")
        .innerHTML = "";
    skrivmaskin(meddelande, 0);

}

function skrivmaskin(meddelande, gang) {
    meddelandeSkrivs = true;
    document.getElementById("meddelanderuta")
        .innerHTML += meddelande.charAt(gang);
    if(gang <= meddelande.length)
        setTimeout(skrivmaskin, 100, meddelande, gang + 1);
    else
        setTimeout(function() {
            document.getElementById("meddelanderuta")
                .style.display = "none";
            meddelandeSkrivs = false;
        }, 3000);
}

function testmeddelande(meddelande) {
    document.getElementById("meddelanderuta")
        .innerHTML += meddelande + "<br>";
    document.getElementById("meddelanderuta")
        .style.display = "block";
    document.getElementById("meddelanderuta")
        .style.overflow = "scroll";
    document.getElementById("meddelanderuta")
        .style.height = "30vh";
}

function linjerKorsar(x1, y1, x2, y2, x3, y3, x4, y4) {

    // calculate the distance to intersection point
    let uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
    let uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

    // if uA and uB are between 0-1, lines are colliding
    if(uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
        return true;
    }
    return false;
}

function linjeRektangelKorsar(x1, y1, x2, y2, rx, ry, rw, rh) {

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
    bilderdata[bilderdata.length - 1].onload = rita;
}

function uppdateraVarelser() {
    if(!meddelandeSkrivs && !stridPagar) {
        for(let varelse of varelser) {
            let dx = (Math.random() * 2 - 1) * 0.2;
            let dy = (Math.random() * 2 - 1) * 0.2;
            varelse.x += dx;
            varelse.y += dy;
            
            if(varelse.strid && Math.sqrt(Math.pow(varelse.x - mitten[0], 2) + Math.pow(varelse.y - mitten[1], 2)) <= 1) {
                meddelanderuta("Hans Yolo VS. " + entiteter[varelse.id].namn);
                stridPagar = true;
                paborjaStrid(varelse);
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
            document.getElementById("figur")
                .classList.add("faller");
            document.getElementById("oof")
                .play();
            setTimeout(function() {
                rorelsepa = true;
            }, 5000);
        }
        if(fuskkod === "jorge")
            alert("Du vann!\n\nGrattis till din vinst. Du fick 24834 poäng. Din placering i världstopplistan är 1:a.");
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
            rita();
        }
        if(fuskkod === "minecraft")
            bilderdata[1].src = "https://lh3.googleusercontent.com/r6hcRC36CzWCl30MUbabHMUI_KT_yFarwA2bFmBMnvYJ4KpesmjTQvGM_-5rn64JbJYzQRf7N8rYrm0q_BE";
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
        if(fuskkod.substr(0, 5) === "strid") {
            let varelsen = Number(fuskkod.substring(6));
            varelser.push({
                id: varelsen,
                x: mitten[0],
                y: mitten[1],
                riktning: 0,
                rorelse: false,
                strid: true,
                utrustning: []
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
                utrustning: []
            });
        if(fuskkod === "dark hater")
            skuggor = !skuggor;
        if(fuskkod === "arsenik") {
            varelser = [];
            rita();
            meddelanderuta("Tips från kemiläraren: ta bort allt hår så lämnar du inga spår!");
        }
        if(fuskkod === "tillbax") {
            document.getElementById("strid").style.display = "none";
            document.getElementById("spela-varlden").style.display = "block";
        }
        if(fuskkod === "ti84")
            meddelanderuta("Plebräknare");
        if(fuskkod === "story!!!") {
            story = true;
            mitten = [8, 6];
            block = [8, 6];
            varelser.push({
                id: 0,
                x: 5,
                y: 10,
                riktning: 0,
                rorelse: false,
                strid: true,
                utrustning: []
            });
            varelser.push({
                id: 0,
                x: 3,
                y: 11,
                riktning: 0,
                rorelse: false,
                strid: true,
                utrustning: []
            }); 
            varelser.push({
                id: 0,
                x: 4,
                y: 12,
                riktning: 0,
                rorelse: false,
                strid: true,
                utrustning: []
            });
            varelser.push({
                id: 0,
                x: 4,
                y: 10,
                riktning: 0,
                rorelse: false,
                strid: true,
                utrustning: []
            });
            rita();
            meddelanderuta("Walk around the corner using ←↑→↓");
            let vantId;
            vantId = setInterval(function() {
                if(mitten[0] <= 6 && mitten[1] >= 7) {
                    meddelanderuta("Oh no 4 edvans. Press spacebar to fire weapon.");
                    clearInterval(vantId);
                }
            }, 10);
        }

}
let vanta;
let mojligaAttacker = [];
function paborjaStrid(varelse, inventory) {
    document.getElementById("spela-varlden").style.display = "none";
    document.getElementById("strid").style.display = "block";
    document.getElementById("motstandare").src = entiteter[varelse.id].texturer.stilla[1];
    
    setTimeout(function() {
        document.getElementById("meddelanderuta").style.display = "none";
        document.getElementById("stridalternativ").style.display = "block";
    }, 4000);
    
    laddaAttackalternativ(inventory, varelse);
    uppdateraHalsoindikatorer(varelse);
    
    
}
function laddaAttackalternativ(forrad, varelse) {
    /*
    Attackalternativ för spelaren
    */
    for(let knapp of document.getElementsByClassName("attacknapp"))
        knapp.style.display = "none";
    let aktuelltIndex = 1;
    for(let attack of resurser.attacker) {
        let harUtrustning = true;
        for(let vapen of attack.vapen) {
            if(!forrad.includes(vapen)) {
                harUtrustning = false;
                break;
            }
        }
        if(harUtrustning) {
            let knapp = document.getElementById("attack" + aktuelltIndex);
            knapp.innerHTML = attack.namn;
            knapp.style.display = "inline";
            knapp.onclick = function() { korAttack(attack.namn, true, varelse); }
            aktuelltIndex++;
        }
    }
    
    /*
    Attackalternativ för varelsen
    */
    
    for(let attackalternativ of resurser.entiteter[varelse.id].attacker) {
        let valbart = true;
        for(let kravtVapen of attackMedNamn(attackalternativ).vapen) {
            if(!varelse.utrustning.includes(kravtVapen)) {
                valbart = false;
                break;
            }
        }
        if(valbart)
            mojligaAttacker.push(attackMedNamn(attackalternativ));
    }
}

function korAttack(namn, arSpelare, varelse) {
    let sag;
    if(arSpelare)
        sag = "Hans Yolo used " + namn;
    else
        sag = resurser.entiteter[varelse.id].namn + " used " + namn;
    meddelanderuta(sag);
    vanta = 3000 + 100 * sag.length;
    
    
    let attackLyckad = attackMedNamn(namn).sannolikhet >= Math.random();
    let superEffective = attackMedNamn(namn).supereffective >= Math.random();
    
    let halsoForlustSpelare = arSpelare ? 0 : attackLyckad ? attackMedNamn(namn).skada : 0; 
    let halsoForlustMotstandare = !arSpelare ? 0 : attackLyckad ? attackMedNamn(namn).skada : 0;
    
    if(superEffective) {
        halsoForlustSpelare *= 1.25;
        halsoForlustMotstandare *= 1.25;
    }
    let animera = "hans-strid";
    let klass = "nada";
    let bild = "";
    let textur = attackMedNamn(namn).animation.textur;
    if(attackMedNamn(namn).animation.typ === "spring") {
        animera = arSpelare ? "hans-strid-behallare" : "motstandare-behallare";
        klass = arSpelare ? "lop-hoger" : "lop-vanster";
        bild = arSpelare ? "hans-strid-vapen" : "motstandare-vapen";
        document.getElementById(bild).classList.add("snurra");
        setTimeout(function() {
            document.getElementById(bild).classList.remove("snurra");
        }, 1000);
    }
    else if(attackMedNamn(namn).animation.typ === "skott") {
        animera = "kula";
        klass = arSpelare ? "skjut-hoger" : "skjut-vanster";
        bild = "kula";
    }
    else if(attackMedNamn(namn).animation.typ === "magi") {
        animera = arSpelare ? "hans-strid" : "motstandare";
        klass = "faller";
    }
    document.getElementById(animera).classList.add(klass);
    if(bild !== "")
        document.getElementById(bild).src = textur;
    setTimeout(function() {
        document.getElementById(animera).classList.remove(klass);
        halsa = halsa - halsoForlustSpelare < 0 ? 0 : halsa - halsoForlustSpelare;
        varelse.halsa = varelse.halsa - halsoForlustMotstandare < 0 ? 0 : varelse.halsa - halsoForlustMotstandare;
        uppdateraHalsoindikatorer(varelse);
    }, 1000);
    
    if(!attackLyckad) {
        sag = "Attack missed.";
        meddelanderuta(sag);
        vanta += sag.length + 3000;
    }
    else if(superEffective) {
        sag = "It's super effective!";
        meddelanderuta(sag);
        vanta += sag.length + 3000;
    }

        
    
    setTimeout(function() {
        if(arSpelare && halsa !== 0 && varelse.halsa !== 0)
            korAttack(mojligaAttacker[Math.floor(Math.random() * mojligaAttacker.length)].namn, false, varelse);
    }, vanta);
    
}

function uppdateraHalsoindikatorer(varelse) {
    document.getElementById("halsaSpelare").style.width = halsa + "%";
    document.getElementById("halsaMotstandare").style.width = (varelse.halsa / entiteter[varelse.id].halsa * 100) + "%";
    
    document.getElementById("halsatextSpelare").innerHTML = halsa + "&nbsp;/&nbsp;100";
    document.getElementById("halsatextMotstandare").innerHTML = varelse.halsa + "&nbsp;/&nbsp;" + entiteter[varelse.id].halsa;
    
    if(halsa == 0) {
        meddelanderuta("You died.  ):       ");
        vanta += 3150;
        setTimeout(function() { window.location.reload() }, 10000);
        document.getElementById("hans-strid").classList.add("dod");
    }
    if(varelse.halsa == 0) {
        document.getElementById("motstandare").classList.add("dod");
        meddelanderuta("Hans Yolo defeated " + resurser.entiteter[varelse.id].namn + "!");
        vanta += 3400;
        varelser.splice(varelser.indexOf(varelse), 1);
        setTimeout(function() {
            document.getElementById("strid").style.display = "none";
            document.getElementById("spela-varlden").style.display = "block";
            stridPagar = false;
            document.getElementById("motstandare").classList.remove("dod");
            nyborjare = false;
            
            for(let vapen of varelse.utrustning) {
                if(!utrustning.includes(vapen)) {
                    utrustning.push(vapen);
                    meddelanderuta("Hans Yolo acquired " + vapen + "!");
                }
            }
            
            if(utrustning.includes("Toothbrush")) {
                utrustning.splice(utrustning.indexOf("Toothbrush"), 1);
                meddelanderuta("Oh snap! Hans Yolo's toothbrush broke!");
            }
            
        }, vanta);
    }
}
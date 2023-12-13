let homeStoreEl =document.getElementById("home-score")
let guestStoreEl =document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0
let green1 =  "2px 0 #00ff00, -2px 0 #00ff00, 0 2px #00ff00, 0 -2px #00ff00, " +
              "1px 1px #00ff00, -1px -1px #00ff00, 1px -1px #00ff00, -1px 1px #00ff00";

function increment(n,team){
    
    if (team=="h") {
        homeScore += n
         homeStoreEl.textContent = homeScore
    } else {
        guestScore += n
        guestStoreEl.textContent = guestScore
    }
    if (homeScore > guestScore) {
         homeStoreEl.style.textShadow = green1;
         guestStoreEl.style.textShadow = ""; // Remove textShadow from the other element
    } else if (homeScore < guestScore) {
         guestStoreEl.style.textShadow = green1;
         homeStoreEl.style.textShadow = ""; // Remove textShadow from the other element
    } else {
         // Scores are equal, add yellow text shadow to both elements
        guestStoreEl.style.textShadow =
            "2px 0 #ffff00, -2px 0 #ffff00, 0 2px #ffff00, 0 -2px #ffff00, " + "1px 1px #ffff00, -1px -1px #ffff00, 1px -1px #ffff00, -1px 1px #ffff00";
            homeStoreEl.style.textShadow = guestStoreEl.style.textShadow;
    }
}

function reset() {
    homeScore = 0
    guestScore = 0
    homeStoreEl.textContent = homeScore
    guestStoreEl.textContent = guestScore
    homeStoreEl.style.textShadow = ""
    guestStoreEl.style.textShadow = ""
}
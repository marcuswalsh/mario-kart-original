// Initializes items quantities
let shells = 0;
let mushrooms = 0;
let stars = 0;
let bullets = 0;
let bananas = 0;

// Checks for user input
document.getElementById('oneItemBtn').addEventListener('click', generateItem);

function generateItem() {
    // Gathers necessary information to generate item
    let racerPosition = document.getElementById('racerPosition').value;
    let randNum = Math.random();
    //Updates items count
    let totalItems = Number(document.getElementById('totalItems').innerHTML);
    //Racer positions 1-6
    if(racerPosition<=6 && racerPosition>=1){
        if(randNum<=0.01) {
            document.getElementById('currentItem').innerHTML = 'Bullet Bill';
            bullets += 1;
            document.getElementById('bulletAmount').innerHTML = bullets;
        } else if(randNum>0.01 && randNum<=0.05){
            document.getElementById('currentItem').innerHTML = 'Golden Mushroom';
            mushrooms += 1;
            document.getElementById('mushroomAmount').innerHTML = mushrooms;
        } else if(randNum>0.05 && randNum<=0.20){
            document.getElementById('currentItem').innerHTML = 'Star';
            stars += 1;
            document.getElementById('starAmount').innerHTML = stars;
        } else if(randNum>0.20 && randNum<=0.55){
            document.getElementById('currentItem').innerHTML = 'Green Shell';
            shells += 1;
            document.getElementById('shellAmount').innerHTML = shells;
        } else if(randNum>0.55){
            document.getElementById('currentItem').innerHTML = 'Banana';
            bananas += 1;
            document.getElementById('bananaAmount').innerHTML = bananas;
        }
        totalItems +=1;
        document.getElementById('totalItems').innerHTML = totalItems;
    //Racer positions 7-12
    } else if (racerPosition<=12 && racerPosition>6){
        if(randNum<=0.05) {
            document.getElementById('currentItem').innerHTML = 'Banana';
            bananas += 1;
            document.getElementById('bananaAmount').innerHTML = bananas;
        } else if(randNum>0.05 && randNum<=0.1){
            document.getElementById('currentItem').innerHTML = 'Green Shell';
            shells += 1;
            document.getElementById('shellAmount').innerHTML = shells;
        } else if(randNum>0.1 && randNum<=0.35){
            document.getElementById('currentItem').innerHTML = 'Star';
            stars += 1;
            document.getElementById('starAmount').innerHTML = stars;
        } else if(randNum>0.35 && randNum<=0.7){
            document.getElementById('currentItem').innerHTML = 'Golden Mushroom';
            mushrooms += 1;
            document.getElementById('mushroomAmount').innerHTML = mushrooms;
        } else if(randNum>0.7){
            document.getElementById('currentItem').innerHTML = 'Bullet Bill';
            bullets += 1;
            document.getElementById('bulletAmount').innerHTML = bullets;
        }
        totalItems +=1;
        document.getElementById('totalItems').innerHTML = totalItems;
    // Discounts numbers greater than 12 or less than 1
    } else {
        alert('Invalid Racer Position');
    }
    
}
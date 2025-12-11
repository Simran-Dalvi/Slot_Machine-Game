const prompt = require("prompt-sync")();

const ROWS= 3;
const COLS =3;

const SYMBOL_COUNT={
    "A":3,
    "B":4,
    "C":6,
    "D":8
    
};

const SYMBOL_VALUE={
    "A":8,
    "B":5,
    "C":2,
    "D":1
    
};

const deposit =()=>{
    while (true){
        const deposit = prompt("Enter a deposit amount: ");
        const amount = parseFloat(deposit);
        if (isNaN(amount) || amount <=0){
            console.log("Invalid deposit amount,try again.");
        }
        else {
            return amount;
        }
    }
};
const betOnLines = ()=>{
    while (true){
        const bettingLines = prompt("Enter the number of lines you want to bet on (1-3): ");
        const lines = parseFloat(bettingLines);
        if (isNaN(lines) || lines <=0 || lines >3){
            console.log("Invalid number of lines,try again.");
        }
        else {
            return lines;
        }
    }
};

const bettingAmount = (balance,line) =>{
    while (true){
        const bettingAmnt = prompt("Enter the amount you want to bet with: ");
        const bet = parseFloat(bettingAmnt);
        if (isNaN(bet) || bet <=0 || bet > balance/line){
            console.log("Invalid bet amount,try again.");
        }
        else {
            return bet;
        }
    }
};


// spinning the wheel
const spin=()=>{
    const symbols =[];
    for (const [symbol,count] of Object.entries(SYMBOL_COUNT)){
        for (let i=0;i<count;i++){
            symbols.push(symbol);
        }
    }
    const reels=[];
    for (let i=0;i<COLS;i++){
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j=0;j<ROWS;j++){
            const randomIndex = Math.floor(Math.random()*reelSymbols.length);
            const selectedSymbol =reelSymbols[randomIndex];
            reels[i].push(selectedSymbol)
            reelSymbols.splice(randomIndex,1)
        }
    }

    return reels;
};

// we need to transpose and pretify the reels for humans to understand
const transpose =(spun)=>{
    const correctReel=[];
    for (let i =0;i<ROWS;i++){
        correctReel.push([]);
        for (let j=0;j<COLS;j++){
            correctReel[i].push(spun[j][i]);
        }
    }
    return correctReel;

}

// print the reel so people can read
const printReel =(reel)=>{
    for (const row of reel){
        let rowString ="";
        for (const[i,symbol] of row.entries()){
            rowString += symbol;
            if (i != row.length -1){
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
}


const getWinnings =(bet,lines,reel)=>{
    let winning=0
    for (let row=0;row<lines;row++){
        const symbols=reel[row];
        let allSame= true;
        const firstSymbol =symbols[0];
        for (const symbol of symbols){
            if (symbol!= firstSymbol){
                allSame=false;
                break;
            }
        }
        if (allSame){
            winning += bet*SYMBOL_VALUE[firstSymbol]
        }
    }
    return winning
}

const game =()=>{
    let balance =deposit();
    while (true){
        console.log("Your balance is $" + balance);
        const lines = betOnLines();
        const bet = bettingAmount(balance,lines);
        balance -= (bet*lines);
        const spun = spin();
        const reel=transpose(spun);
        printReel(reel);
        const won = getWinnings(bet,lines,reel);
        balance +=won;
        console.log("you have won $" +  won.toString());

        if (balance <=0){
            console.log("You ran out of money ;-(")
            break;
        }
        const playAgain = prompt("Do you want to play again (y/n) ? ");

        if (playAgain !="y") break;
    }
}

game();

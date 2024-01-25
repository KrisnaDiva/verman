// var plain = "MILAN";
// var key = "INTER";
const verman= (plain,key)=>{
    var notes = [];
    for(var i=65;i<=90;i++){
        notes.push(String.fromCharCode(i));
    }
    var tempPlain=[];
    var tempKey=[];
    var chiper=[];
    console.log("--------------Proses Enkrip--------------");
    for(var i=0;i<plain.length;i++){
        tempPlain.push(notes.indexOf(plain[i]));
    
        console.log(`${plain[i]} = ${tempPlain[i]} -> ${tempPlain[i].toString(2)}`);
    
        tempKey.push(notes.indexOf(key[i]));
    
        console.log(`${key[i]} = ${tempKey[i]} -> ${tempKey[i].toString(2)}`);
    
        chiper.push((tempPlain[i]^tempKey[i]) % 26);
    
        console.log(`Chiper -> ${(tempPlain[i]^tempKey[i]).toString(2)} = ${tempPlain[i]^tempKey[i]} mod 26 = ${chiper[i]} -> ${notes[chiper[i]]}`);
    
        console.log("-----------------------------------------");
    }
    console.log("--------------Proses Dekrip--------------");
    for(var i=0;i<plain.length;i++){
        console.log(`${notes[chiper[i]]} = ${chiper[i]} -> ${(tempPlain[i]^tempKey[i]).toString(2)}`);
    
        console.log(`${key[i]} = ${tempKey[i]} -> ${tempKey[i].toString(2)}`);
    
        console.log(`Plain -> ${((tempPlain[i]^tempKey[i])^tempKey[i]).toString(2)} = ${(tempPlain[i]^tempKey[i])^tempKey[i]} mod 26 = ${((tempPlain[i]^tempKey[i])^tempKey[i]) % 26} -> ${notes[((tempPlain[i]^tempKey[i])^tempKey[i]) % 26]}`);
        console.log("-----------------------------------------");
    }
}

let personName :string = "YUMNA";
  
let LowerCase : string = personName.toLowerCase();
let UpperCase : string = personName.toUpperCase();
let TitleCase : string = personName.split(``).map(word =>word.charAt(0).toUpperCase()+
word.slice(1).toLowerCase()).join(` `)


 if(personName !== null && personName !== ``){
    console.log(`Hello ${personName},here are your name in :
    LowerCase : ${LowerCase}
    UpperCase : ${UpperCase}
    TitleCase : ${TitleCase}`)
 }
 else {
    console.log(`Please fill your name ! `)  ; 
 }

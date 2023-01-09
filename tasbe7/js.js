//document.getElementById("counterTXT").innerText=5;
let counter=1;
let counterby100=0;
console.log(counter);
function increment(){
    if(tasbe7TXT.innerText=="سبحان الله")
    {
        tasbe7TXT.innerText="الحمد لله";
    }
    else if(tasbe7TXT.innerText=="الحمد لله")
    {
        tasbe7TXT.innerText="الله اكبر";
    }
    else if(tasbe7TXT.innerText=="الله اكبر")
    {
        tasbe7TXT.innerText="سبحان الله"
    }
    else if(tasbe7TXT.innerText=="لا اله الا الله وحده لا شريك له ,له الملك وله الحمد وهو على كل شيء قدير")
    {
        tasbe7TXT.innerText="سبحان الله"
    }
    
    if(counter<100)
    {
        counter++;
    }
    else
    {
        counterby100+=100;
        totalcounterTXT.innerText=counterby100;
        counter=1;
    }

    if(counter==100)
    {
        tasbe7TXT.innerText="لا اله الا الله وحده لا شريك له ,له الملك وله الحمد وهو على كل شيء قدير"
    }
    counterTXT.innerText=counter;
}
function reset(){
    counter=1;
    savedTXT.innerText+=` ${counterby100}  - `;
    counterby100=0;
    totalcounterTXT.innerText=0;
    counterTXT.innerText=1;
    tasbe7TXT.innerText="سبحان الله"

}
x=document.getElementById("savedTXT")
console.log(x);


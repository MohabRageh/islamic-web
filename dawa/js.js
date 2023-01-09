let persons=[];
persons.push(
    {
        Name:"محمد الغليظ",
        Age:"غير معروف",
        Facebook:"sssss",
        Youtube:"ssssssss",
        img:`<img src="../imgs/8alez.jpg" width="100%" height="100%" id="0">`,
    }
    )//el8leez
persons.push(
    {
        Name:"امير منير",
        Age:"35 ",
        Facebook:"sssss",
        Youtube:"ssssssss",
        img:`<img src="../imgs/amirmonir.jpg"  width="100%" height="100%" id="1">`
    }
)//amirmonir
persons.push(
    {
        Name:"ابو اسحاق الحويني",
        Age:"66 ",
        Facebook:"sssss",
        Youtube:"ssssssss",
        img:`<img src="../imgs/aboes7a2.jpg"  width="100%" height="100%" id="2">`
    }
)//aboes7a2
persons.push(
    {
        Name:"مصطفي العدوي",
        Age:"68 ",
        Facebook:"sssss",
        Youtube:"ssssssss",
        img:`<img src="../imgs/eladawy.jpg"  width="100%" height="100%" id="3">`
    }
)//eladawy
persons.push(
    {
        Name:"eldawy",
        Age:"48",
        Facebook:"sssss",
        Youtube:"ssssssss",
        img:`<img src="../imgs/section4.jpg"  width="100%" height="100%" id="4">`
    }
)//eldawy
persons.push(
    {
        Name:"7weny",
        Age:"48",
        Facebook:"sssss",
        Youtube:"ssssssss",
        img:`<img src="../imgs/section3.jpg"  width="100%" height="100%" id="3">`
    }
)//7weny
persons.push(
    {
        Name:"7weny",
        Age:"48",
        Facebook:"sssss",
        Youtube:"ssssssss",
        img:`<img src="../imgs/section3.jpg"  width="100%" height="100%" id="3">`
    }
)//7weny
persons.push(
    {
        Name:"7weny",
        Age:"48",
        Facebook:"sssss",
        Youtube:"ssssssss",
        img:`<img src="../imgs/section3.jpg"  width="100%" height="100%" id="3">`
    }
)//7weny
console.log(persons);
function start()
{
firstPerson.innerHTML=persons[0].img;
secondPerson.innerHTML=persons[1].img;
thirdPerson.innerHTML=persons[2].img;
fourthPerson.innerHTML=persons[3].img;
}
start();
function firstOne()
{
    x =document.getElementById("firstPerson").getElementsByTagName("img")[0].id;
    return(x); 
}
function R_button()
{
    let z=firstOne();
    z=parseInt(z);
    if(z+4<persons.length)
    {
    console.log(z);
    firstPerson.innerHTML=persons[z+1].img;
    secondPerson.innerHTML=persons[z+2].img;
    thirdPerson.innerHTML=persons[z+3].img;
    fourthPerson.innerHTML=persons[z+4].img;
    }
}
function L_button()
{
    let z=firstOne();
    z=parseInt(z);
    if(z>0)
    {
    firstPerson.innerHTML=persons[z-1].img;
    secondPerson.innerHTML=persons[z].img;
    thirdPerson.innerHTML=persons[z+1].img;
    fourthPerson.innerHTML=persons[z+2].img;
    }
}
function imgClicked(p)
{
    x =document.getElementById(p).getElementsByTagName("img")[0].id;
    console.log(persons[x]);
    main.innerHTML=
    `
        <div>${persons[x].img}</div>
        <div>
        <h1>Name:  ${persons[x].Name}</h1>
        <h1>Age:  ${persons[x].Age}</h1>
        <h1><a href="${persons[x].Facebook} " target="_blank">FaceBook</a></h1>
        <h1><a href="${persons[x].Youtube} " target="_blank">YouTube Chanel</a></h1>
        </div>
        
    `
    
}









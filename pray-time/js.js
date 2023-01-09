function praytime(t)
{
    if(t===1)
    {
        midDiv.innerHTML=
        `
        <h1> صلاة الفجر</h1>
        موعد الصلاة => 4:37
        <br>
        <br>
        الوقت المتبقي => 0
        <br>
        <br>
        السنن : ركعتان قبل 
        `
    }
    else if(t===2)
    {
        midDiv.innerHTML=
        `
        موعد الصلاة => 11:30
        <br>
        <br>
        الوقت المتبقي => 11:30
        <br>
        <br>
        
        السنن : ركعتان قبل 
        `
    }
    else if(t===3)
    {
        midDiv.innerHTML=
        `
        موعد الصلاة => 14:30
        <br>
        <br>
        الوقت المتبقي => 13:30
        <br>
        <br>
        
        السنن : ركعتان قبل 
        `
    }
    else if(t===4)
    {
        midDiv.innerHTML=
        `
        موعد الصلاة => 23:30
        <br>
        <br>
        الوقت المتبقي => 1:30
        <br>
        <br>
        
        السنن : ركعتان قبل 
        `
    }
    else if(t===5)
    {
        midDiv.innerHTML=
        `
        موعد الصلاة => 24:30
        <br>
        <br>
        الوقت المتبقي => 1:30
        <br>
        <br>
        
        السنن : ركعتان قبل 
        `
    }
}
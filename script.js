const generator=()=>
    {
        let chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let captcha_length=6;
        let Captcha="";
        for(let i=0;i<captcha_length;i++)
        {
            let randomIndex=Math.floor(Math.random()*chars.length);
            Captcha+=chars.charAt(randomIndex);
        }
        document.getElementById("Captcha").innerHTML=Captcha;
    }
    generator();

    const validate=()=>
    {
        let input=document.getElementById("Container_input").value;
        let Captcha=document.getElementById("Captcha").innerHTML;
        let result_text=document.getElementById("result");
        if(input==Captcha)
        {
            result_text.innerHTML="you! Enter value correctly.";
            result_text.style.color="green";
        }
        else{
            result_text.innerHTML="invalid,please try again.";
            result_text.style.color="red";
        }

    }
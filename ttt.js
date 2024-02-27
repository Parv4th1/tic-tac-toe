function play_ttt()
{
    c1 = document.getElementById("c1").value.toLowerCase();
    c2 = document.getElementById("c2").value.toLowerCase();
    c3 = document.getElementById("c3").value.toLowerCase();
    c4 = document.getElementById("c4").value.toLowerCase();
    c5 = document.getElementById("c5").value.toLowerCase();
    c6 = document.getElementById("c6").value.toLowerCase();
    c7 = document.getElementById("c7").value.toLowerCase();
    c8 = document.getElementById("c8").value.toLowerCase();
    c9 = document.getElementById("c9").value.toLowerCase();
    play1 = 'o'
    play2 = 'x'
    if((c1==play1 && c2==play1 && c3==play1)||(c4==play1 && c5==play1 && c6==play1)||(c7==play1 && c8==play1 && c9==play1)
        ||(c1==play1 && c4==play1 && c7==play1)||(c2==play1 && c5==play1 && c8==play1)||(c3==play1 && c6==play1 && c9==play1)
        ||(c1==play1 && c5==play1 && c9==play1)||(c3==play1 && c5==play1 && c7==play1))
    {
        document.getElementById("win-text").innerText = "O Wins!"
        lock();
    }
    if((c1==play2 && c2==play2 && c3==play2)||(c4==play2 && c5==play2 && c6==play2)||(c7==play2 && c8==play2 && c9==play2)
        ||(c1==play2 && c4==play2 && c7==play2)||(c2==play2 && c5==play2 && c8==play2)||(c3==play2 && c6==play2 && c9==play2)
        ||(c1==play2 && c5==play2 && c9==play2)||(c3==play2 && c5==play2 && c7==play2))
    {
        document.getElementById("win-text").innerText = "X Wins!"
        lock();
    }
    if(c1!="" &&c2!=""&&c3!=""&&c4!=""&&c5!=""&&c6!=""&&c7!=""&&c8!=""&&c9!="")
    {
        document.getElementById("win-text").innerText = "It's a tie!"
    }

}
flag = 0;
function fill_cell(cell)
{
    if(flag==0)
    {
        document.getElementById(cell).value = "O"
        document.getElementById(cell).disabled = true;
        flag = 1;
    }
    else
    {
        document.getElementById(cell).value = "X"
        document.getElementById(cell).disabled = true;
        flag = 0;
    }
}
function reset()
{
    document.getElementById("c1").value = document.getElementById("c2").value = document.getElementById("c3").value = document.getElementById("c4").value = document.getElementById("c5").value = document.getElementById("c6").value = document.getElementById("c7").value = document.getElementById("c8").value = document.getElementById("c9").value = "";
    document.getElementById("c1").disabled = document.getElementById("c2").disabled = document.getElementById("c3").disabled = document.getElementById("c4").disabled = document.getElementById("c5").disabled = document.getElementById("c6").disabled = document.getElementById("c7").disabled = document.getElementById("c8").disabled = document.getElementById("c9").disabled = false;
}
function lock()
{
    document.getElementById("c1").disabled = document.getElementById("c2").disabled = document.getElementById("c3").disabled = document.getElementById("c4").disabled = document.getElementById("c5").disabled = document.getElementById("c6").disabled = document.getElementById("c7").disabled = document.getElementById("c8").disabled = document.getElementById("c9").disabled = true;
}
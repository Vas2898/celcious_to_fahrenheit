function val(){
    const c =Number(document.getElementById('input').value);
    const f = c * (9/5)+32;
    const ans = document.getElementById('ans');
    ans.innerHTML = f.toFixed(2) + "Fahrenheit";

}



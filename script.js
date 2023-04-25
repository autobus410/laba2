//Чтобы чисто было
function clearDisplay()
{
    document.getElementById("result").value = "";
}
//Показывает, что да как
function display(value)
{
    document.getElementById("result").value += value;
}
//Главный математик этой шарашки
function calculate()
{
    let lol = document.getElementById("result").value;
    let kek = eval(lol);
    document.getElementById("result").value = kek;
}
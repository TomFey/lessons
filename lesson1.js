let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let appData = [
money,
time,
{},
{},
false
]
let q1 = prompt('Введите обязательную статью расходов в этом месяце');
//let q2 = prompt('Во сколько обойдется?')
appData[2][q1]=prompt('Во сколько обойдется?');
let q2 = prompt('Введите обязательную статью расходов в этом месяце');
appData[2][q2]=prompt('Во сколько обойдется?');
console.log('da')
alert((appData[0]-appData[2][q1]-appData[2][q2])/30)


let initMoney = 5000; // ввести первоначальную сумму
let numberPeople = 5 // ввести количество работников
let o = [5, 4, 3, 5, 2] // ввести оценку работников

let sumO = o.reduce((sum, current) => sum+current); // сумма всех оценок
let oAtPeople = sumO / numberPeople; // средняя оценка на работника

let moneyAtPeopleOnO = initMoney / oAtPeople; // средняя плата работнику
let stepMoney = moneyAtPeopleOnO / oAtPeople; // плата за один балл оценки
console.log(`moneyAtPeopleOnO: ${moneyAtPeopleOnO}`);
console.log(`stepMoney: ${stepMoney}`);

let stepsMoney = o.map(ball =>(ball - oAtPeople) * stepMoney);
let moneys = stepsMoney.map(step => step + moneyAtPeopleOnO);

console.log(`stepsMoney: ${stepsMoney}`);

let stringCheckInitMoney = moneys.reduce((sum, current) => {
    if(current > 0) return sum + ' + ' + current;
    else return sum + ' ' + current;
});
let checkNumberInitMoney = moneys.reduce((s, c) => s+c);

console.log(`${checkNumberInitMoney} == ${stringCheckInitMoney} ? `);

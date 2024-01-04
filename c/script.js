const student = [
    {
        name: 'John',
        paymant : 2500,
        age: 25
    },
    {
        name: 'Jane',
        paymant : 3000,
        age: 26
    },
    {
        name: 'Mary',
        paymant : 4000,
        age: 27
    },
    {
        name: `robel`,
        paymant : 5000,
        age: 28
    }
]

const student1 = student.map((rob) => rob.paymant > 2500)
console.log(student1);

const student2 = student.filter((rob) => rob.paymant * 0.2)

console.log(student2);
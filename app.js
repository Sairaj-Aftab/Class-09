const phoneBook = [
    {
        id       : 1,
        name     : 'Sairaj',
        location : 'Dhaka',
        phone    : '019******74'
    },
    {
        id       : 2,
        name     : 'Hasmat',
        location : 'Banani',
        phone    : '016******89'
    },
    {
        id       : 3,
        name     : 'Shahadat',
        location : 'Mirpur',
        phone    : '013******62'
    },
    {
        id       : 4,
        name     : 'Rahim',
        location : 'Chittagong',
        phone    : '017******52'
    },
    {
        id       : 5,
        name     : 'Karim',
        location : 'Uttara',
        phone    : '018******72'
    },
]



let jso = JSON.stringify(phoneBook)

localStorage.setItem('Phone Book', jso);

console.log(JSON.parse(localStorage.getItem('Phone Book')))

// ----------Students List---------------------

const student = [
    [01, 'Sairaj', 90, 95, 85, 80, 89, 92],
    [02, 'Aftab', 55, 80, 70, 88, 55, 89],
    [03, 'Saimon', 44, 66, 99, 80, 77, 90],
    [04, 'Shahadat', 90, 95, 35, 80, 89, 89],
    [05, 'Rahim', 90, 95, 39, 80, 89, 78],
    [06, 'Karim', 56, 87, 85, 80, 68, 88],
    [07, 'Rejaul', 54, 98, 65, 80, 99, 97],
    [08, 'Rashed', 53, 75, 82, 51, 89, 67],
    [09, 'Mostafa', 87, 93, 52, 80, 89, 99],
    [10, 'Korsed', 90, 95, 85, 80, 89, 78],
]

let stu = JSON.stringify(student)

localStorage.setItem('Student', stu);

console.log(JSON.parse(localStorage.getItem('Phone Book')))

// ------------------Developer List-----------------

const devs = [
    ['Sairaj', 2000, 'MERN Stack'],
    ['Santo', 2500, 'Laravel'],
    ['Robin', 3000, 'WordPress'],
    ['Aftab', 4000, 'GoLang'],
    ['Robel', 5000, 'JavaScript'],
    ['Shahed', 3000, 'Django'],
    ['Korim', 3500, 'WordPress'],
    ['Rohim', 4500, 'MERN Stack'],
    ['Shahadat', 3000, 'GoLang'],
    ['Saimon', 4000, 'Laravel'],
]

let dev = JSON.stringify(devs)

localStorage.setItem('Developer', dev);

console.log(JSON.parse(localStorage.getItem('Developer')))
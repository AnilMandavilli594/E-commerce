import bcrypt from 'bcryptjs';
const data = {
    users:[
        {
            name:'Anil',
            email:'mandavillianil@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {
            name:'Ajay',
            email:'user@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:false,
        },
    ],
    products:[
        {
            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'best quality',
        },
        {
            name:'Nike Shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price:130,
            countInStock:20,
            brand:'Nike',
            rating:5.0,
            numReviews:10,
            description:'best quality'
        },
        {
            name:'Adidas Slim Shirt',
            category:'Shirts',
            image:'/images/p3.jpg',
            price:100,
            countInStock:0,
            brand:'Adidas',
            rating:4.5,
            numReviews:10,
            description:'best quality'
        },
        {
            name:'Nike Slim pant',
            category:'pants',
            image:'/images/p4.jpg',
            price:90,
            countInStock:1,
            brand:'Nike',
            rating:4,
            numReviews:10,
            description:'best quality'
        },
        {
            name:'Nike pant',
            category:'pants',
            image:'/images/p5.jpg',
            price:80,
            countInStock:14,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'best quality'
        },
        {
            name:'Adidas slim Pant',
            category:'pants',
            image:'/images/p6.jpg',
            price:12,
            countInStock:25,
            brand:'Adidas',
            rating:2,
            numReviews:10,
            description:'best quality'
        },
    ]
}

export default data;
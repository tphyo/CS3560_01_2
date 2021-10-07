const data = {
    categories: [ // The Menu Categories include: Starters, Entrees, Side Orders, Beverages
        {
            name: 'Starters', 
            image: '/images/starters.jpg'
        },
        {
            name: 'Entrees', 
            image: '/images/entrees.jpg'
        },
        {
            name: 'Side Orders', 
            image: '/images/side_orders.jpg'
        },
        {
            name: 'Beverages', 
            image: '/images/beverages.jpg'
        },
    ],
    products: [ // Menu Items are listed here
        
        // STARTERS ITEMS
        {
            category: 'Starter',
            name: 'Fam\'s Salad',
            price: 8,
            calorie: 120,
            image:'/images/fam_salad.jpg',
        },
        {
            category: 'Starter',
            name: 'Spicy Shrim \& Pork Wonton',
            price: 10,
            calorie: 120,
            image:'/images/wonton.jpg',
        },
        {
            category: 'Starter',
            name: 'Popcorn Chicken',
            price: 7,
            calorie: 120,
            image:'/images/popcorn_chicken.jpg',
        },
        {
            category: 'Starter',
            name: 'Skinny Crispy Fries',
            price: 7,
            calorie: 120,
            image:'/images/fries.jpg',
        },
        {
            category: 'Starter',
            name: 'Chicken Wings',
            price: 11,
            calorie: 120,
            image:'/images/chicken_wings.jpg',
        },
        {
            category: 'Starter',
            name: 'Corn Cheese',
            price: 7.5,
            calorie: 120,
            image:'/images/corn_cheese.jpg',
        },
        {
            category: 'Starter',
            name: 'Spicy Noodle',
            price: 6,
            calorie: 120,
            image:'/images/spicy_noodle.jpg',
        },
        
        // ENTREES ITEMS
        {
            category: 'Entrees',
            name: 'Fam Combo',
            calorie: 120,
            price: 15,
            image: '/images/fam_combo.jpg',
        },
        {
            category: 'Entrees',
            name: 'Fried Rice',
            calorie: 120,
            price: 14,
            image: '/images/fried_rice.jpg',
        },
        {
            category: 'Entrees',
            name: 'House Garlic Noodles',
            calorie: 120,
            price: 15,
            image: '/images/house_garlic_noodles.jpg',
        },
        {
            category: 'Entrees',
            name: 'Stone Bowl Soup',
            calorie: 120,
            price: 15,
            image: '/images/stone_bowl_soup.jpg',
        },
        {
            category: 'Entrees',
            name: 'Saltado Shaken Fries',
            calorie: 120,
            price: 18,
            image: '/images/saltado_shaken_fries.jpg',
        },
        
        // SIDE ORDERS
        {
            category: 'Side Orders',
            name: 'Steam rice',
            calorie: 120,
            price: 1.5,
        },        
        
        // BEVERAGES
        {
            category: 'Beverages',
            name: 'Vietnamese Coffee',
            calorie: 120,
            price: 4,
            image: '/images/coffee.jpg',
        },
    ]
};

module.exports = data;

import { ADD_TO_CART, REMOVE_TO_CART } from "../types";

export const foodState = {
    foods: [
        {
            "id": 1,
            "img": "https://i.postimg.cc/wvCsZng2/breakfast1.png",
            "title": "Bagel And Cream Cheese",
            "shotDescription": "How to Dream About Your Future",
            "price": 9.5,
            "catagories": "breakfast",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 2,
            "img": "https://i.postimg.cc/hvV7BMGB/breakfast2.png",
            "title": "Breakfast sandwich",
            "shotDescription": "How to Dream About Your Future",
            "price": 18,
            "catagories": "breakfast",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 3,
            "img": "https://i.postimg.cc/gkPZD9Mk/breakfast3.png",
            "title": "Baked Chicken",
            "shotDescription": "How to Dream About Your Future",
            "price": 30,
            "catagories": "breakfast",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 4,
            "img": "https://i.postimg.cc/DydbpCDQ/breakfast4.png",
            "title": "Eggs Benedict",
            "shotDescription": "How to Dream About Your Future",
            "price": 8,
            "catagories": "breakfast",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 5,
            "img": "https://i.postimg.cc/pLW5wfbw/breakfast5.png",
            "title": "Toast Croissant Fried egg",
            "shotDescription": "How to Dream About Your Future",
            "price": 12,
            "catagories": "breakfast",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 6,
            "img": "https://i.postimg.cc/QN771NJy/breakfast6.png",
            "title": "Full Breakfast Fried Egg Toast Brunch",
            "shotDescription": "How to Dream About Your Future",
            "price": 14,
            "catagories": "breakfast",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 7,
            "img": "https://i.postimg.cc/4yvnMd84/lunch1.png",
            "title": "Healthy Meal Plan",
            "shotDescription": "How to Dream About Your Future",
            "price": 25,
            "catagories": "lunch",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 8,
            "img": "https://i.postimg.cc/3r2yWSKM/lunch2.png",
            "title": "Fred Chicken bento",
            "shotDescription": "How to Dream About Your Future",
            "price": 9,
            "catagories": "lunch",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 9,
            "img": "https://i.postimg.cc/m2wtyPz8/lunch3.png",
            "title": "Tarang-Rubbed-Salmon",
            "shotDescription": "How to Dream About Your Future",
            "price": 24,
            "catagories": "lunch",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 10,
            "img": "https://i.postimg.cc/HxXLcn10/lunch4.png",
            "title": "Indian Lunch",
            "shotDescription": "How to Dream About Your Future",
            "price": 6,
            "catagories": "lunch",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 11,
            "img": "https://i.postimg.cc/9fvMQTKF/lunch5.png",
            "title": "Beef Steak",
            "shotDescription": "How to Dream About Your Future",
            "price": 27,
            "catagories": "lunch",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 12,
            "img": "https://i.postimg.cc/Bv8b3NhV/lunch6.png",
            "title": "Thie Steak",
            "shotDescription": "How to Dream About Your Future",
            "price": 32,
            "catagories": "lunch",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 13,
            "img": "https://i.postimg.cc/RZZqsvw9/dinner1.png",
            "title": "Bagel And Cream Cheese",
            "shotDescription": "How to Dream About Your Future",
            "price": 9,
            "catagories": "dinner",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 14,
            "img": "https://i.postimg.cc/sxCvwS40/dinner2.png",
            "title": "Salmon with grapefruit salad",
            "shotDescription": "How to Dream About Your Future",
            "price": 4,
            "catagories": "dinner",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 15,
            "img": "https://i.postimg.cc/5tjY0ftp/dinner3.png",
            "title": "lemony salmon piccata",
            "shotDescription": "How to Dream About Your Future",
            "price": 38,
            "catagories": "dinner",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 16,
            "img": "https://i.postimg.cc/YCD0TTxF/dinner4.png",
            "title": "Pork tenderloin with quinoa",
            "shotDescription": "How to Dream About Your Future",
            "price": 23,
            "catagories": "dinner",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 17,
            "img": "https://i.postimg.cc/ZKZWN8RW/dinner5.png",
            "title": "French Fries with cheese",
            "shotDescription": "How to Dream About Your Future",
            "price": 50,
            "catagories": "dinner",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        },
        {
            "id": 18,
            "img": "https://i.postimg.cc/P5SvTCdP/dinner6.png",
            "title": "garlic Butter salmon",
            "shotDescription": "How to Dream About Your Future",
            "price": 9.5,
            "catagories": "dinner",
            "description": "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
        }
    ],
    cart: []
}
export const foodReducer = (state = foodState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }
        case REMOVE_TO_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id == action.payload)
            }
        default:
            return state;
    }
}
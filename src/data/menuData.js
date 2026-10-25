// ==========================================
// RESTAURANT MENU DATASET (200 DISTINCT ITEMS)
// Queen's Kitchen - Project 21
// Group G14-PID-11 (Front End Engineering - II)
// Authenticated Dishes with Accurate Culinary Photos
// ==========================================

export const INITIAL_CATEGORIES = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

// Base 9 Curated Items (Initial default view)
export const BASE_MENU_ITEMS = [
  {
    "id": 1,
    "name": "Cheesy Fries & Hot Sauce",
    "category": "Starters",
    "price": 150,
    "servingQty": "250g",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "/images/cheesy_fries.png"
  },
  {
    "id": 2,
    "name": "Dal Makhani",
    "category": "Main Course",
    "price": 180,
    "servingQty": "500g",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "/images/dal_makhani.png"
  },
  {
    "id": 3,
    "name": "Garlic Butter Naan",
    "category": "Main Course",
    "price": 60,
    "servingQty": "3 Pcs",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "/images/garlic_naan.png"
  },
  {
    "id": 4,
    "name": "Gulab Jamun with Ice Cream",
    "category": "Desserts",
    "price": 120,
    "servingQty": "2 Pcs + 1 Scoop",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "/images/gulab_jamun_icecream.png"
  },
  {
    "id": 5,
    "name": "Samosa and chutney",
    "category": "Starters",
    "price": 60,
    "servingQty": "2 Pcs",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "/images/samosa_chutney.png"
  },
  {
    "id": 6,
    "name": "Paneer Butter Masala",
    "category": "Main Course",
    "price": 270,
    "servingQty": "300g",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 7,
    "name": "Chicken Tikka Biryani",
    "category": "Main Course",
    "price": 300,
    "servingQty": "500g",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 8,
    "name": "Virgin Mojito",
    "category": "Beverages",
    "price": 120,
    "servingQty": "100ml",
    "dietary": "Vegan",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 9,
    "name": "Cold Coffee with Ice Cream",
    "category": "Beverages",
    "price": 150,
    "servingQty": "200ml",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80"
  }
];

// Complete 200 Distinct Items with Fair Realistic Prices,
// Portion Sizes, Dietary Badges, and High-Definition Authentic Images
export const FULL_200_MENU_ITEMS = [
  {
    "id": 1,
    "name": "Cheesy Fries & Hot Sauce",
    "category": "Starters",
    "price": 150,
    "servingQty": "250g",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "/images/cheesy_fries.png"
  },
  {
    "id": 2,
    "name": "Dal Makhani",
    "category": "Main Course",
    "price": 180,
    "servingQty": "500g",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "/images/dal_makhani.png"
  },
  {
    "id": 3,
    "name": "Garlic Butter Naan",
    "category": "Main Course",
    "price": 60,
    "servingQty": "3 Pcs",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "/images/garlic_naan.png"
  },
  {
    "id": 4,
    "name": "Gulab Jamun with Ice Cream",
    "category": "Desserts",
    "price": 120,
    "servingQty": "2 Pcs + 1 Scoop",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "/images/gulab_jamun_icecream.png"
  },
  {
    "id": 5,
    "name": "Samosa and chutney",
    "category": "Starters",
    "price": 60,
    "servingQty": "2 Pcs",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "/images/samosa_chutney.png"
  },
  {
    "id": 6,
    "name": "Paneer Butter Masala",
    "category": "Main Course",
    "price": 270,
    "servingQty": "300g",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 7,
    "name": "Chicken Tikka Biryani",
    "category": "Main Course",
    "price": 300,
    "servingQty": "500g",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 8,
    "name": "Virgin Mojito",
    "category": "Beverages",
    "price": 120,
    "servingQty": "100ml",
    "dietary": "Vegan",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 9,
    "name": "Cold Coffee with Ice Cream",
    "category": "Beverages",
    "price": 150,
    "servingQty": "200ml",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 10,
    "name": "Paneer Tikka Shashlik",
    "category": "Starters",
    "price": 240,
    "servingQty": "6 Pcs",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 11,
    "name": "Crispy Corn & Salt Pepper",
    "category": "Starters",
    "price": 180,
    "servingQty": "200g",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 12,
    "name": "Hara Bhara Kabab",
    "category": "Starters",
    "price": 190,
    "servingQty": "6 Pcs",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 13,
    "name": "Chicken Malai Tikka",
    "category": "Starters",
    "price": 290,
    "servingQty": "6 Pcs",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 14,
    "name": "Tandoori Chicken Wings",
    "category": "Starters",
    "price": 260,
    "servingQty": "6 Pcs",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 15,
    "name": "Chilli Paneer Dry",
    "category": "Starters",
    "price": 220,
    "servingQty": "250g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 16,
    "name": "Veg Spring Rolls",
    "category": "Starters",
    "price": 160,
    "servingQty": "4 Pcs",
    "dietary": "Vegan",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1548869206-93b036288d7e?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 17,
    "name": "Dahi Ke Kebab",
    "category": "Starters",
    "price": 210,
    "servingQty": "5 Pcs",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 18,
    "name": "Fish Amritsari Tikka",
    "category": "Starters",
    "price": 320,
    "servingQty": "250g",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 19,
    "name": "Mutton Seekh Kebab",
    "category": "Starters",
    "price": 340,
    "servingQty": "4 Skewers",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 20,
    "name": "Cheese Corn Balls",
    "category": "Starters",
    "price": 170,
    "servingQty": "6 Pcs",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 21,
    "name": "Aloo Tikki Chaat",
    "category": "Starters",
    "price": 110,
    "servingQty": "2 Pcs",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 22,
    "name": "Afghani Soya Chaap",
    "category": "Starters",
    "price": 230,
    "servingQty": "250g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 23,
    "name": "Chicken 65 Spicy",
    "category": "Starters",
    "price": 270,
    "servingQty": "250g",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 24,
    "name": "Loaded Nachos Supreme",
    "category": "Starters",
    "price": 190,
    "servingQty": "Platter",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 25,
    "name": "Garlic Bread with Mozzarella",
    "category": "Starters",
    "price": 150,
    "servingQty": "4 Slices",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 26,
    "name": "Falafel Plate with Hummus",
    "category": "Starters",
    "price": 210,
    "servingQty": "5 Pcs",
    "dietary": "Vegan",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 27,
    "name": "Mushroom Duplex Stuffed",
    "category": "Starters",
    "price": 240,
    "servingQty": "6 Pcs",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 28,
    "name": "Chicken Lollipop Schezwan",
    "category": "Starters",
    "price": 280,
    "servingQty": "6 Pcs",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 29,
    "name": "Honey Chilli Potato",
    "category": "Starters",
    "price": 160,
    "servingQty": "250g",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 30,
    "name": "Amritsari Paneer Pakora",
    "category": "Starters",
    "price": 180,
    "servingQty": "6 Pcs",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 31,
    "name": "Prawns Koliwada Fry",
    "category": "Starters",
    "price": 360,
    "servingQty": "8 Pcs",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 32,
    "name": "Steamed Veg Dim Sum",
    "category": "Starters",
    "price": 170,
    "servingQty": "6 Pcs",
    "dietary": "Vegan",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 33,
    "name": "Steamed Chicken Momos",
    "category": "Starters",
    "price": 190,
    "servingQty": "6 Pcs",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 34,
    "name": "Kurkure Fried Momos",
    "category": "Starters",
    "price": 210,
    "servingQty": "6 Pcs",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 35,
    "name": "Veg Bruschetta Pomodoro",
    "category": "Starters",
    "price": 180,
    "servingQty": "4 Pcs",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 36,
    "name": "Crispy Onion Bhaji",
    "category": "Starters",
    "price": 130,
    "servingQty": "4 Pcs",
    "dietary": "Vegan",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 37,
    "name": "Tangdi Kebab Roasted",
    "category": "Starters",
    "price": 310,
    "servingQty": "3 Legs",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 38,
    "name": "Peri Peri French Fries",
    "category": "Starters",
    "price": 130,
    "servingQty": "200g",
    "dietary": "Vegan",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 39,
    "name": "Cheese Jalapeno Poppers",
    "category": "Starters",
    "price": 190,
    "servingQty": "6 Pcs",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 40,
    "name": "Kadhai Soya Chaap Tikka",
    "category": "Starters",
    "price": 220,
    "servingQty": "250g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 41,
    "name": "Hariyali Fish Tikka",
    "category": "Starters",
    "price": 330,
    "servingQty": "250g",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 42,
    "name": "Veg Manchurian Dry",
    "category": "Starters",
    "price": 190,
    "servingQty": "250g",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 43,
    "name": "Chicken Angara Kebab",
    "category": "Starters",
    "price": 300,
    "servingQty": "6 Pcs",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 44,
    "name": "Paneer 65 Crispy",
    "category": "Starters",
    "price": 230,
    "servingQty": "250g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 45,
    "name": "Chicken Galouti Kebab",
    "category": "Starters",
    "price": 340,
    "servingQty": "4 Pcs",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 46,
    "name": "Veg Cutlet with Chutney",
    "category": "Starters",
    "price": 140,
    "servingQty": "3 Pcs",
    "dietary": "Veg",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 47,
    "name": "Bhatti Ka Murgh",
    "category": "Starters",
    "price": 320,
    "servingQty": "4 Pcs",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 48,
    "name": "Sesame Honey Chicken",
    "category": "Starters",
    "price": 290,
    "servingQty": "250g",
    "dietary": "Non-Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 49,
    "name": "Corn Cheese Toast",
    "category": "Starters",
    "price": 160,
    "servingQty": "4 Pcs",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 50,
    "name": "Mozzarella Sticks Golden",
    "category": "Starters",
    "price": 200,
    "servingQty": "5 Pcs",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 51,
    "name": "Butter Chicken Murgh Makhani",
    "category": "Main Course",
    "price": 320,
    "servingQty": "500g",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 52,
    "name": "Shahi Paneer Mughlai",
    "category": "Main Course",
    "price": 260,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 53,
    "name": "Kadhai Paneer Bellpepper",
    "category": "Main Course",
    "price": 250,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 54,
    "name": "Yellow Dal Tadka Desi Ghee",
    "category": "Main Course",
    "price": 160,
    "servingQty": "450g",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 55,
    "name": "Palak Paneer Lahsuni",
    "category": "Main Course",
    "price": 240,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 56,
    "name": "Malai Kofta Creamy Gravy",
    "category": "Main Course",
    "price": 270,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 57,
    "name": "Dum Aloo Kashmiri",
    "category": "Main Course",
    "price": 220,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 58,
    "name": "Mutton Rogan Josh Kashmiri",
    "category": "Main Course",
    "price": 380,
    "servingQty": "500g",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 59,
    "name": "Chicken Kadhai Peshawari",
    "category": "Main Course",
    "price": 310,
    "servingQty": "500g",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 60,
    "name": "Chicken Lababdar Rich Cream",
    "category": "Main Course",
    "price": 330,
    "servingQty": "500g",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 61,
    "name": "Goan Fish Curry Coconut",
    "category": "Main Course",
    "price": 350,
    "servingQty": "450g",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 62,
    "name": "Hyderabadi Veg Dum Biryani",
    "category": "Main Course",
    "price": 240,
    "servingQty": "600g",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 63,
    "name": "Lucknowi Mutton Dum Biryani",
    "category": "Main Course",
    "price": 390,
    "servingQty": "650g",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 64,
    "name": "Jeera Rice Basmati Fragrant",
    "category": "Main Course",
    "price": 140,
    "servingQty": "350g",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 65,
    "name": "Peas Pulao Royal",
    "category": "Main Course",
    "price": 160,
    "servingQty": "350g",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 66,
    "name": "Kashmiri Pulao with Dryfruits",
    "category": "Main Course",
    "price": 210,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 67,
    "name": "Butter Tandoori Roti",
    "category": "Main Course",
    "price": 25,
    "servingQty": "1 Pc",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 68,
    "name": "Laccha Paratha Crispy Layered",
    "category": "Main Course",
    "price": 45,
    "servingQty": "1 Pc",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 69,
    "name": "Amritsari Missi Roti",
    "category": "Main Course",
    "price": 40,
    "servingQty": "1 Pc",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 70,
    "name": "Cheese Stuffed Naan",
    "category": "Main Course",
    "price": 95,
    "servingQty": "2 Pcs",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "/images/garlic_naan.png"
  },
  {
    "id": 71,
    "name": "Penne Arrabbiata Spicy Tomato",
    "category": "Main Course",
    "price": 260,
    "servingQty": "350g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 72,
    "name": "Creamy Alfredo Fettuccine",
    "category": "Main Course",
    "price": 280,
    "servingQty": "350g",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 73,
    "name": "Lasagna Classica Baked",
    "category": "Main Course",
    "price": 320,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 74,
    "name": "Veg Hakka Noodles Wok Tossed",
    "category": "Main Course",
    "price": 190,
    "servingQty": "350g",
    "dietary": "Vegan",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 75,
    "name": "Chicken Fried Rice Golden",
    "category": "Main Course",
    "price": 230,
    "servingQty": "400g",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 76,
    "name": "Chilli Garlic Noodles Spicy",
    "category": "Main Course",
    "price": 200,
    "servingQty": "350g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 77,
    "name": "Mushroom Matar Curry",
    "category": "Main Course",
    "price": 230,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 78,
    "name": "Methi Malai Matar Rich",
    "category": "Main Course",
    "price": 250,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 79,
    "name": "Baingan Ka Bharta Smoked",
    "category": "Main Course",
    "price": 190,
    "servingQty": "350g",
    "dietary": "Veg",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 80,
    "name": "Mix Vegetable Kadai",
    "category": "Main Course",
    "price": 210,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 81,
    "name": "Punjabi Rajma Masala",
    "category": "Main Course",
    "price": 170,
    "servingQty": "450g",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 82,
    "name": "Home Style Egg Curry",
    "category": "Main Course",
    "price": 210,
    "servingQty": "3 Eggs / 400g",
    "dietary": "Non-Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 83,
    "name": "Tawa Chicken Boneless Masala",
    "category": "Main Course",
    "price": 320,
    "servingQty": "450g",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 84,
    "name": "Handi Mutton Claypot",
    "category": "Main Course",
    "price": 410,
    "servingQty": "500g",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 85,
    "name": "Malabar Fish Curry with Tamarind",
    "category": "Main Course",
    "price": 360,
    "servingQty": "450g",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 86,
    "name": "Veg Kolhapuri Extra Spicy",
    "category": "Main Course",
    "price": 220,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 87,
    "name": "Paneer Pasanda Mughlai",
    "category": "Main Course",
    "price": 280,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 88,
    "name": "Chicken Do Pyaza",
    "category": "Main Course",
    "price": 310,
    "servingQty": "500g",
    "dietary": "Non-Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 89,
    "name": "Mutton Keema Matar Desi",
    "category": "Main Course",
    "price": 370,
    "servingQty": "400g",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 90,
    "name": "Dal Bukhara Slow Cooked",
    "category": "Main Course",
    "price": 210,
    "servingQty": "450g",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "/images/dal_makhani.png"
  },
  {
    "id": 91,
    "name": "Steamed Basmati Rice",
    "category": "Main Course",
    "price": 120,
    "servingQty": "350g",
    "dietary": "Vegan",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 92,
    "name": "South Indian Curd Rice",
    "category": "Main Course",
    "price": 150,
    "servingQty": "350g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 93,
    "name": "Pudina Paratha Tandoor",
    "category": "Main Course",
    "price": 45,
    "servingQty": "1 Pc",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 94,
    "name": "Stuffed Paneer Kulcha",
    "category": "Main Course",
    "price": 85,
    "servingQty": "1 Pc",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 95,
    "name": "Mutton Keema Naan",
    "category": "Main Course",
    "price": 120,
    "servingQty": "1 Pc",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "/images/garlic_naan.png"
  },
  {
    "id": 96,
    "name": "Boondi Raita Chilled",
    "category": "Main Course",
    "price": 70,
    "servingQty": "200ml",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1553787499-6f9133860278?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 97,
    "name": "Pineapple Raita Sweet",
    "category": "Main Course",
    "price": 90,
    "servingQty": "200ml",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1553787499-6f9133860278?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 98,
    "name": "Chicken Chettinad Peppery",
    "category": "Main Course",
    "price": 330,
    "servingQty": "500g",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 99,
    "name": "Soya Chaap Tikka Masala",
    "category": "Main Course",
    "price": 240,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 100,
    "name": "Kadhai Mushroom Masala",
    "category": "Main Course",
    "price": 230,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 101,
    "name": "Sarson Ka Saag with Makki Roti",
    "category": "Main Course",
    "price": 260,
    "servingQty": "Combo",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 102,
    "name": "Chole Bhature Classic Platter",
    "category": "Main Course",
    "price": 180,
    "servingQty": "2 Bhature",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 103,
    "name": "Chicken Saagwala Spinach Gravy",
    "category": "Main Course",
    "price": 310,
    "servingQty": "500g",
    "dietary": "Non-Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 104,
    "name": "Paneer Bhurji Gravy Style",
    "category": "Main Course",
    "price": 240,
    "servingQty": "350g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 105,
    "name": "Shahi Kaju Curry Creamy",
    "category": "Main Course",
    "price": 290,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 106,
    "name": "Navratan Korma Royal Sweet Gravy",
    "category": "Main Course",
    "price": 270,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 107,
    "name": "Prawns Masala Coastal Spicy",
    "category": "Main Course",
    "price": 390,
    "servingQty": "450g",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 108,
    "name": "Aloo Gobi Adraki Homestyle",
    "category": "Main Course",
    "price": 170,
    "servingQty": "400g",
    "dietary": "Vegan",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 109,
    "name": "Chicken Rara Gosht Fusion",
    "category": "Main Course",
    "price": 350,
    "servingQty": "500g",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 110,
    "name": "Bhindi Do Pyaza Crunchy",
    "category": "Main Course",
    "price": 180,
    "servingQty": "350g",
    "dietary": "Vegan",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 111,
    "name": "Mutton Sukka Dry Roasted",
    "category": "Main Course",
    "price": 380,
    "servingQty": "400g",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 112,
    "name": "Paneer Lababdar Makhani",
    "category": "Main Course",
    "price": 270,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 113,
    "name": "Chicken Curry Punjabi Homestyle",
    "category": "Main Course",
    "price": 290,
    "servingQty": "500g",
    "dietary": "Non-Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 114,
    "name": "Veg Biryani Handi Special",
    "category": "Main Course",
    "price": 230,
    "servingQty": "550g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 115,
    "name": "Amritsari Kulcha with Chole",
    "category": "Main Course",
    "price": 160,
    "servingQty": "1 Kulcha + Chole",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 116,
    "name": "Mushroom Fried Rice",
    "category": "Main Course",
    "price": 210,
    "servingQty": "400g",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 117,
    "name": "Schezwan Veg Noodles",
    "category": "Main Course",
    "price": 200,
    "servingQty": "350g",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 118,
    "name": "Penne Rosa Pasta Sundried Tomato",
    "category": "Main Course",
    "price": 270,
    "servingQty": "350g",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 119,
    "name": "Spaghetti Aglio Olio Peperoncino",
    "category": "Main Course",
    "price": 260,
    "servingQty": "300g",
    "dietary": "Vegan",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d6281724?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 120,
    "name": "Fish Tikka Masala Gravy",
    "category": "Main Course",
    "price": 360,
    "servingQty": "450g",
    "dietary": "Non-Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 121,
    "name": "Egg Bhurji Curry Double",
    "category": "Main Course",
    "price": 170,
    "servingQty": "350g",
    "dietary": "Non-Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 122,
    "name": "Kesar Badam Rasmalai",
    "category": "Desserts",
    "price": 140,
    "servingQty": "2 Pcs",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 123,
    "name": "Desi Ghee Moong Dal Halwa",
    "category": "Desserts",
    "price": 160,
    "servingQty": "200g",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1605197161470-5b72183c5a7f?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 124,
    "name": "Gajar Ka Halwa Khoya Rich",
    "category": "Desserts",
    "price": 150,
    "servingQty": "200g",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 125,
    "name": "Royal Shahi Tukda with Rabdi",
    "category": "Desserts",
    "price": 150,
    "servingQty": "2 Slices",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 126,
    "name": "Matka Kulfi Falooda Sundae",
    "category": "Desserts",
    "price": 160,
    "servingQty": "Glass",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 127,
    "name": "Sizzling Brownie with Vanilla Ice Cream",
    "category": "Desserts",
    "price": 190,
    "servingQty": "Sizzler Plate",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 128,
    "name": "Classic Italian Tiramisu Cup",
    "category": "Desserts",
    "price": 210,
    "servingQty": "1 Cup",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 129,
    "name": "New York Baked Cheesecake",
    "category": "Desserts",
    "price": 230,
    "servingQty": "1 Slice",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 130,
    "name": "Choco Lava Cake Warm Molten",
    "category": "Desserts",
    "price": 130,
    "servingQty": "1 Cup",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 131,
    "name": "Hot Jalebi with Malai Rabdi",
    "category": "Desserts",
    "price": 140,
    "servingQty": "4 Pcs + Rabdi",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 132,
    "name": "Red Velvet Cream Cheese Pastry",
    "category": "Desserts",
    "price": 160,
    "servingQty": "1 Slice",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 133,
    "name": "Black Forest Cherry Pastry",
    "category": "Desserts",
    "price": 140,
    "servingQty": "1 Slice",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 134,
    "name": "Belgian Waffle with Warm Nutella",
    "category": "Desserts",
    "price": 210,
    "servingQty": "1 Plate",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 135,
    "name": "Blueberry Swirl Cheesecake",
    "category": "Desserts",
    "price": 240,
    "servingQty": "1 Slice",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 136,
    "name": "Kesar Badam Phirni Claypot",
    "category": "Desserts",
    "price": 120,
    "servingQty": "1 Bowl",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 137,
    "name": "Paan Flavored Ice Cream Scoop",
    "category": "Desserts",
    "price": 90,
    "servingQty": "1 Scoop",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 138,
    "name": "Rich Chocolate Truffle Slice",
    "category": "Desserts",
    "price": 170,
    "servingQty": "1 Slice",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 139,
    "name": "French Creme Brulee Caramelized",
    "category": "Desserts",
    "price": 190,
    "servingQty": "1 Cup",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 140,
    "name": "Warm Apple Pie with Cinnamon",
    "category": "Desserts",
    "price": 180,
    "servingQty": "1 Slice",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 141,
    "name": "Turkish Pistachio Baklava",
    "category": "Desserts",
    "price": 220,
    "servingQty": "3 Pcs",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 142,
    "name": "Kolkata Sponge Rasgulla",
    "category": "Desserts",
    "price": 100,
    "servingQty": "3 Pcs",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 143,
    "name": "Malpua dipped in Saffron Syrup",
    "category": "Desserts",
    "price": 130,
    "servingQty": "2 Pcs",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 144,
    "name": "Strawberry Sundae with Wafers",
    "category": "Desserts",
    "price": 150,
    "servingQty": "Glass",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 145,
    "name": "Butterscotch Crunch Scoop",
    "category": "Desserts",
    "price": 80,
    "servingQty": "1 Scoop",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 146,
    "name": "Dark Chocolate Mousse Cup",
    "category": "Desserts",
    "price": 150,
    "servingQty": "1 Cup",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 147,
    "name": "Traditional Rice Kheer with Nuts",
    "category": "Desserts",
    "price": 110,
    "servingQty": "1 Bowl",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 148,
    "name": "Mango Malai Kulfi Stick",
    "category": "Desserts",
    "price": 90,
    "servingQty": "1 Stick",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 149,
    "name": "Caramel Custard Pudding",
    "category": "Desserts",
    "price": 130,
    "servingQty": "1 Cup",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 150,
    "name": "Cassata Ice Cream Slice Tri-Color",
    "category": "Desserts",
    "price": 120,
    "servingQty": "1 Slice",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 151,
    "name": "Chenna Poda Roasted Sweet",
    "category": "Desserts",
    "price": 140,
    "servingQty": "2 Slices",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 152,
    "name": "Rabdi Basundi Thick Bowl",
    "category": "Desserts",
    "price": 150,
    "servingQty": "200ml",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 153,
    "name": "Warm Gulab Jamun Traditional",
    "category": "Desserts",
    "price": 80,
    "servingQty": "2 Pcs",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "/images/gulab_jamun_icecream.png"
  },
  {
    "id": 154,
    "name": "Belgian Dark Chocolate Dip Waffle",
    "category": "Desserts",
    "price": 220,
    "servingQty": "1 Plate",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 155,
    "name": "Oreo Crushed Sundae Jar",
    "category": "Desserts",
    "price": 170,
    "servingQty": "1 Jar",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 156,
    "name": "Vanilla Bean Ice Cream Double Scoop",
    "category": "Desserts",
    "price": 100,
    "servingQty": "2 Scoops",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 157,
    "name": "Walnut Brownie Warm Fudge",
    "category": "Desserts",
    "price": 150,
    "servingQty": "1 Pc",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 158,
    "name": "Saffron Rasgulla in Sweet Syrup",
    "category": "Desserts",
    "price": 120,
    "servingQty": "3 Pcs",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 159,
    "name": "Lotus Biscoff Cheesecake Slice",
    "category": "Desserts",
    "price": 250,
    "servingQty": "1 Slice",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 160,
    "name": "Motichoor Rabdi Parfait Glass",
    "category": "Desserts",
    "price": 160,
    "servingQty": "1 Glass",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 161,
    "name": "Adrak Elaichi Masala Chai Kulhad",
    "category": "Beverages",
    "price": 60,
    "servingQty": "150ml",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 162,
    "name": "South Indian Filter Coffee",
    "category": "Beverages",
    "price": 80,
    "servingQty": "150ml",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 163,
    "name": "Alphonso Mango Lassi Thick",
    "category": "Beverages",
    "price": 140,
    "servingQty": "300ml",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 164,
    "name": "Amritsari Sweet Lassi with Malai",
    "category": "Beverages",
    "price": 120,
    "servingQty": "350ml",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 165,
    "name": "Salted Mint Masala Chaas",
    "category": "Beverages",
    "price": 70,
    "servingQty": "300ml",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 166,
    "name": "Fresh Lemon Soda Sweet & Salt",
    "category": "Beverages",
    "price": 90,
    "servingQty": "300ml",
    "dietary": "Vegan",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 167,
    "name": "Blue Lagoon Citrus Mocktail",
    "category": "Beverages",
    "price": 140,
    "servingQty": "300ml",
    "dietary": "Vegan",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 168,
    "name": "Watermelon Mint Refresher",
    "category": "Beverages",
    "price": 130,
    "servingQty": "300ml",
    "dietary": "Vegan",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 169,
    "name": "Iced Lemon Peach Tea",
    "category": "Beverages",
    "price": 120,
    "servingQty": "300ml",
    "dietary": "Vegan",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 170,
    "name": "Strawberry Thick Milkshake",
    "category": "Beverages",
    "price": 150,
    "servingQty": "350ml",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 171,
    "name": "Oreo Chocolate Overload Shake",
    "category": "Beverages",
    "price": 170,
    "servingQty": "350ml",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 172,
    "name": "Nutella Hazelnut Milkshake",
    "category": "Beverages",
    "price": 190,
    "servingQty": "350ml",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 173,
    "name": "Green Apple Fizz Mocktail",
    "category": "Beverages",
    "price": 130,
    "servingQty": "300ml",
    "dietary": "Vegan",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 174,
    "name": "Pina Colada Coconut Mocktail",
    "category": "Beverages",
    "price": 160,
    "servingQty": "300ml",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 175,
    "name": "Hot Chocolate with Marshmallows",
    "category": "Beverages",
    "price": 160,
    "servingQty": "250ml",
    "dietary": "Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 176,
    "name": "Kesar Badam Milk Warm",
    "category": "Beverages",
    "price": 110,
    "servingQty": "250ml",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 177,
    "name": "Desi Royal Thandai Chilled",
    "category": "Beverages",
    "price": 130,
    "servingQty": "300ml",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1553787499-6f9133860278?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 178,
    "name": "Organic Honey Lemon Green Tea",
    "category": "Beverages",
    "price": 80,
    "servingQty": "200ml",
    "dietary": "Vegan",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 179,
    "name": "Espresso Double Shot Roasted",
    "category": "Beverages",
    "price": 90,
    "servingQty": "60ml",
    "dietary": "Vegan",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 180,
    "name": "Cappuccino with Cinnamon Dust",
    "category": "Beverages",
    "price": 130,
    "servingQty": "200ml",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 181,
    "name": "Vanilla Cafe Latte Frothy",
    "category": "Beverages",
    "price": 140,
    "servingQty": "250ml",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 182,
    "name": "Slow Brewed Iced Cold Brew",
    "category": "Beverages",
    "price": 150,
    "servingQty": "300ml",
    "dietary": "Vegan",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 183,
    "name": "Lychee Sparkling Spritzer",
    "category": "Beverages",
    "price": 130,
    "servingQty": "300ml",
    "dietary": "Vegan",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 184,
    "name": "Guava Chilli Spicy Cooler",
    "category": "Beverages",
    "price": 120,
    "servingQty": "300ml",
    "dietary": "Vegan",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 185,
    "name": "Kokum Jeera Shikanji",
    "category": "Beverages",
    "price": 85,
    "servingQty": "300ml",
    "dietary": "Vegan",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 186,
    "name": "Raw Mango Aam Panna Desi",
    "category": "Beverages",
    "price": 95,
    "servingQty": "300ml",
    "dietary": "Vegan",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 187,
    "name": "Cranberry Mint Sparkling Soda",
    "category": "Beverages",
    "price": 130,
    "servingQty": "300ml",
    "dietary": "Vegan",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 188,
    "name": "Kiwi Crush Limeade",
    "category": "Beverages",
    "price": 140,
    "servingQty": "300ml",
    "dietary": "Vegan",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 189,
    "name": "Mixed Berry Iced Lemonade",
    "category": "Beverages",
    "price": 140,
    "servingQty": "300ml",
    "dietary": "Vegan",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 190,
    "name": "Detox Cucumber Basil Cooler",
    "category": "Beverages",
    "price": 110,
    "servingQty": "300ml",
    "dietary": "Vegan",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 191,
    "name": "Tender Fresh Coconut Water",
    "category": "Beverages",
    "price": 80,
    "servingQty": "300ml",
    "dietary": "Vegan",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 192,
    "name": "Blueberry Thick Yogurt Smoothie",
    "category": "Beverages",
    "price": 160,
    "servingQty": "350ml",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1553787499-6f9133860278?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 193,
    "name": "Banana Caramel Protein Shake",
    "category": "Beverages",
    "price": 170,
    "servingQty": "350ml",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 194,
    "name": "Kurkure Paneer Crispy Fingers",
    "category": "Starters",
    "price": 210,
    "servingQty": "6 Pcs",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 195,
    "name": "Tandoori Stuffed Mushroom Duplex",
    "category": "Starters",
    "price": 230,
    "servingQty": "6 Pcs",
    "dietary": "Veg",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 196,
    "name": "Crispy Golden Corn Salt & Pepper",
    "category": "Starters",
    "price": 160,
    "servingQty": "250g",
    "dietary": "Vegan",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 197,
    "name": "Murgh Malai Seekh Kebab",
    "category": "Starters",
    "price": 290,
    "servingQty": "4 Skewers",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 198,
    "name": "Beetroot Shikampuri Kebab",
    "category": "Starters",
    "price": 190,
    "servingQty": "4 Pcs",
    "dietary": "Veg",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 199,
    "name": "Tandoori Aloo Dum Nazakat",
    "category": "Starters",
    "price": 170,
    "servingQty": "6 Pcs",
    "dietary": "Veg",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80"
  },
  {
    "id": 200,
    "name": "Amritsari Machhi Fry Bites",
    "category": "Starters",
    "price": 310,
    "servingQty": "6 Pcs",
    "dietary": "Non-Veg",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80"
  }
];

// Dataset getter adhering to the Re-Render Audit Toggle (9 vs 200 items)
export function generate200MenuItems() {
  return FULL_200_MENU_ITEMS;
}

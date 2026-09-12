// ==========================================
// RESTAURANT MENU DATASET GENERATOR
// Queen's Kitchen - Project 21
// Group G14-PID-11 (FEE Semester 3)
// ==========================================

export const INITIAL_CATEGORIES = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

export const BASE_MENU_ITEMS = [
  {
    id: 1,
    name: 'Cheesy Fries & Hot Sauce',
    category: 'Starters',
    price: 150,
    servingQty: '250g',
    dietary: 'Veg',
    rating: 4.8,
    image: '/images/cheesy_fries.png'
  },
  {
    id: 2,
    name: 'Dal Makhani',
    category: 'Main Course',
    price: 180,
    servingQty: '500g',
    dietary: 'Veg',
    rating: 4.9,
    image: '/images/dal_makhani.png'
  },
  {
    id: 3,
    name: 'Garlic Butter Naan',
    category: 'Main Course',
    price: 60,
    servingQty: '3 Pcs',
    dietary: 'Veg',
    rating: 4.8,
    image: '/images/garlic_naan.png'
  },
  {
    id: 4,
    name: 'Gulab Jamun with Ice Cream',
    category: 'Desserts',
    price: 120,
    servingQty: '2 Pcs + 1 Scoop',
    dietary: 'Veg',
    rating: 4.9,
    image: '/images/gulab_jamun_icecream.png'
  },
  {
    id: 5,
    name: 'Samosa and chutney',
    category: 'Starters',
    price: 60,
    servingQty: '2 Pcs',
    dietary: 'Veg',
    rating: 4.7,
    image: '/images/samosa_chutney.png'
  },
  {
    id: 6,
    name: 'Paneer Butter Masala',
    category: 'Main Course',
    price: 270,
    servingQty: '300g',
    dietary: 'Veg',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 7,
    name: 'Chicken Tikka Biryani',
    category: 'Main Course',
    price: 300,
    servingQty: '500g',
    dietary: 'Non-Veg',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 8,
    name: 'Virgin Mojito',
    category: 'Beverages',
    price: 120,
    servingQty: '100ml',
    dietary: 'Vegan',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 9,
    name: 'Cold Coffee with Ice Cream',
    category: 'Beverages',
    price: 150,
    servingQty: '200ml',
    dietary: 'Veg',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80'
  }
];

// Distinct food image pools per category for 200-item dataset
const CATEGORY_DISTINCT_IMAGES = {
  Starters: [
    '/images/samosa_chutney.png',
    '/images/cheesy_fries.png',
    'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=80'
  ],
  'Main Course': [
    '/images/dal_makhani.png',
    '/images/garlic_naan.png',
    'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80'
  ],
  Desserts: [
    '/images/gulab_jamun_icecream.png',
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80'
  ],
  Beverages: [
    'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&auto=format&fit=crop&q=80'
  ]
};

// Helper to generate the 200-item dataset for performance auditing
export function generate200MenuItems() {
  const items = [...BASE_MENU_ITEMS];
  const categories = ['Starters', 'Main Course', 'Desserts', 'Beverages'];
  const dietaryTypes = ['Veg', 'Non-Veg', 'Vegan', 'Gluten-Free'];
  const adjectives = ['Special', 'Chef Signature', 'Classic', 'Royal', 'Spicy', 'House Special', 'Crispy', 'Smoky'];
  const qtys = ['250g', '500g', '2 Pcs', '300ml', '350g', '400g', '750g'];
  
  for (let i = 10; i <= 200; i++) {
    const cat = categories[i % categories.length];
    const base = BASE_MENU_ITEMS[(i - 1) % BASE_MENU_ITEMS.length];
    const adj = adjectives[i % adjectives.length];
    const diet = dietaryTypes[i % dietaryTypes.length];
    const pool = CATEGORY_DISTINCT_IMAGES[cat];
    const imgUrl = pool[(i - 10) % pool.length];
    const qty = qtys[i % qtys.length];
    
    items.push({
      id: i,
      name: `${adj} ${base.name.split(' ')[0]} #${i}`,
      category: cat,
      price: Math.floor(100 + (i * 3.5) % 350),
      servingQty: qty,
      dietary: diet,
      rating: +(4.1 + ((i % 9) / 10)).toFixed(1),
      image: imgUrl
    });
  }
  
  return items;
}

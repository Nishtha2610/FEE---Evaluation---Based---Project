import React, { createContext, useContext, useState, useMemo } from 'react';
import { BASE_MENU_ITEMS, FULL_200_MENU_ITEMS, INITIAL_CATEGORIES } from '../data/menuData';

/**
 * MenuContext
 * React Context API provider for dynamic Menu Dataset management.
 * Provides access to the 200 distinct dishes, 9-item base dataset,
 * categories, active dataset count toggle (9 vs 200 items for audit),
 * and architecture mode switcher (naive vs optimized).
 */
const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [itemCount, setItemCount] = useState(200); // 200 items default (50 Starters, 75 Main Course, 40 Desserts, 35 Beverages)
  const [renderMode, setRenderMode] = useState('naive'); // 'naive' vs 'optimized'

  // Memoized dataset selection adhering to itemCount toggle
  const currentDataset = useMemo(() => {
    return itemCount === 200 ? FULL_200_MENU_ITEMS : BASE_MENU_ITEMS;
  }, [itemCount]);

  const value = {
    currentDataset,
    baseItems: BASE_MENU_ITEMS,
    full200Items: FULL_200_MENU_ITEMS,
    categories: INITIAL_CATEGORIES,
    itemCount,
    setItemCount,
    renderMode,
    setRenderMode
  };

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}

export default MenuContext;

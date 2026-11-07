
export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  emoji: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 17',
    price: 1199,
    description: 'Powerful smartphone.',
    emoji: '📱',
  },
  {
    id: '2',
    name: 'MacBook Pro',
    price: 2499,
    description: 'Laptop for professionals.',
    emoji: '💻',
  },
  {
    id: '3',
    name: 'Headphones',
    price: 199,
    description: 'Wireless headphones.',
    emoji: '🎧',
  },
  {
    id: '4',
    name: 'Smart Watch',
    price: 349,
    description: 'Track your daily activity.',
    emoji: '⌚',
  },
];
 
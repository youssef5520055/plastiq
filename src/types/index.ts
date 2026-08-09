export type LocalizedString = {
  en: string;
  ar: string;
};

export type Product = {
  id: string;
  sku: string;
  name: LocalizedString;
  description: LocalizedString;
  categoryId: string;
  price: number;
  currency: string;
  minOrderQuantity: number;
  inStock: boolean;
  materialId: string;
  dimensions: string;
  weight: string;
  colors: string[];
  images: string[];
  specifications: Record<string, string>;
  applications: LocalizedString[];
  certifications: string[];
  sustainability: LocalizedString;
  featured?: boolean;
  new?: boolean;
  popular?: boolean;
};

export type Category = {
  id: string;
  name: LocalizedString;
  image: string;
  description: LocalizedString;
};

export type Material = {
  id: string;
  name: LocalizedString;
  properties: LocalizedString[];
  durability: LocalizedString;
  temperatureResistance: string;
  applications: LocalizedString[];
  recyclability: string;
};

export type Industry = {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  image: string;
  icon: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type QuoteRequest = {
  id: string;
  productId?: string;
  quantity: number;
  targetPrice?: number;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  requiredDate?: string;
  specifications?: string;
  notes?: string;
  status: 'New' | 'Reviewing' | 'Quoted' | 'Accepted' | 'Rejected';
  createdAt: string;
};

export type Order = {
  id: string;
  customerId: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: 'Pending' | 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  createdAt: string;
};

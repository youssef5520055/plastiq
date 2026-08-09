import { products } from '@/mock-data/products';
import { categories } from '@/mock-data/categories';
import { materials } from '@/mock-data/materials';
import { industries } from '@/mock-data/industries';
import { Product, Category, Material, Industry } from '@/types';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  products: {
    getAll: async (): Promise<Product[]> => {
      await delay(500);
      return products;
    },
    getById: async (id: string): Promise<Product | undefined> => {
      await delay(300);
      return products.find(p => p.id === id);
    },
    getByCategory: async (categoryId: string): Promise<Product[]> => {
      await delay(400);
      return products.filter(p => p.categoryId === categoryId);
    },
    getFeatured: async (): Promise<Product[]> => {
      await delay(300);
      return products.filter(p => p.featured);
    }
  },
  categories: {
    getAll: async (): Promise<Category[]> => {
      await delay(300);
      return categories;
    }
  },
  materials: {
    getAll: async (): Promise<Material[]> => {
      await delay(300);
      return materials;
    }
  },
  industries: {
    getAll: async (): Promise<Industry[]> => {
      await delay(300);
      return industries;
    }
  }
};

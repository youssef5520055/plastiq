import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'c1',
    name: {
      en: 'Packaging',
      ar: 'التغليف'
    },
    description: {
      en: 'Premium plastic packaging solutions for various industries.',
      ar: 'حلول تغليف بلاستيكية فاخرة لمختلف الصناعات.'
    },
    image: '/images/categories/packaging.jpg'
  },
  {
    id: 'c2',
    name: {
      en: 'Household',
      ar: 'المنزلية'
    },
    description: {
      en: 'Durable and aesthetic plastic products for everyday household use.',
      ar: 'منتجات بلاستيكية متينة وأنيقة للاستخدام المنزلي اليومي.'
    },
    image: '/images/categories/household.jpg'
  },
  {
    id: 'c3',
    name: {
      en: 'Industrial',
      ar: 'الصناعية'
    },
    description: {
      en: 'Heavy-duty plastic components and containers for industrial applications.',
      ar: 'مكونات وحاويات بلاستيكية شديدة التحمل للتطبيقات الصناعية.'
    },
    image: '/images/categories/industrial.jpg'
  },
  {
    id: 'c4',
    name: {
      en: 'Construction',
      ar: 'البناء'
    },
    description: {
      en: 'Protective products and plastic panels for the construction sector.',
      ar: 'منتجات واقية وألواح بلاستيكية لقطاع البناء.'
    },
    image: '/images/categories/construction.jpg'
  }
];

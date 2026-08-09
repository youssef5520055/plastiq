import { Product } from '@/types';
import { categories } from './categories';
import { materials } from './materials';

const generateProducts = (): Product[] => {
  const products: Product[] = [];
  
  const baseProducts = [
    { name: 'Industrial HDPE Storage Container 45L', arName: 'حاوية تخزين صناعية 45 لتر', cat: 'c3', mat: 'm1', price: 24.50 },
    { name: 'Food-Grade PP Container 2.5L', arName: 'حاوية طعام 2.5 لتر', cat: 'c1', mat: 'm2', price: 3.20 },
    { name: 'Heavy-Duty Plastic Crate 60L', arName: 'صندوق بلاستيك شديد التحمل 60 لتر', cat: 'c3', mat: 'm1', price: 35.00 },
    { name: 'PET Clear Packaging Bottle 500ml', arName: 'زجاجة تغليف شفافة 500 مل', cat: 'c1', mat: 'm3', price: 0.85 },
    { name: 'Stackable Warehouse Bin', arName: 'صندوق تخزين قابل للتكديس', cat: 'c3', mat: 'm1', price: 12.00 },
    { name: 'Household Organizer Basket', arName: 'سلة تنظيم منزلية', cat: 'c2', mat: 'm2', price: 5.50 },
    { name: 'Plastic Protective Panel', arName: 'لوح واقي بلاستيكي', cat: 'c4', mat: 'm1', price: 45.00 },
    { name: 'Industrial Screw Cap 38mm', arName: 'غطاء لولبي صناعي 38 ملم', cat: 'c1', mat: 'm2', price: 0.15 },
  ];

  let idCounter = 1;

  for (let i = 0; i < 4; i++) {
    baseProducts.forEach((bp) => {
      const isFeatured = idCounter % 5 === 0;
      const isNew = idCounter % 7 === 0;
      const isPopular = idCounter % 3 === 0;

      products.push({
        id: `p${idCounter}`,
        sku: `PL-${bp.mat.toUpperCase()}-${idCounter.toString().padStart(4, '0')}`,
        name: {
          en: `${bp.name} V${i + 1}`,
          ar: `${bp.arName} الإصدار ${i + 1}`
        },
        description: {
          en: `High-quality ${bp.name.toLowerCase()} designed for maximum durability and efficiency.`,
          ar: `${bp.arName} عالي الجودة مصمم لأقصى قدر من المتانة والكفاءة.`
        },
        categoryId: bp.cat,
        price: bp.price * (1 + (i * 0.1)),
        currency: 'USD',
        minOrderQuantity: bp.price < 5 ? 1000 : 50,
        inStock: idCounter % 8 !== 0, // Some out of stock
        materialId: bp.mat,
        dimensions: `${20 + i * 5}x${30 + i * 5}x${15 + i * 5} cm`,
        weight: `${0.5 + i * 0.2} kg`,
        colors: ['#181B1F', '#2563EB', '#F7F8FA'],
        images: [
          `/images/products/placeholder-${(idCounter % 4) + 1}.jpg`,
          `/images/products/placeholder-${((idCounter + 1) % 4) + 1}.jpg`
        ],
        specifications: {
          'Capacity': bp.price < 5 ? '500ml' : '45L',
          'Wall Thickness': '2.5mm',
          'Stackable': 'Yes'
        },
        applications: [
          { en: 'Storage', ar: 'تخزين' },
          { en: 'Transport', ar: 'نقل' }
        ],
        certifications: ['ISO 9001', 'FDA Approved'],
        sustainability: {
          en: '100% Recyclable',
          ar: 'قابل لإعادة التدوير 100%'
        },
        featured: isFeatured,
        new: isNew,
        popular: isPopular
      });
      idCounter++;
    });
  }

  return products;
};

export const products = generateProducts();

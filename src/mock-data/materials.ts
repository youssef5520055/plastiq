import { Material } from '@/types';

export const materials: Material[] = [
  {
    id: 'm1',
    name: { en: 'HDPE', ar: 'البولي إيثيلين عالي الكثافة' },
    properties: [
      { en: 'High Strength', ar: 'قوة عالية' },
      { en: 'Impact Resistant', ar: 'مقاوم للصدمات' },
    ],
    durability: { en: 'High', ar: 'عالية' },
    temperatureResistance: '-40°C to 80°C',
    applications: [
      { en: 'Industrial Containers', ar: 'حاويات صناعية' },
      { en: 'Pipes', ar: 'أنابيب' },
    ],
    recyclability: '100%',
  },
  {
    id: 'm2',
    name: { en: 'PP (Polypropylene)', ar: 'البولي بروبيلين' },
    properties: [
      { en: 'Heat Resistant', ar: 'مقاوم للحرارة' },
      { en: 'Chemical Resistant', ar: 'مقاوم للمواد الكيميائية' },
    ],
    durability: { en: 'Very High', ar: 'عالية جداً' },
    temperatureResistance: '0°C to 100°C',
    applications: [
      { en: 'Food Containers', ar: 'حاويات طعام' },
      { en: 'Automotive Parts', ar: 'قطع غيار السيارات' },
    ],
    recyclability: '100%',
  },
  {
    id: 'm3',
    name: { en: 'PET', ar: 'البولي إيثيلين تيرفثالات' },
    properties: [
      { en: 'Clear', ar: 'شفاف' },
      { en: 'Lightweight', ar: 'خفيف الوزن' },
    ],
    durability: { en: 'Medium', ar: 'متوسطة' },
    temperatureResistance: '-20°C to 60°C',
    applications: [
      { en: 'Beverage Bottles', ar: 'زجاجات المشروبات' },
      { en: 'Food Packaging', ar: 'تغليف المواد الغذائية' },
    ],
    recyclability: '100%',
  },
];

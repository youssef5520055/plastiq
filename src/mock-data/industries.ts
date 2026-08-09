import { Industry } from '@/types';

export const industries: Industry[] = [
  {
    id: 'i1',
    name: { en: 'Food & Beverage', ar: 'الأغذية والمشروبات' },
    description: {
      en: 'Safe, FDA-approved packaging and containers for the food industry.',
      ar: 'تغليف آمن ومعتمد من إدارة الغذاء والدواء لقطاع الأغذية.'
    },
    image: '/images/industries/food.jpg',
    icon: 'Utensils'
  },
  {
    id: 'i2',
    name: { en: 'Logistics', ar: 'الخدمات اللوجستية' },
    description: {
      en: 'Durable pallets and crates designed for heavy transport.',
      ar: 'منصات وصناديق متينة مصممة للنقل الثقيل.'
    },
    image: '/images/industries/logistics.jpg',
    icon: 'Truck'
  },
  {
    id: 'i3',
    name: { en: 'Construction', ar: 'البناء والتشييد' },
    description: {
      en: 'Tough, weather-resistant plastic components for building.',
      ar: 'مكونات بلاستيكية قوية ومقاومة للعوامل الجوية للبناء.'
    },
    image: '/images/industries/construction.jpg',
    icon: 'HardHat'
  },
  {
    id: 'i4',
    name: { en: 'Healthcare', ar: 'الرعاية الصحية' },
    description: {
      en: 'Medical-grade plastics for sterile environments.',
      ar: 'بلاستيك من الدرجة الطبية للبيئات المعقمة.'
    },
    image: '/images/industries/healthcare.jpg',
    icon: 'Stethoscope'
  }
];

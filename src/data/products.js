export const categories = [
    { id: 'banarasi', name: 'Banarasi', icon: '✨' },
    { id: 'silk', name: 'Silk', icon: '🧶' },
    { id: 'cotton', name: 'Cotton', icon: '🌿' },
    { id: 'organza', name: 'Organza', icon: '🌫️' },
    { id: 'party-wear', name: 'Party Wear', icon: '💃' },
    { id: 'bridal', name: 'Bridal', icon: '👰' },
];

export const products = [
    // Banarasi
    ...Array.from({ length: 10 }).map((_, i) => ({
        id: `ban-${i}`,
        category: 'banarasi',
        name: `Royal Banarasi ${i + 1}`,
        price: 15000 + i * 2000,
        img: `https://images.unsplash.com/photo-1610030469668-356396425c34?q=80&w=800&sig=${i}`,
        desc: 'Exquisite handwoven silk with intricate zari work.',
        isBestSeller: i < 3,
        isNew: i > 7
    })),
    // Silk
    ...Array.from({ length: 10 }).map((_, i) => ({
        id: `silk-${i}`,
        category: 'silk',
        name: `Heritage Silk ${i + 1}`,
        price: 8000 + i * 1500,
        img: `https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&sig=${i + 10}`,
        desc: 'Pure mulberry silk with traditional borders.',
        isBestSeller: i < 2,
        isNew: i > 8
    })),
    // Cotton
    ...Array.from({ length: 10 }).map((_, i) => ({
        id: `cot-${i}`,
        category: 'cotton',
        name: `Summer Cotton ${i + 1}`,
        price: 2500 + i * 500,
        img: `https://images.unsplash.com/photo-1610030469915-9a08da39d53c?q=80&w=800&sig=${i + 20}`,
        desc: 'Breathable and elegant for daily comfort.',
        isNew: i > 5
    })),
    // Organza
    ...Array.from({ length: 10 }).map((_, i) => ({
        id: `org-${i}`,
        category: 'organza',
        name: `Ethereal Organza ${i + 1}`,
        price: 5000 + i * 1000,
        img: `https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&sig=${i + 30}`,
        desc: 'Sheer excellence with floral hand-painting.',
        isNew: i > 6
    })),
    // Party Wear
    ...Array.from({ length: 10 }).map((_, i) => ({
        id: `pty-${i}`,
        category: 'party-wear',
        name: `Evening Glamour ${i + 1}`,
        price: 7000 + i * 1200,
        img: `https://images.unsplash.com/photo-1599023023063-e38012ccbe1f?q=80&w=800&sig=${i + 40}`,
        desc: 'Contemporary designs for the modern spotlight.',
        isBestSeller: i < 2
    })),
    // Bridal
    ...Array.from({ length: 10 }).map((_, i) => ({
        id: `brd-${i}`,
        category: 'bridal',
        name: `Wedding Luxury ${i + 1}`,
        price: 25000 + i * 5000,
        img: `https://images.unsplash.com/photo-1610030469668-356396425c34?q=80&w=800&sig=${i + 50}`,
        desc: 'A masterpiece for your most special day.',
        isBestSeller: i < 4,
        isBridal: true
    })),
];

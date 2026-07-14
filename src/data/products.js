export const categories = [
    { id: 'bridal', name: 'Bridal Pattu', icon: '👰' },
    { id: 'silk', name: 'Pure Kanchi', icon: '🧶' },
    { id: 'banarasi', name: 'Banaras Sarees', icon: '✨' },
    { id: 'sico', name: 'Sico Sarees', icon: '🌟' },
    { id: 'cotton', name: 'Cotton Sarees', icon: '🌿' },
    { id: 'party-wear', name: 'Fancy Sarees', icon: '💃' },
    // { id: 'kurtis', name: 'Kurtis', icon: '🌸' },
    { id: 'handloom', name: 'Handloom Cotton', icon: '🧵' },
];

export const products = [
    // Bridal Pattu
    ...Array.from({ length: 8 }).map((_, i) => ({
        id: `brd-${i}`,
        category: 'bridal',
        name: `Bridal Pattu Saree ${i + 1}`,
        price: 25000 + i * 5000,
        img: '/assets/cat_bridal.png',
        desc: 'A masterpiece for your most special day, handwoven with fine pure silver and gold zari.',
        isBestSeller: i < 3,
        isBridal: true
    })),
    // Pure Kanchi
    ...Array.from({ length: 8 }).map((_, i) => ({
        id: `silk-${i}`,
        category: 'silk',
        name: `Heritage Kanchipuram ${i + 1}`,
        price: 9000 + i * 2000,
        img: '/assets/cat_silk.png',
        desc: 'Pure mulberry silk with traditional heavy borders from master South Indian weavers.',
        isBestSeller: i < 2,
        isNew: i > 5
    })),
    // Banarasi
    ...Array.from({ length: 8 }).map((_, i) => ({
        id: `ban-${i}`,
        category: 'banarasi',
        name: `Royal Banarasi Silk ${i + 1}`,
        price: 15000 + i * 2000,
        img: '/assets/cat_banarasi.png',
        desc: 'Exquisite handwoven silk with intricate bootis and heavy zari work from Varanasi.',
        isBestSeller: i < 3,
        isNew: i > 5
    })),
    // Sico
    ...Array.from({ length: 8 }).map((_, i) => ({
        id: `sico-${i}`,
        category: 'sico',
        name: `Traditional Sico Saree ${i + 1}`,
        price: 4500 + i * 1000,
        img: '/assets/showroom_luxury_jpg_1782486864588.png',
        desc: 'A gorgeous, comfortable blend of fine mercerized silk and cotton for a subtle luster.',
        isBestSeller: i < 2,
        isNew: i > 4
    })),
    // Cotton
    ...Array.from({ length: 8 }).map((_, i) => ({
        id: `cot-${i}`,
        category: 'cotton',
        name: `Elegant Cotton Saree ${i + 1}`,
        price: 2800 + i * 600,
        img: '/assets/cat_cotton.png',
        desc: 'Breathable and classic daily wear, featuring block prints and zari borders.',
        isNew: i > 5
    })),
    // Fancy / Party Wear
    ...Array.from({ length: 8 }).map((_, i) => ({
        id: `pty-${i}`,
        category: 'party-wear',
        name: `Fancy Designer Saree ${i + 1}`,
        price: 7500 + i * 1500,
        img: '/assets/cat_party_wear.png',
        desc: 'Contemporary organza and georgette drapes, embellished with delicate embroidery.',
        isBestSeller: i < 2,
        isNew: i > 5
    })),
    // Kurtis
    ...Array.from({ length: 8 }).map((_, i) => ({
        id: `kur-${i}`,
        category: 'kurtis',
        name: `Royal Embroidered Kurti ${i + 1}`,
        price: 3200 + i * 800,
        img: '/assets/cat_kurtis.png',
        desc: 'Premium designer kurti set with exquisite embroidery, perfect for festive events.',
        isBestSeller: i < 2,
        isNew: i > 4
    })),
    // Handloom Cotton
    ...Array.from({ length: 8 }).map((_, i) => ({
        id: `hnd-${i}`,
        category: 'handloom',
        name: `Handloom Cotton Saree ${i + 1}`,
        price: 3500 + i * 1200,
        img: '/assets/cat_handloom.png',
        desc: 'Eco-friendly handloom cotton with traditional stripes and soft textured feel.',
        isBestSeller: i < 2,
        isNew: i > 5
    })),
];

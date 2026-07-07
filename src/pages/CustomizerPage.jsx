import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, ChevronRight, CheckCircle, MessageSquare, ArrowLeft, Paintbrush, Heart, Sparkles, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomizerPage = () => {
    const [baseColor, setBaseColor] = useState('#800020'); // Premium Maroon
    const [borderType, setBorderType] = useState('gold-zari');
    const [selectedMotif, setSelectedMotif] = useState('paisley');
    const [customMotifUrl, setCustomMotifUrl] = useState(null);
    const [customFile, setCustomFile] = useState(null);
    const [checkoutName, setCheckoutName] = useState('');
    const [checkoutPhone, setCheckoutPhone] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Color Swatches
    const colors = [
        { name: 'Maroon', value: '#800020' },
        { name: 'Gold', value: '#D4AF37' },
        { name: 'Royal Blue', value: '#0F52BA' },
        { name: 'Emerald', value: '#50C878' },
        { name: 'Crimson', value: '#DC143C' },
        { name: 'Mustard', value: '#FFDB58' },
        { name: 'Magenta', value: '#FF00FF' },
    ];

    // Presets
    const motifs = [
        { id: 'paisley', name: 'Paisley (कैरी)', desc: 'Traditional mango motif representing fertility and luxury.' },
        { id: 'peacock', name: 'Peacock (मयूर)', desc: 'Royal bird motifs symbolizing beauty and grace.' },
        { id: 'lotus', name: 'Lotus (कमल)', desc: 'Divine lotus motifs for purity and heritage beauty.' },
        { id: 'geometric', name: 'Temple Border (मंदिर)', desc: 'Triangular geometric borders inspired by ancient Indian architecture.' }
    ];

    const borderOptions = [
        { id: 'gold-zari', name: 'Pure Gold Zari', price: '+ ₹5,000' },
        { id: 'silver-zari', name: 'Antique Silver Thread', price: '+ ₹4,500' },
        { id: 'thread-work', name: 'Resham Threadwork', price: '+ ₹3,200' }
    ];

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCustomFile(file);
            const url = URL.createObjectURL(file);
            setCustomMotifUrl(url);
            setSelectedMotif('custom');
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Generate WhatsApp custom order link
        const borderItem = borderOptions.find(b => b.id === borderType)?.name || 'Custom';
        const motifItem = selectedMotif === 'custom' ? `Uploaded Custom Design (${customFile?.name || 'File'})` : motifs.find(m => m.id === selectedMotif)?.name;

        const message = `Hello, I have customized a saree on your Bespoke platform!\n\n` +
            `Name: ${checkoutName}\n` +
            `Phone: ${checkoutPhone}\n` +
            `Base Color: ${baseColor}\n` +
            `Border Style: ${borderItem}\n` +
            `Motif Design: ${motifItem}`;

        const encodedMsg = encodeURIComponent(message);
        window.open(`https://wa.me/919999999999?text=${encodedMsg}`, '_blank');
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-ivory font-poppins selection:bg-gold selection:text-maroon pt-24 pb-16">
            <div className="container mx-auto px-6">

                {/* Back Link */}
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center space-x-2 text-maroon hover:text-gold transition-colors font-semibold">
                        <ArrowLeft size={18} />
                        <span>स्टोर पर लौटें (Back)</span>
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Panel: Preview Workspace */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center">
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gold/10 w-full relative overflow-hidden flex items-center justify-center min-h-[500px]">

                            {/* Premium Aesthetic Glows */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-10 -mt-10 blur-2xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-maroon/5 rounded-full -ml-10 -mb-10 blur-2xl" />

                            {/* Live SVG Saree Canvas */}
                            <div className="relative w-64 h-96 flex justify-center items-center">
                                {/* SVG outline representation of a draped saree with dynamic styling */}
                                <svg
                                    viewBox="0 0 200 350"
                                    className="w-full h-full drop-shadow-2xl"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Silhouette background placeholder */}
                                    <path
                                        d="M100 10 C120 40, 120 80, 110 120 C100 160, 90 200, 95 240 C100 280, 110 320, 100 340 L80 340 C70 320, 80 280, 85 240 C90 200, 80 160, 70 120 C60 80, 60 40, 80 10 Z"
                                        fill="#eae5db"
                                        opacity="0.3"
                                    />

                                    {/* Main Saree Body Drape tintable */}
                                    <path
                                        id="saree-body"
                                        d="M105 32 C120 70, 130 110, 110 160 C90 210, 75 260, 85 330 L115 335 C125 270, 130 210, 140 160 C150 110, 145 70, 125 30 Z"
                                        fill={baseColor}
                                        className="transition-colors duration-500"
                                    />

                                    {/* Inner pleats shading layer */}
                                    <path
                                        d="M110 160 C98 210, 80 260, 90 330 M117 180 C110 220, 98 270, 102 332"
                                        stroke="rgba(0,0,0,0.15)"
                                        strokeWidth="2.5"
                                        fill="none"
                                    />

                                    {/* Border borderType rendering (tintable or gold/silver overlay) */}
                                    <path
                                        id="saree-border"
                                        d="M105 32 C120 70, 130 110, 110 160 C90 210, 75 260, 85 330"
                                        stroke={borderType === 'gold-zari' ? '#D4AF37' : borderType === 'silver-zari' ? '#c0c0c0' : '#800020'}
                                        strokeWidth="5"
                                        fill="none"
                                        className="transition-colors duration-500"
                                    />

                                    {/* Pallu Drape (the piece over shoulder) */}
                                    <path
                                        id="saree-pallu"
                                        d="M93 35 C70 50, 60 90, 65 140 C70 190, 85 240, 80 300 L60 290 C62 230, 52 180, 48 130 C45 80, 55 50, 78 28 Z"
                                        fill={baseColor}
                                        className="transition-colors duration-500 shadow-lg"
                                    />

                                    {/* Pallu decorations / border */}
                                    <path
                                        d="M93 35 C70 50, 60 90, 65 140 C70 190, 85 240, 80 300"
                                        stroke={borderType === 'gold-zari' ? '#D4AF37' : borderType === 'silver-zari' ? '#c0c0c0' : '#800020'}
                                        strokeWidth="4"
                                        fill="none"
                                        className="transition-colors duration-500"
                                    />

                                    {/* Shoulder drape shading shadow */}
                                    <path
                                        d="M92 40 C75 55, 66 90, 69 135"
                                        stroke="rgba(255,255,255,0.15)"
                                        strokeWidth="1.5"
                                        fill="none"
                                    />
                                </svg>

                                {/* Dynamic Motif Overlay onto the Pallu */}
                                <div className="absolute top-1/3 left-1/4 w-12 h-12 pointer-events-none transform -rotate-12 overflow-hidden flex items-center justify-center opacity-85">
                                    {selectedMotif === 'custom' && customMotifUrl ? (
                                        <img src={customMotifUrl} alt="custom motif" className="w-[85%] h-[85%] object-contain" />
                                    ) : selectedMotif === 'paisley' ? (
                                        <span className="text-3xl text-gold select-none filter drop-shadow">🦚</span>
                                    ) : selectedMotif === 'peacock' ? (
                                        <span className="text-3xl text-gold select-none filter drop-shadow">🦚</span>
                                    ) : selectedMotif === 'lotus' ? (
                                        <span className="text-3xl text-gold select-none filter drop-shadow">🌸</span>
                                    ) : selectedMotif === 'geometric' ? (
                                        <span className="text-3xl text-gold select-none filter drop-shadow">🔺</span>
                                    ) : null}
                                </div>
                            </div>

                            {/* Active Custom Config Status bar */}
                            <div className="absolute bottom-6 left-6 right-6 bg-charcoal/5 border border-charcoal/10 rounded-2xl p-4 flex justify-between items-center text-xs">
                                <div>
                                    <p className="text-charcoal/50 uppercase tracking-widest text-[9px] mb-0.5">Base Color</p>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3.5 h-3.5 rounded-full border border-white" style={{ backgroundColor: baseColor }} />
                                        <span className="font-bold text-charcoal">{baseColor}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-charcoal/50 uppercase tracking-widest text-[9px] mb-0.5">Motif</p>
                                    <span className="font-bold text-maroon uppercase tracking-wider">{selectedMotif}</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Panel: Controls Panel */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-10">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-maroon mb-4">
                                    Bespoke <span className="text-gold italic">Customizer</span>
                                </h1>
                                <p className="text-charcoal/60">
                                    डिज़ाइनर साड़ी स्टूडियो। अपनी पसंद का रंग चुनें, अपनी डिज़ाइन अपलोड करें और सिलाई व बुनाई के लिए सबमिट करें।
                                </p>
                            </div>

                            {/* Step 1: Base Color */}
                            <div className="bg-white p-8 rounded-3xl border border-gold/10 shadow-lg relative">
                                <h3 className="text-lg font-bold text-maroon mb-6 flex items-center">
                                    <Paintbrush size={18} className="text-gold mr-3" />
                                    <span>1. बेस कलर चुनें (Select Saree Color)</span>
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {colors.map(col => (
                                        <button
                                            key={col.value}
                                            onClick={() => setBaseColor(col.value)}
                                            style={{ backgroundColor: col.value }}
                                            className={`w-10 h-10 rounded-full border-2 transition-all duration-300 relative ${baseColor === col.value ? 'scale-115 border-gold shadow-lg shadow-gold/20' : 'border-white hover:scale-105'}`}
                                            title={col.name}
                                        >
                                            {baseColor === col.value && (
                                                <div className="absolute inset-0 m-auto w-2.5 h-2.5 rounded-full bg-white shadow" />
                                            )}
                                        </button>
                                    ))}

                                    {/* Custom Picker input wrapper */}
                                    <div className="relative">
                                        <input
                                            type="color"
                                            value={baseColor}
                                            onChange={(e) => setBaseColor(e.target.value)}
                                            className="w-10 h-10 rounded-full border-2 border-white hover:scale-105 transition-transform cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Step 2: Borders */}
                            <div className="bg-white p-8 rounded-3xl border border-gold/10 shadow-lg">
                                <h3 className="text-lg font-bold text-maroon mb-6 flex items-center">
                                    <Sparkles size={18} className="text-gold mr-3" />
                                    <span>2. ज़री / बोर्डर काम (Border Style)</span>
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {borderOptions.map(border => (
                                        <button
                                            key={border.id}
                                            onClick={() => setBorderType(border.id)}
                                            className={`p-4 rounded-xl border text-left transition-all ${borderType === border.id ? 'border-maroon bg-maroon/5' : 'border-gold/10'}`}
                                        >
                                            <h4 className="font-bold text-charcoal text-sm">{border.name}</h4>
                                            <p className="text-gold font-poppins text-xs mt-1 font-semibold">{border.price}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step 3: Design / Motifs / Upload */}
                            <div className="bg-white p-8 rounded-3xl border border-gold/10 shadow-lg">
                                <h3 className="text-lg font-bold text-maroon mb-6 flex items-center">
                                    <Upload size={18} className="text-gold mr-3" />
                                    <span>3. मोटिफ या डिज़ाइन (Choose / Upload Design)</span>
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                    {motifs.map(mtf => (
                                        <button
                                            key={mtf.id}
                                            onClick={() => {
                                                setSelectedMotif(mtf.id);
                                                setCustomMotifUrl(null);
                                            }}
                                            className={`p-4 rounded-xl border text-center transition-all ${selectedMotif === mtf.id ? 'border-maroon bg-maroon/5 scale-102' : 'border-gold/10'}`}
                                        >
                                            <span className="text-2xl block mb-2">{mtf.id === 'paisley' ? '🦚' : mtf.id === 'peacock' ? '🦚' : mtf.id === 'lotus' ? '🌸' : '🔺'}</span>
                                            <h4 className="font-bold text-charcoal text-xs">{mtf.name}</h4>
                                        </button>
                                    ))}
                                </div>

                                {/* Custom Upload section */}
                                <div className="border-2 border-dashed border-gold/20 rounded-2xl p-6 text-center hover:border-gold/50 transition-colors relative">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="custom-design-upload"
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        onChange={handleFileUpload}
                                    />
                                    <div className="space-y-2">
                                        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto text-gold">
                                            <Upload size={20} />
                                        </div>
                                        <h4 className="font-bold text-charcoal text-sm">अपना डिज़ाइन अपलोड करें (Upload Custom Design)</h4>
                                        <p className="text-[10px] text-charcoal/40">PNG, JPG formats setup for live tracing preview.</p>
                                    </div>
                                </div>
                                {customFile && (
                                    <div className="mt-3 p-3 bg-gold/5 border border-gold/10 rounded-xl flex items-center justify-between text-xs">
                                        <span className="font-bold text-maroon">✓ {customFile.name}</span>
                                        <button onClick={() => { setCustomFile(null); setCustomMotifUrl(null); setSelectedMotif('paisley'); }} className="text-red-500 font-bold uppercase">Remove</button>
                                    </div>
                                )}
                            </div>

                            {/* Submitting build details/Checkout via WhatsApp */}
                            <div className="bg-white p-8 rounded-3xl border border-gold/10 shadow-lg">
                                <h3 className="text-lg font-bold text-maroon mb-6 flex items-center">
                                    <Send size={18} className="text-gold mr-3" />
                                    <span>4. डिज़ाइन बुक करें (Submit Custom Setup)</span>
                                </h3>

                                {!isSubmitted ? (
                                    <form onSubmit={handleFormSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                required
                                                placeholder="आपका नाम (Your Name)"
                                                value={checkoutName}
                                                onChange={(e) => setCheckoutName(e.target.value)}
                                                className="px-6 py-4 rounded-xl border border-gold/10 text-sm focus:border-gold outline-none w-full"
                                            />
                                            <input
                                                type="tel"
                                                required
                                                placeholder="व्हाट्सएप नंबर (WhatsApp Number)"
                                                value={checkoutPhone}
                                                onChange={(e) => setCheckoutPhone(e.target.value)}
                                                className="px-6 py-4 rounded-xl border border-gold/10 text-sm focus:border-gold outline-none w-full"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-maroon text-white font-bold py-5 rounded-2xl flex items-center justify-center space-x-3 hover:bg-maroon/90 shadow-2xl transition-all"
                                        >
                                            <MessageSquare size={18} />
                                            <span className="tracking-widest text-sm uppercase">व्हाट्सएप पर डिज़ाइन भेजें (Send to WhatsApp)</span>
                                        </button>
                                    </form>
                                ) : (
                                    <div className="text-center p-6 bg-gold/5 border border-gold/10 rounded-2xl space-y-4">
                                        <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto text-gold">
                                            <CheckCircle size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-maroon text-lg">डिज़ाइन सबमिट कर दी गई है!</h4>
                                            <p className="text-xs text-charcoal/60 mt-1">हमने व्हाट्सएप पर आपकी सेटिंग्स के साथ चैट खोल दी है। कृपया विवरण सेंड करें।</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CustomizerPage;

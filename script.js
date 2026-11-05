/* ==========================================================================
   SHAIK ELECTRONIC STORE - MULTI-PAGE JAVASCRIPT LOGIC (script.js)
   Project: 3rd-Year B.Tech Web Development Project
   Author: Shaik
   Tech Stack: Vanilla JavaScript (ES6, DOM Manipulation, LocalStorage)
   Features: Multi-currency ($/₹/€), Wishlist, Cart & Checkout, Dynamic Filtering,
             Invoice Generator, Quick View Modal, Hero Slider, Toast Notifications
   ========================================================================== */

// ==========================================================================
// 1. PRODUCT CATALOG DATA (28 Flagship Gadgets & Home/Personal Appliances)
// ==========================================================================
const productsData = [
    {
        id: 1,
        title: "Shaik Nova Pro 5G (256GB, 12GB RAM)",
        category: "smartphones",
        price: 899.00,
        oldPrice: 1049.00,
        rating: "★★★★★ (4.9)",
        reviews: 312,
        badge: "Sale 15%",
        badgeType: "sale",
        inStock: 8,
        warranty: "2-Year Official Brand Warranty",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
        description: "Flagship 5G smartphone featuring a 6.7-inch 120Hz Dynamic AMOLED display, 200MP Triple Camera array, 5000mAh battery with 80W Turbo Fast Charging.",
        specs: [
            "Processor: Octa-core 3.4GHz 4nm Flagship Chip",
            "Display: 6.7\" 120Hz LTPO AMOLED (2K HDR10+)",
            "Storage: 256GB UFS 4.0 Storage, 12GB LPDDR5X RAM",
            "Battery & Charge: 5000mAh with 80W Fast Charger Included"
        ],
        inBox: [
            "Shaik Nova Pro 5G Smartphone",
            "80W Turbo Fast Power Adapter",
            "Type-C to Type-C Braided Cable",
            "Protective Clear Bumper Case",
            "SIM Tray Ejector & User Guide"
        ]
    },
    {
        id: 2,
        title: "Shaik AeroBook 16\" M3 Ultra (1TB SSD)",
        category: "laptops",
        price: 1499.00,
        oldPrice: 1699.00,
        rating: "★★★★★ (4.8)",
        reviews: 218,
        badge: "Hot",
        badgeType: "popular",
        inStock: 4,
        warranty: "2-Year On-Site Hardware Warranty",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
        description: "Ultimate high-performance workstation laptop designed for software development, 4K video rendering, and heavy multitasking with silent vapor chamber cooling.",
        specs: [
            "Processor: 16-Core M3 Ultra Hybrid CPU/GPU",
            "Memory & Disk: 32GB Unified RAM + 1TB NVMe PCIe 4.0 SSD",
            "Screen: 16.2\" Liquid Retina XDR (3456 x 2234 @ 120Hz)",
            "Battery Life: Up to 20 Hours active work playback"
        ],
        inBox: [
            "Shaik AeroBook 16\" Workstation",
            "140W USB-C Power Adapter",
            "2m Braided USB-C Magnetic Power Cable",
            "Quick Start Documentation"
        ]
    },
    {
        id: 3,
        title: "SonicPro Wireless ANC Headphones",
        category: "audio",
        price: 249.00,
        oldPrice: 299.00,
        rating: "★★★★★ (5.0)",
        reviews: 489,
        badge: "Top Rated",
        badgeType: "",
        inStock: 12,
        warranty: "1-Year Full Replacement Warranty",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        description: "Studio-grade over-ear wireless headphones featuring adaptive Hybrid Active Noise Cancellation, 40mm titanium drivers, and plush memory foam ear cushions.",
        specs: [
            "Noise Cancellation: Hybrid Adaptive ANC (Up to -42dB)",
            "Battery Life: 50 Hours Playtime (35 Hours with ANC on)",
            "Connectivity: Bluetooth 5.4 + Low Latency Multipoint",
            "Microphones: 6 Beamforming Mics with AI ENC Voice Isolation"
        ],
        inBox: [
            "SonicPro Wireless Headphones",
            "Hard Shell Protective Travel Case",
            "3.5mm Gold-Plated Aux Audio Cable",
            "USB-C Fast Charging Cable",
            "Airplane Seat Adapter"
        ]
    },
    {
        id: 4,
        title: "Apex Pulse AMOLED GPS Smartwatch",
        category: "wearables",
        price: 179.00,
        oldPrice: 229.00,
        rating: "★★★★☆ (4.7)",
        reviews: 176,
        badge: "Sale 20%",
        badgeType: "sale",
        inStock: 15,
        warranty: "1-Year International Warranty",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
        description: "Premium fitness smartwatch with aerospace-grade aluminum casing, dual-frequency GPS tracking, SpO2 sensor, and customizable watch faces.",
        specs: [
            "Screen: 1.43\" Always-On HD AMOLED display",
            "Sensors: Optical Heart Rate, ECG, SpO2, Sleep Tracker",
            "Water Resistance: 5ATM + IP68 Swimming Proof",
            "Battery: 14 Days regular usage on a single charge"
        ],
        inBox: [
            "Apex Pulse Smartwatch",
            "Sport Silicone Breathable Strap",
            "Magnetic Rapid Charging Dock",
            "User Manual"
        ]
    },
    {
        id: 5,
        title: "VisionX 55\" Cinema 4K OLED Smart TV",
        category: "appliances",
        price: 749.00,
        oldPrice: 899.00,
        rating: "★★★★★ (4.9)",
        reviews: 95,
        badge: "Best Seller",
        badgeType: "popular",
        inStock: 3,
        warranty: "3-Year Comprehensive Panel Warranty",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80",
        description: "Experience infinite contrast and self-lit pixels with the VisionX 55-inch OLED. Includes Dolby Vision IQ, Dolby Atmos soundbar integration, and Google TV OS.",
        specs: [
            "Display Panel: 55\" 4K Ultra HD (3840 x 2160) OLED @ 120Hz",
            "HDR Format: Dolby Vision IQ, HDR10+, HLG",
            "Audio Output: 60W 2.2 Channel Dolby Atmos Speakers",
            "Smart OS: Google TV with Hands-Free Voice Assistant"
        ],
        inBox: [
            "VisionX 55\" 4K OLED Television",
            "Smart Voice Air-Remote Control",
            "Desktop Table Stand Legs",
            "Heavy-Duty Wall Mount Bracket Kit",
            "Power Cord & AAA Batteries"
        ]
    },
    {
        id: 6,
        title: "AuraBuds Pro Spatial Audio TWS",
        category: "audio",
        price: 129.00,
        oldPrice: 159.00,
        rating: "★★★★☆ (4.6)",
        reviews: 240,
        badge: "Trending",
        badgeType: "",
        inStock: 20,
        warranty: "1-Year Replacement Warranty",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
        description: "Compact wireless earbuds delivering 360-degree Spatial Audio with dynamic head tracking, IPX5 water resistance, and fast Qi wireless charging.",
        specs: [
            "Audio Tech: 11mm Graphene Dynamic Drivers + Spatial Sound",
            "Playtime: 8 Hours per charge, 32 Hours total with Case",
            "Charging: USB-C Quick Charge (10 mins = 2 hrs playback)",
            "Water Resistance: IPX5 Sweat and Splash Proof"
        ],
        inBox: [
            "AuraBuds Pro Earbuds (Left & Right)",
            "Wireless MagSafe Charging Case",
            "3 Pairs of Ergonomic Silicone Tips (S/M/L)",
            "USB-C Charging Cable"
        ]
    },
    {
        id: 7,
        title: "CyberMech RGB Mechanical Keyboard",
        category: "gaming",
        price: 89.00,
        oldPrice: 119.00,
        rating: "★★★★★ (4.8)",
        reviews: 310,
        badge: "Gaming",
        badgeType: "",
        inStock: 18,
        warranty: "1-Year Warranty",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
        description: "Tenkeyless mechanical gaming and typing keyboard with hot-swappable tactile switches, per-key RGB backlighting, and durable double-shot PBT keycaps.",
        specs: [
            "Switch Type: Hot-Swappable Custom Red/Brown Linear Switches",
            "Keycaps: Premium Double-Shot PBT Non-Fade Keycaps",
            "Connectivity: Tri-Mode (2.4GHz Wireless, Bluetooth 5.0, USB-C)",
            "Battery: 4000mAh Rechargeable (up to 200 hrs RGB off)"
        ],
        inBox: [
            "CyberMech Mechanical Keyboard",
            "2.4GHz Low-Latency USB Dongle",
            "Braided USB-C to USB-A Cable",
            "2-in-1 Keycap & Switch Puller Tool",
            "4 Extra Mechanical Switches"
        ]
    },
    {
        id: 8,
        title: "RoboSweep AI Laser Smart Vacuum",
        category: "appliances",
        price: 349.00,
        oldPrice: 499.00,
        rating: "★★★★☆ (4.7)",
        reviews: 142,
        badge: "Sale 30%",
        badgeType: "sale",
        inStock: 6,
        warranty: "2-Year Motor & Battery Warranty",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
        description: "Autonomous 2-in-1 robot vacuum and mop equipped with LiDAR laser navigation, 5000Pa hyper suction, and automatic room mapping via smartphone app.",
        specs: [
            "Suction Power: 5000Pa Cyclone Motor",
            "Navigation: 360 LiDAR Smart Laser Room Mapping",
            "Mopping: Sonic Vibration Water Tank with 3-Level Flow",
            "Smart Control: Alexa, Google Assistant & Wi-Fi Mobile App"
        ],
        inBox: [
            "RoboSweep Robot Vacuum Unit",
            "Auto-Recharge Docking Station",
            "Detachable Sonic Mop Module & 2 Microfiber Pads",
            "Extra HEPA Filter & Side Brushes",
            "Cleaning Tool with Blade"
        ]
    },
    {
        id: 9,
        title: "Apple iPhone 16 Pro Max (256GB Titanium)",
        category: "smartphones",
        price: 1199.00,
        oldPrice: 1299.00,
        rating: "★★★★★ (5.0)",
        reviews: 580,
        badge: "New Release",
        badgeType: "popular",
        inStock: 5,
        warranty: "1-Year Apple Official Warranty + AppleCare Available",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
        description: "Forged in aerospace-grade Titanium with the groundbreaking A18 Pro Bionic chip, Camera Control button, and class-leading 4K 120 fps Dolby Vision recording.",
        specs: [
            "Processor: Apple A18 Pro 3nm Silicon Chip",
            "Display: 6.9\" Super Retina XDR with ProMotion (1-120Hz)",
            "Camera: 48MP Fusion + 48MP Ultra Wide + 5x Telephoto",
            "Chassis: Grade 5 Titanium with Action Button"
        ],
        inBox: [
            "iPhone 16 Pro Max with iOS 18",
            "USB-C Woven Charge Cable (1m)",
            "Documentation & Apple Decals"
        ]
    },
    {
        id: 10,
        title: "Samsung Galaxy S25 Ultra AI (512GB)",
        category: "smartphones",
        price: 1299.00,
        oldPrice: 1419.00,
        rating: "★★★★★ (4.9)",
        reviews: 420,
        badge: "AI Flagship",
        badgeType: "popular",
        inStock: 7,
        warranty: "2-Year Samsung Brand Care Warranty",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",
        description: "Ultimate Galaxy experience powered by Galaxy AI, integrated S-Pen stylus, Snapdragon 8 Elite chip, and 200MP Quad Telephoto optical zoom.",
        specs: [
            "Processor: Snapdragon 8 Elite for Galaxy",
            "Display: 6.8\" Dynamic AMOLED 2X with Anti-Reflective Armor Glass",
            "Pen: Built-in Bluetooth S-Pen with Air Actions",
            "Battery: 5000mAh with 45W Super Fast Charging 2.0"
        ],
        inBox: [
            "Galaxy S25 Ultra Device",
            "Built-in Bluetooth S-Pen Stylus",
            "USB-C to USB-C 5A Data Cable",
            "SIM Tray Ejector Pin"
        ]
    },
    {
        id: 11,
        title: "ASUS ROG Strix Scar 18 RTX 4090 Gaming",
        category: "laptops",
        price: 2499.00,
        oldPrice: 2799.00,
        rating: "★★★★★ (4.9)",
        reviews: 130,
        badge: "Gaming Beast",
        badgeType: "popular",
        inStock: 2,
        warranty: "2-Year Global Warranty with Accidental Damage Protection",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
        description: "Extreme gaming dominance featuring Intel Core i9-14900HX, NVIDIA GeForce RTX 4090 16GB, ROG Nebula HDR 2.5K 240Hz Mini-LED display, and liquid metal cooling.",
        specs: [
            "GPU: NVIDIA GeForce RTX 4090 Laptop GPU (175W Max TGP)",
            "CPU: Intel Core i9-14900HX 24-Cores / 32-Threads",
            "Memory: 64GB DDR5-5600MHz RAM + 2TB PCIe 4.0 NVMe SSD",
            "Screen: 18\" ROG Nebula HDR Mini LED 240Hz/3ms"
        ],
        inBox: [
            "ASUS ROG Strix Scar 18 Gaming Laptop",
            "330W High-Capacity Power Adapter",
            "ROG Impact Gaming Mouse",
            "Custom Armor Caps & Keystones"
        ]
    },
    {
        id: 12,
        title: "Sony WH-1000XM5 Studio Noise Cancelling",
        category: "audio",
        price: 399.00,
        oldPrice: 449.00,
        rating: "★★★★★ (4.9)",
        reviews: 620,
        badge: "Studio Grade",
        badgeType: "",
        inStock: 9,
        warranty: "1-Year Sony Official Warranty",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
        description: "Industry-leading noise canceling with two processors and 8 microphones. Specially designed 30mm precision carbon driver unit for pristine High-Resolution Audio.",
        specs: [
            "Noise Cancellation: Dual Processors (QN1 + V1) with Auto NC Optimizer",
            "Microphones: 4 Beamforming mics with AI-based noise reduction",
            "Battery: 30 Hours with Quick Charge (3 min = 3 hours)",
            "Audio Codecs: LDAC, AAC, SBC, High-Res Audio Wireless"
        ],
        inBox: [
            "Sony WH-1000XM5 Headphones",
            "Collapsible Premium Carrying Case",
            "1.2m Headphone Connection Cable (3.5mm)",
            "USB-A to USB-C Charging Cable"
        ]
    },
    {
        id: 13,
        title: "Apple Watch Ultra 2 (49mm Titanium GPS)",
        category: "wearables",
        price: 799.00,
        oldPrice: 899.00,
        rating: "★★★★★ (4.8)",
        reviews: 215,
        badge: "Rugged",
        badgeType: "popular",
        inStock: 6,
        warranty: "1-Year Apple Warranty",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
        description: "The most capable sports and expedition watch. 49mm corrosion-resistant titanium case, ultra-bright 3000-nit display, precision dual-frequency GPS, and 100m water resistance.",
        specs: [
            "Casing: 49mm Aerospace Titanium with Raised Sapphire Crystal",
            "Brightness: Up to 3000 nits Always-On Retina display",
            "Battery: Up to 36 hours normal use (72 hrs low power mode)",
            "Sensors: Depth gauge with water temperature sensor, ECG"
        ],
        inBox: [
            "Apple Watch Ultra 2 (49mm Titanium)",
            "Ocean / Trail Loop Band",
            "Apple Watch Magnetic Fast Charger to USB-C Cable (1m)"
        ]
    },
    {
        id: 14,
        title: "Sony PlayStation 5 Pro Console (2TB SSD)",
        category: "gaming",
        price: 699.00,
        oldPrice: 799.00,
        rating: "★★★★★ (5.0)",
        reviews: 380,
        badge: "Hot Release",
        badgeType: "popular",
        inStock: 4,
        warranty: "1-Year Sony PlayStation Official Warranty",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
        description: "Experience enhanced PlayStation Spectral Super Resolution (PSSR), advanced ray tracing, and silky-smooth 60fps / 120fps 4K gaming on a massive 2TB high-speed SSD.",
        specs: [
            "Graphics: Upgraded GPU with 67% more Compute Units",
            "Storage: 2TB Ultra-High Speed Custom NVMe SSD",
            "Ray Tracing: Advanced hardware ray tracing up to 3x speed",
            "Included: DualSense Wireless Controller with Haptic Feedback"
        ],
        inBox: [
            "PlayStation 5 Pro Console (2TB)",
            "DualSense Wireless Controller",
            "HDMI 2.1 Ultra High Speed Cable",
            "AC Power Cord & USB-C Cable",
            "Horizontal Stand Feet & ASTRO's PLAYROOM Pre-installed"
        ]
    },
    {
        id: 15,
        title: "Dyson Purifier Cool Gen1 HEPA Filter",
        category: "appliances",
        price: 429.00,
        oldPrice: 499.00,
        rating: "★★★★☆ (4.7)",
        reviews: 88,
        badge: "Smart Home",
        badgeType: "",
        inStock: 5,
        warranty: "2-Year Dyson Official Parts & Labor Warranty",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
        description: "Intelligent air purifying tower fan that automatically senses, captures 99.97% of particles as small as 0.3 microns, and projects purified cooling airflow.",
        specs: [
            "Filtration: 360-degree Glass HEPA + Activated Carbon filter",
            "Airflow: Air Multiplier technology with 350-degree oscillation",
            "Sensors: Real-time PM2.5, PM10, temperature and humidity sensors",
            "Control: Remote controller + MyDyson smart app integration"
        ],
        inBox: [
            "Dyson Purifier Cool Gen1 Tower",
            "360° Combi Glass HEPA + Carbon Filter",
            "Magnetic Curved Remote Control",
            "Power Supply Unit"
        ]
    },
    {
        id: 16,
        title: "Razer DeathAdder V3 Pro Wireless Gaming Mouse",
        category: "gaming",
        price: 149.00,
        oldPrice: 179.00,
        rating: "★★★★★ (4.8)",
        reviews: 265,
        badge: "Ultra Light",
        badgeType: "",
        inStock: 14,
        warranty: "2-Year Razer Manufacturer Warranty",
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
        description: "Ultra-lightweight 63g ergonomic esports mouse featuring Razer Focus Pro 30K Optical Sensor, Gen-3 Optical Mouse Switches, and HyperSpeed Wireless.",
        specs: [
            "Weight: 63g Ultra-Lightweight Ergonomic Form Factor",
            "Sensor: Focus Pro 30,000 DPI Optical Sensor (99.8% resolution accuracy)",
            "Battery: Up to 90 hours continuous battery life via USB-C",
            "Switches: Optical Gen-3 rated for 90-million clicks"
        ],
        inBox: [
            "Razer DeathAdder V3 Pro Mouse",
            "Wireless USB Dongle + USB Dongle Adapter",
            "Type-A to Type-C Speedflex Cable",
            "Razer Mouse Grip Tape"
        ]
    },
    // ======================================================================
    // NEW PRODUCTS: HAIR DRYERS, CABLES, ADAPTERS, AIRPODS & HOME APPLIANCES
    // ======================================================================
    {
        id: 17,
        title: "Dyson Supersonic™ Nural™ Intelligent Hair Dryer",
        category: "appliances",
        price: 399.00,
        oldPrice: 449.00,
        rating: "★★★★★ (4.9)",
        reviews: 512,
        badge: "Top Styling",
        badgeType: "popular",
        inStock: 7,
        warranty: "2-Year Dyson Official International Warranty",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
        description: "Revolutionary salon-grade high-velocity hair dryer featuring Nural™ network distance sensors to protect scalp health and enhance natural shine without extreme heat.",
        specs: [
            "Motor: Dyson Digital Motor V9 (110,000 RPM high-velocity airflow)",
            "Heat Control: Scalp Protect Mode automatically reduces heat to 55°C at scalp",
            "Settings: 4 Heat Levels (100°C Fast, 80°C Regular, 60°C Gentle, 28°C Cold Shot)",
            "Power Rating: 1600W with negative ion generator to banish frizz",
            "Cable: 9ft Professional Salon-Grade heavy-duty swivel cord"
        ],
        inBox: [
            "Dyson Supersonic Nural Hair Dryer Unit",
            "Gentle Air Scalp Protection Nozzle",
            "Styling Concentrator Nozzle",
            "Wave & Curl Deep Bowl Diffuser",
            "Flyaway Smoother Finishing Attachment"
        ]
    },
    {
        id: 18,
        title: "Anker PowerLine Flow 100W USB-C Braided Cable (6ft)",
        category: "accessories",
        price: 19.99,
        oldPrice: 29.99,
        rating: "★★★★★ (4.9)",
        reviews: 840,
        badge: "Best Seller",
        badgeType: "popular",
        inStock: 35,
        warranty: "Lifetime Hassle-Free Replacement Warranty",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
        description: "Ultra-strong graphene-infused soft silicone braided cable supporting 100W Power Delivery. Delivers super-fast charging for MacBooks, iPads, iPhones, and Android devices.",
        specs: [
            "Power Output: 100W Ultra-Fast Power Delivery 3.0 (5A / 20V Max)",
            "Durability: 25,000+ Bend Lifespan; resists tangles, kinks, and tears",
            "Data Sync: 480 Mbps high-speed data transmission rate",
            "Compatibility: Universal USB-C (MacBook, iPhone 16/15, Galaxy S25, Steam Deck)",
            "Length & Texture: 6ft (1.8m) Soft-Touch Skin-Friendly Braided Finish"
        ],
        inBox: [
            "Anker PowerLine Flow 100W USB-C to USB-C Cable (6ft)",
            "Silicone Cable Management Organizer Strap",
            "Welcome Guide & Warranty Card"
        ]
    },
    {
        id: 19,
        title: "GaN Pro 65W 3-Port Fast Wall Adapter Charger",
        category: "accessories",
        price: 34.99,
        oldPrice: 49.99,
        rating: "★★★★★ (4.8)",
        reviews: 430,
        badge: "Hot Deal",
        badgeType: "sale",
        inStock: 25,
        warranty: "18-Month Manufacturer Replacement Guarantee",
        image: "https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=600&q=80",
        description: "Compact 3rd-Gen GaN fast wall charger with dual USB-C ports and USB-A. Simultaneously charges your laptop, smartphone, and earbuds at maximum power without overheating.",
        specs: [
            "Semiconductor: 3rd Gen Gallium Nitride (GaN III) for 50% smaller size",
            "Output Ports: 2x USB-C PD 3.0 (65W Max) + 1x USB-A QC 4.0 (22.5W Max)",
            "Simultaneous Charging: Dual C+C (45W Laptop + 20W Phone) or C+A (45W + 18W)",
            "Safety Shield: 8-Layer Over-Voltage, Short-Circuit & TempGuard Protection",
            "Plug Type: Compact Foldable Pins + International Travel Adapters"
        ],
        inBox: [
            "65W GaN III 3-Port Fast Wall Charger",
            "UK/EU Travel Plug Converter Snap-ons",
            "Instruction & Safety Manual"
        ]
    },
    {
        id: 20,
        title: "Apple AirPods Pro (2nd Generation, USB-C)",
        category: "audio",
        price: 249.00,
        oldPrice: 279.00,
        rating: "★★★★★ (4.9)",
        reviews: 950,
        badge: "Apple Official",
        badgeType: "popular",
        inStock: 16,
        warranty: "1-Year Apple Manufacturer Limited Warranty",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
        description: "Immerse in next-level sound with Apple H2 chip, up to 2x more Active Noise Cancellation, Adaptive Audio, Conversation Awareness, and USB-C MagSafe Case.",
        specs: [
            "Audio Silicon: Apple H2 Headphone chip + Apple U1 Precision Finding chip",
            "Noise Cancellation: 2x More Pro-Level Active Noise Cancellation + Transparency",
            "Battery: 6 Hours playback with ANC (up to 30 Hours total with MagSafe Case)",
            "Sensors: Dual optical sensors, skin-detect, force touch stems",
            "Durability: IP54 Dust, Sweat, and Water Resistance for buds & case"
        ],
        inBox: [
            "Apple AirPods Pro (2nd Generation)",
            "MagSafe Charging Case (USB-C) with Built-in Speaker & Lanyard Loop",
            "Silicone Ear Tips (4 Pairs: XS, S, M, L)",
            "Braided USB-C Charge Cable",
            "Documentation"
        ]
    },
    {
        id: 21,
        title: "Apple AirPods Max Wireless ANC (USB-C)",
        category: "audio",
        price: 549.00,
        oldPrice: 599.00,
        rating: "★★★★★ (4.8)",
        reviews: 320,
        badge: "Audiophile",
        badgeType: "popular",
        inStock: 5,
        warranty: "1-Year Apple Manufacturer Warranty",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
        description: "The ultimate personal listening experience. Apple-designed 40mm dynamic driver, computational audio with H1 chips in each cup, and breathable knit mesh canopy.",
        specs: [
            "Acoustics: 40mm Custom Dynamic Drivers with Dual Neodymium Magnets (<1% THD)",
            "Processing: Dual Apple H1 Audio Chips with 10 Audio Cores each",
            "ANC & Transparency: 8 Microphones for ANC + 3 Microphones for Clear Voice",
            "Battery: 20 Hours of High-Fidelity Audio, Movie Playback, or Talk Time",
            "Charging: Fast USB-C Port (5 minutes charge gives 1.5 hours playback)"
        ],
        inBox: [
            "Apple AirPods Max (USB-C Edition)",
            "Smart Case with Ultra-Low Power State",
            "USB-C to USB-C Audio Charging Cable",
            "User Documentation"
        ]
    },
    {
        id: 22,
        title: "Shaik TurboCrisp 6.5L Smart Digital Air Fryer",
        category: "appliances",
        price: 119.00,
        oldPrice: 159.00,
        rating: "★★★★★ (4.9)",
        reviews: 280,
        badge: "Healthy Living",
        badgeType: "sale",
        inStock: 11,
        warranty: "2-Year Heating Element & Motor Warranty",
        image: "https://images.unsplash.com/photo-1584990347449-34b79b69b596?auto=format&fit=crop&w=600&q=80",
        description: "Cook crispy, golden meals with 90% less oil. Features 360° rapid convection air circulation, 12 smart presets, and dishwasher-safe ceramic non-stick basket.",
        specs: [
            "Capacity: 6.5L Family Size (fits whole 2.5kg chicken or 1.2kg French fries)",
            "Heating Tech: 1800W Turbo Vortex 360° Super-Heated Airflow (80°C - 200°C)",
            "Presets: 12 One-Touch Digital Presets (Fries, Steak, Fish, Cake, Dehydrate)",
            "Control: Angled Digital LED Touch Screen with Shake Reminder",
            "Safety: Auto-Shutoff Sensor + BPA/PFOA-Free Ceramic Non-Stick Coating"
        ],
        inBox: [
            "Shaik TurboCrisp 6.5L Digital Air Fryer",
            "Removable Non-Stick Crisper Grill Plate",
            "Recipe Book with 50+ Healthy Chef Recipes",
            "Quick Start Cooking Temperature Chart"
        ]
    },
    {
        id: 23,
        title: "Smart TempControl 1.7L Stainless Steel Electric Kettle",
        category: "appliances",
        price: 49.00,
        oldPrice: 69.00,
        rating: "★★★★☆ (4.7)",
        reviews: 195,
        badge: "Kitchen Essential",
        badgeType: "",
        inStock: 19,
        warranty: "1-Year Strix Thermostat Warranty",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
        description: "Precision temperature kettle crafted with double-wall 304 food-grade stainless steel. 6 preset tea/coffee temperatures and 2-hour automatic keep-warm.",
        specs: [
            "Capacity & Power: 1.7 Litres (7 Cups) / 1500W Ultra-Fast Boiling (3 mins)",
            "Material: 100% Seamless 304 Stainless Steel Interior with Cool-Touch Exterior",
            "Temp Modes: 6 Presets (45°C Baby Milk, 70°C Green Tea, 85°C Coffee, 100°C Boil)",
            "Thermostat: Genuine British Strix Controller with Boil-Dry Auto-Cutoff",
            "Keep Warm: 120-Minute Automatic Thermostatic Temperature Maintenance"
        ],
        inBox: [
            "Smart TempControl 1.7L Electric Kettle",
            "360° Cordless Swivel Base with Cord Wrap",
            "Removable Anti-Scale Mesh Filter",
            "User Brewing Manual"
        ]
    },
    {
        id: 24,
        title: "NutriPro 1200W High-Speed Kitchen Blender",
        category: "appliances",
        price: 79.00,
        oldPrice: 109.00,
        rating: "★★★★★ (4.8)",
        reviews: 340,
        badge: "Fitness Choice",
        badgeType: "",
        inStock: 14,
        warranty: "2-Year Motor Warranty",
        image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=80",
        description: "Extract maximum vitamins and nutrients with a 1200W pure copper motor and 6-wing Japanese stainless steel blades. Perfect for smoothies, shakes, and ice crushing.",
        specs: [
            "Motor Power: 1200 Watts Pure Copper Motor (24,000 RPM Max Speed)",
            "Blades: 6-Wing Laser-Cut Japanese 304 Stainless Steel Nutrient Extractor",
            "Functions: 3 Modes: Auto-Pulse, Silky Smoothie, and Hard Ice Crusher",
            "Safety: Twist-and-Lock Interlock Base with Suction Cup Stabilizer Feet",
            "Maintenance: 30-Second Self-Cleaning Cycle (Water + Drop of Soap)"
        ],
        inBox: [
            "NutriPro 1200W High-Torque Motor Base",
            "2x 900ml BPA-Free Shatterproof Tritan Cups",
            "2x Spill-Proof Travel Flip-Top Lids",
            "Stainless Steel Extractor Blade Assembly",
            "Healthy Smoothie Nutrition Guide"
        ]
    },
    {
        id: 25,
        title: "AeroSteam 1800W Garment Steamer & Ceramic Iron",
        category: "appliances",
        price: 59.00,
        oldPrice: 79.00,
        rating: "★★★★☆ (4.7)",
        reviews: 160,
        badge: "Fast Ironing",
        badgeType: "",
        inStock: 17,
        warranty: "1-Year Comprehensive Warranty",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
        description: "Versatile 2-in-1 handheld clothes steamer and dry flat iron. Rapid 15-second heat-up with ceramic soleplate to remove stubborn wrinkles from delicate silks to suits.",
        specs: [
            "Power & Steam: 1800 Watts with 35g/min Continuous High-Pressure Steam",
            "Soleplate: Diamond Ceramic Non-Stick Glide Soleplate with Heated Tip",
            "Heat-Up Time: Ultra-Fast 15-Second Instant Heating with Anti-Drip Tech",
            "Water Capacity: 300ml Detachable Transparent Water Tank (15 mins steaming)",
            "Safety: Dual Automatic Overheat Sensor & 8-Minute Auto-Off"
        ],
        inBox: [
            "AeroSteam 1800W Handheld Steamer Unit",
            "Attachable Fabric Bristle Brush for Heavy Coats",
            "Delicate Garment Lint Remover Attachment",
            "Heat-Resistant Steaming Glove",
            "Water Measuring Cup & Storage Pouch"
        ]
    },
    {
        id: 26,
        title: "PowerCore 26800mAh 65W Laptop & Mobile Power Bank",
        category: "accessories",
        price: 69.00,
        oldPrice: 89.00,
        rating: "★★★★★ (4.9)",
        reviews: 520,
        badge: "Travel Essential",
        badgeType: "popular",
        inStock: 22,
        warranty: "18-Month Replacement Warranty",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80",
        description: "High-capacity 26,800mAh portable charger with 65W USB-C Power Delivery. Charges laptops, MacBooks, tablets, and phones simultaneously on planes, trains, and camping.",
        specs: [
            "Battery Capacity: 26,800mAh / 96.48Wh (TSA Airline Carry-On Approved)",
            "Output Power: 65W Max USB-C PD (Charges MacBook Pro 14\" to 50% in 35 mins)",
            "Ports: 2x USB-C PD 3.0 (65W/30W) + 1x USB-A Quick Charge 3.0 (22.5W)",
            "Digital Screen: Smart LCD displaying exact Battery % and Real-time Wattage",
            "Protection: ActiveShield 2.0 Temperature Monitor & Voltage Surge Guard"
        ],
        inBox: [
            "PowerCore 26800mAh 65W Fast Power Bank",
            "100W USB-C to USB-C Heavy-Duty Fast Cable (1.5ft)",
            "Breathable Mesh Protective Travel Pouch",
            "User Safety Manual"
        ]
    },
    {
        id: 27,
        title: "UltraClean Sonic Smart Electric Toothbrush",
        category: "appliances",
        price: 39.00,
        oldPrice: 59.00,
        rating: "★★★★★ (4.8)",
        reviews: 290,
        badge: "Oral Care",
        badgeType: "",
        inStock: 28,
        warranty: "1-Year Replacement Guarantee",
        image: "https://images.unsplash.com/photo-1559591937-e62fb33091e6?auto=format&fit=crop&w=600&q=80",
        description: "Medical-grade sonic electric toothbrush delivering 42,000 micro-vibrations per minute. Features 5 dental cleaning modes and an incredible 120-day battery life.",
        specs: [
            "Vibration Speed: 42,000 Maglev Sonic Micro-Strokes per minute",
            "Brushing Modes: 5 Modes: Daily Clean, White, Polish, Sensitive, Gum Massage",
            "Smart Timer: 2-Minute QuadPacer auto-timer with 30-second interval pulses",
            "Battery: 120 Days of use on a single 3-hour USB-C fast charge",
            "Waterproofing: IPX7 Full-Body Waterproof (100% washable and shower-safe)"
        ],
        inBox: [
            "UltraClean Sonic Toothbrush Handle",
            "4x Genuine DuPont W-Shaped Replacement Brush Heads",
            "Magnetic Hard Shell Travel Storage Case",
            "USB-C Fast Charging Cable",
            "Wall Mount Holder"
        ]
    },
    {
        id: 28,
        title: "Anker 6-in-1 USB-C Hub & Multiport Adapter",
        category: "accessories",
        price: 39.99,
        oldPrice: 54.99,
        rating: "★★★★★ (4.9)",
        reviews: 610,
        badge: "Top Hub",
        badgeType: "",
        inStock: 30,
        warranty: "18-Month Official Warranty",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        description: "Expand a single laptop USB-C port into a complete workstation. Includes 4K 60Hz HDMI video, 100W Power Delivery passthrough, dual 5Gbps USB ports, and SD card slots.",
        specs: [
            "Display Port: 4K Ultra-HD @ 60Hz HDMI (Crystal clear monitor & TV mirroring)",
            "Power Delivery: 100W USB-C Passthrough (85W high-speed laptop charging)",
            "Data Ports: 2x USB-A 3.0 (5 Gbps transfer rate for flash drives & mice)",
            "Card Readers: Universal SD and MicroSD (TF) dual slots (up to 104 MB/s)",
            "Build: Precision Space Grey Anodized Aluminum with braided nylon cord"
        ],
        inBox: [
            "Anker 6-in-1 USB-C Multiport Hub",
            "Soft Travel Protective Sleeve",
            "Instruction Guide & Warranty Card"
        ]
    }
];

// ==========================================================================
// 2. CURRENCY CONVERSION SYSTEM ($ USD, ₹ INR, € EUR)
// ==========================================================================
const CURRENCIES = {
    USD: { code: 'USD', symbol: '$', rate: 1.0, locale: 'en-US' },
    INR: { code: 'INR', symbol: '₹', rate: 85.0, locale: 'en-IN' },
    EUR: { code: 'EUR', symbol: '€', rate: 0.92, locale: 'de-DE' }
};

const CURRENCY_STORAGE_KEY = 'shaik_electronic_store_currency';

function getActiveCurrency() {
    const saved = localStorage.getItem(CURRENCY_STORAGE_KEY);
    return (saved && CURRENCIES[saved]) ? CURRENCIES[saved] : CURRENCIES.USD;
}

function setActiveCurrency(code) {
    if (CURRENCIES[code]) {
        localStorage.setItem(CURRENCY_STORAGE_KEY, code);
        updateAllPricesOnPage();
        showToast(`💱 Currency changed to ${code} (${CURRENCIES[code].symbol})`);
    }
}

function formatPrice(usdPrice) {
    const cur = getActiveCurrency();
    const converted = usdPrice * cur.rate;
    if (cur.code === 'INR') {
        return `${cur.symbol}${Math.round(converted).toLocaleString('en-IN')}`;
    }
    return `${cur.symbol}${converted.toFixed(2)}`;
}

function initCurrencySwitcher() {
    const selects = document.querySelectorAll('.currency-select, #currencySelect');
    const active = getActiveCurrency();

    selects.forEach(select => {
        select.value = active.code;
        select.addEventListener('change', (e) => {
            setActiveCurrency(e.target.value);
            selects.forEach(s => s.value = e.target.value);
        });
    });
}

function updateAllPricesOnPage() {
    if (typeof window.triggerCatalogRender === 'function') {
        window.triggerCatalogRender();
    }
    if (document.getElementById('cartTableContainer')) {
        renderCartPage();
    }
    renderWishlistDrawer();
}

// ==========================================================================
// 3. LOCALSTORAGE CART STATE MANAGEMENT
// ==========================================================================
const CART_STORAGE_KEY = 'shaik_electronic_store_cart';
let activeDiscountPercent = 0; // Discount percentage applied via coupon

function getCart() {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateNavCartBadge();
}

function updateNavCartBadge() {
    const badges = document.querySelectorAll('#cartCount, .cart-badge');
    const cart = getCart();
    const totalItems = cart.reduce((tot, item) => tot + item.qty, 0);
    badges.forEach(b => b.innerText = totalItems);
}

function addToCart(id, title, price, image, category = 'Electronics') {
    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === id);

    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({
            id: id,
            title: title,
            price: price,
            image: image,
            category: category,
            qty: 1
        });
    }

    saveCart(cart);
    showToast(`🛒 "${title}" added to cart!`);

    if (document.getElementById('cartTableContainer')) {
        renderCartPage();
    }
}

// ==========================================================================
// 4. WISHLIST STATE MANAGEMENT (localStorage)
// ==========================================================================
const WISHLIST_STORAGE_KEY = 'shaik_electronic_store_wishlist';

function getWishlist() {
    const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function saveWishlist(list) {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(list));
    updateNavWishlistBadge();
}

function isInWishlist(id) {
    const list = getWishlist();
    return list.includes(id);
}

function toggleWishlist(id) {
    let list = getWishlist();
    const product = productsData.find(p => p.id === id);
    const title = product ? product.title : 'Gadget';

    if (list.includes(id)) {
        list = list.filter(itemId => itemId !== id);
        saveWishlist(list);
        showToast(`💔 Removed "${title}" from Wishlist`);
    } else {
        list.push(id);
        saveWishlist(list);
        showToast(`❤️ Added "${title}" to Wishlist!`);
    }

    updateWishlistCardButtons();
    renderWishlistDrawer();
}

function updateNavWishlistBadge() {
    const badges = document.querySelectorAll('#wishlistCount, .wishlist-badge');
    const count = getWishlist().length;
    badges.forEach(b => b.innerText = count);
}

function updateWishlistCardButtons() {
    document.querySelectorAll('.btn-wishlist-toggle').forEach(btn => {
        const id = parseInt(btn.getAttribute('data-id'), 10);
        if (isInWishlist(id)) {
            btn.classList.add('active');
            btn.innerHTML = '❤️';
            btn.setAttribute('title', 'Remove from Wishlist');
        } else {
            btn.classList.remove('active');
            btn.innerHTML = '🤍';
            btn.setAttribute('title', 'Add to Wishlist');
        }
    });
}

function openWishlistDrawer() {
    const drawer = document.getElementById('wishlistDrawer');
    const backdrop = document.getElementById('wishlistBackdrop');
    if (drawer && backdrop) {
        renderWishlistDrawer();
        drawer.classList.add('active');
        backdrop.classList.add('active');
    }
}

function closeWishlistDrawer() {
    const drawer = document.getElementById('wishlistDrawer');
    const backdrop = document.getElementById('wishlistBackdrop');
    if (drawer && backdrop) {
        drawer.classList.remove('active');
        backdrop.classList.remove('active');
    }
}

function renderWishlistDrawer() {
    const container = document.getElementById('wishlistItemsContainer');
    const countSpan = document.getElementById('wishlistDrawerCount');
    if (!container) return;

    const list = getWishlist();
    if (countSpan) countSpan.innerText = list.length;

    if (list.length === 0) {
        container.innerHTML = `
            <div class="empty-wishlist-state">
                <span style="font-size: 3rem;">🤍</span>
                <h4 style="margin: 10px 0 6px; color: #fff;">Your Wishlist is Empty</h4>
                <p style="color: #94a3b8; font-size: 0.88rem;">Tap the heart icon on any gadget to bookmark it for later!</p>
            </div>
        `;
        return;
    }

    let html = '<div class="wishlist-list">';
    list.forEach(id => {
        const product = productsData.find(p => p.id === id);
        if (!product) return;
        html += `
            <div class="wishlist-item">
                <img src="${product.image}" alt="${product.title}" class="wishlist-item-img">
                <div class="wishlist-item-info">
                    <h4>${product.title}</h4>
                    <div class="wishlist-price">${formatPrice(product.price)}</div>
                    <div class="wishlist-actions">
                        <button class="btn btn-primary btn-xs" onclick="addToCart(${product.id}, '${product.title.replace(/'/g, "\\'")}', ${product.price}, '${product.image}', '${product.category}')">
                            Move to Cart 🛒
                        </button>
                        <button class="btn-remove-wishlist" onclick="toggleWishlist(${product.id})" title="Remove">✕</button>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';

    container.innerHTML = html;
}

function initWishlistUI() {
    updateNavWishlistBadge();

    const openBtns = document.querySelectorAll('#openWishlistBtn, .open-wishlist-trigger');
    openBtns.forEach(btn => btn.addEventListener('click', openWishlistDrawer));

    const closeBtn = document.getElementById('closeWishlistBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeWishlistDrawer);

    const backdrop = document.getElementById('wishlistBackdrop');
    if (backdrop) backdrop.addEventListener('click', closeWishlistDrawer);
}

// ==========================================================================
// 5. INITIALIZE ALL PAGE COMPONENTS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initCurrencySwitcher();
    updateNavCartBadge();
    initWishlistUI();
    initMobileNav();
    initQuickViewModal();

    // Check if on Home Page
    if (document.getElementById('homeSlider')) {
        initHeroSlider();
        initDealCountdown();
    }

    // Check if on Products Page or Home Featured Grid exists
    if (document.getElementById('productsGrid')) {
        initProductsCatalog();
    }

    // Check if on Dedicated Cart Page
    if (document.getElementById('cartTableContainer')) {
        initCartPage();
    }

    // Contact & Newsletter forms
    initFormHandlers();
});

// ==========================================================================
// 6. PRODUCTS CATALOG LOGIC (Category, Search, Price Filter & Sort)
// ==========================================================================
function initProductsCatalog() {
    const productsGrid = document.getElementById('productsGrid');
    const filterButtons = document.querySelectorAll('.category-filters .filter-btn');
    const priceButtons = document.querySelectorAll('.price-filters .price-btn');
    const searchInput = document.getElementById('catalogSearch');
    const sortSelect = document.getElementById('sortBy');

    let currentFilter = 'all';
    let currentPriceFilter = 'all';
    let searchQuery = '';
    let currentSort = 'default';

    updateCategoryPillCounts();

    function renderFilteredProducts() {
        let filtered = productsData.filter(product => {
            const matchesCategory = currentFilter === 'all' || product.category === currentFilter;

            const matchesSearch = product.title.toLowerCase().includes(searchQuery) || 
                                  product.category.toLowerCase().includes(searchQuery) ||
                                  product.description.toLowerCase().includes(searchQuery) ||
                                  product.specs.some(s => s.toLowerCase().includes(searchQuery));

            let matchesPrice = true;
            if (currentPriceFilter === 'under-200') {
                matchesPrice = product.price < 200;
            } else if (currentPriceFilter === '200-750') {
                matchesPrice = product.price >= 200 && product.price <= 750;
            } else if (currentPriceFilter === 'above-750') {
                matchesPrice = product.price > 750;
            }

            return matchesCategory && matchesSearch && matchesPrice;
        });

        // Apply sorting
        if (currentSort === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (currentSort === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (currentSort === 'name-az') {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        }

        if (filtered.length === 0) {
            productsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px;">
                    <div style="font-size: 3rem; margin-bottom: 10px;">🔍</div>
                    <h3 style="color: #ffffff; margin-bottom: 8px;">No matching gadgets found</h3>
                    <p style="color: #94a3b8;">Try clearing your search query or choosing different category/budget filters.</p>
                </div>
            `;
            return;
        }

        let html = '';
        filtered.forEach(p => {
            const badgeHtml = p.badge ? `<span class="card-badge ${p.badgeType || ''}">${p.badge}</span>` : '';
            const isWish = isInWishlist(p.id);
            const heartIcon = isWish ? '❤️' : '🤍';
            const heartClass = isWish ? 'active' : '';

            let stockHtml = '';
            if (p.inStock <= 4) {
                stockHtml = `<span class="stock-status low">🔥 Only ${p.inStock} left!</span>`;
            } else {
                stockHtml = `<span class="stock-status in">✓ In Stock</span>`;
            }

            html += `
                <div class="product-card" data-category="${p.category}" data-id="${p.id}">
                    ${badgeHtml}
                    <button class="btn-wishlist-toggle ${heartClass}" data-id="${p.id}" onclick="toggleWishlist(${p.id})" title="${isWish ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                        ${heartIcon}
                    </button>
                    <div class="product-img-wrapper">
                        <img src="${p.image}" alt="${p.title}" class="product-img" loading="lazy">
                        <button class="quick-view-btn" onclick="openQuickView(${p.id})">Quick View 👁️</button>
                    </div>
                    <div class="product-info">
                        <div class="product-meta-row">
                            <span class="product-cat">${p.category.toUpperCase()}</span>
                            ${stockHtml}
                        </div>
                        <h3 class="product-title">${p.title}</h3>
                        <div class="product-rating">${p.rating}</div>
                        <div class="product-price-row">
                            <span class="current-price">${formatPrice(p.price)}</span>
                            <span class="old-price">${formatPrice(p.oldPrice)}</span>
                        </div>
                        <button class="btn btn-add-cart" onclick="addToCart(${p.id}, '${p.title.replace(/'/g, "\\'")}', ${p.price}, '${p.image}', '${p.category}')">
                            Add to Cart 🛒
                        </button>
                    </div>
                </div>
            `;
        });

        productsGrid.innerHTML = html;
        updateWishlistCardButtons();
    }

    window.triggerCatalogRender = renderFilteredProducts;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderFilteredProducts();
        });
    });

    priceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            priceButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPriceFilter = btn.getAttribute('data-price');
            renderFilteredProducts();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderFilteredProducts();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderFilteredProducts();
        });
    }

    renderFilteredProducts();
}

function updateCategoryPillCounts() {
    const filterButtons = document.querySelectorAll('.category-filters .filter-btn');
    if (!filterButtons.length) return;

    filterButtons.forEach(btn => {
        const cat = btn.getAttribute('data-filter');
        let count = 0;
        if (cat === 'all') {
            count = productsData.length;
            btn.innerText = `All Products (${count})`;
        } else {
            count = productsData.filter(p => p.category === cat).length;
            const title = btn.getAttribute('data-title') || btn.innerText.split('(')[0].trim();
            btn.innerText = `${title} (${count})`;
        }
    });
}

// ==========================================================================
// 7. DEDICATED CART PAGE LOGIC & INVOICE GENERATOR (cart.html)
// ==========================================================================
function initCartPage() {
    renderCartPage();

    const applyCouponBtn = document.getElementById('applyCouponBtn');
    const couponInput = document.getElementById('couponCodeInput');
    const checkoutForm = document.getElementById('checkoutForm');

    if (applyCouponBtn && couponInput) {
        applyCouponBtn.addEventListener('click', () => {
            const code = couponInput.value.trim().toUpperCase();
            if (code === 'SHAIKTECH30') {
                activeDiscountPercent = 0.30;
                alert("🎉 Coupon SHAIKTECH30 applied successfully! 30% discount deducted.");
                renderCartPage();
            } else if (code === '') {
                alert("Please enter a coupon code.");
            } else {
                alert("❌ Invalid promo coupon. Use code 'SHAIKTECH30' for 30% OFF.");
            }
        });
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const cart = getCart();
            if (cart.length === 0) {
                alert("Your cart is empty! Please add products before placing an order.");
                return;
            }

            const name = document.getElementById('custName').value.trim();
            const email = document.getElementById('custEmail').value.trim();
            const phone = document.getElementById('custPhone') ? document.getElementById('custPhone').value.trim() : '';
            const address = document.getElementById('custAddress').value.trim();
            const city = document.getElementById('custCity') ? document.getElementById('custCity').value.trim() : '';
            const payMethod = document.getElementById('paymentMethod').value;

            const orderId = 'SE-2026-' + Math.floor(1000 + Math.random() * 9000);
            const orderDate = new Date().toLocaleDateString('en-US', {
                year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
            });

            let subtotal = 0;
            cart.forEach(item => subtotal += (item.price * item.qty));
            const shipping = subtotal >= 99 ? 0 : 15;
            const discountAmount = subtotal * activeDiscountPercent;
            const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

            const invModal = document.getElementById('invoiceModal');
            if (invModal) {
                const invOrderId = document.getElementById('invOrderId');
                const invDate = document.getElementById('invDate');
                const invCustName = document.getElementById('invCustomerName');
                const invCustEmail = document.getElementById('invCustomerEmail');
                const invCustAddress = document.getElementById('invCustomerAddress');
                const invPayMethod = document.getElementById('invPaymentMethod');
                const invItemsBody = document.getElementById('invItemsBody');
                const invSubtotal = document.getElementById('invSubtotal');
                const invShipping = document.getElementById('invShipping');
                const invDiscountRow = document.getElementById('invDiscountRow');
                const invDiscount = document.getElementById('invDiscount');
                const invGrandTotal = document.getElementById('invGrandTotal');

                if (invOrderId) invOrderId.innerText = '#' + orderId;
                if (invDate) invDate.innerText = orderDate;
                if (invCustName) invCustName.innerText = name;
                if (invCustEmail) invCustEmail.innerText = email + (phone ? ` | ${phone}` : '');
                if (invCustAddress) invCustAddress.innerText = address + (city ? `, ${city}` : '');
                if (invPayMethod) invPayMethod.innerText = payMethod;

                if (invItemsBody) {
                    let rows = '';
                    cart.forEach(item => {
                        rows += `
                            <tr>
                                <td><strong>${item.title}</strong></td>
                                <td>${item.category.toUpperCase()}</td>
                                <td>${item.qty}</td>
                                <td>${formatPrice(item.price)}</td>
                                <td>${formatPrice(item.price * item.qty)}</td>
                            </tr>
                        `;
                    });
                    invItemsBody.innerHTML = rows;
                }

                if (invSubtotal) invSubtotal.innerText = formatPrice(subtotal);
                if (invShipping) invShipping.innerText = shipping === 0 ? 'FREE' : formatPrice(shipping);
                if (invDiscountRow && invDiscount) {
                    if (activeDiscountPercent > 0) {
                        invDiscountRow.style.display = 'flex';
                        invDiscount.innerText = `-${formatPrice(discountAmount)} (30% OFF)`;
                    } else {
                        invDiscountRow.style.display = 'none';
                    }
                }
                if (invGrandTotal) invGrandTotal.innerText = formatPrice(grandTotal);

                invModal.classList.add('active');

                localStorage.removeItem(CART_STORAGE_KEY);
                activeDiscountPercent = 0;
                updateNavCartBadge();
                renderCartPage();
                checkoutForm.reset();

                showToast("🎉 Order placed successfully! Invoice generated.");
            } else {
                alert(`🎉 ORDER PLACED SUCCESSFULLY!\n\nOrder ID: #${orderId}\nCustomer: ${name}\nGrand Total: ${formatPrice(grandTotal)}\nMethod: ${payMethod}\n\nA confirmation has been sent to ${email}.`);
                localStorage.removeItem(CART_STORAGE_KEY);
                activeDiscountPercent = 0;
                updateNavCartBadge();
                renderCartPage();
                checkoutForm.reset();
            }
        });
    }

    const closeInvoiceBtn = document.getElementById('closeInvoiceBtn');
    if (closeInvoiceBtn) {
        closeInvoiceBtn.addEventListener('click', () => {
            const invModal = document.getElementById('invoiceModal');
            if (invModal) invModal.classList.remove('active');
            window.location.href = 'products.html';
        });
    }
}

function renderCartPage() {
    const container = document.getElementById('cartTableContainer');
    const summarySubtotal = document.getElementById('summarySubtotal');
    const summaryShipping = document.getElementById('summaryShipping');
    const summaryDiscountRow = document.getElementById('summaryDiscountRow');
    const summaryDiscountVal = document.getElementById('summaryDiscountVal');
    const orderGrandTotal = document.getElementById('orderGrandTotal');
    const checkoutCard = document.getElementById('checkoutCard');

    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-state">
                <span class="empty-cart-icon">🛒</span>
                <h3>Your Shopping Cart is Empty</h3>
                <p>Looks like you haven't added any electronics to your cart yet. Explore our top-tier devices and start shopping!</p>
                <a href="products.html" class="btn btn-primary">Explore Products 🚀</a>
            </div>
        `;
        if (summarySubtotal) summarySubtotal.innerText = formatPrice(0);
        if (summaryShipping) summaryShipping.innerText = formatPrice(0);
        if (summaryDiscountRow) summaryDiscountRow.style.display = 'none';
        if (orderGrandTotal) orderGrandTotal.innerText = formatPrice(0);
        if (checkoutCard) checkoutCard.style.display = 'none';
        return;
    }

    if (checkoutCard) checkoutCard.style.display = 'block';

    let subtotal = 0;
    let tableHtml = `
        <table class="cart-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
    `;

    cart.forEach(item => {
        const itemSub = item.price * item.qty;
        subtotal += itemSub;

        tableHtml += `
            <tr>
                <td>
                    <div class="cart-product-cell">
                        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                        <div>
                            <h4>${item.title}</h4>
                            <span class="cat-badge">${item.category.toUpperCase()}</span>
                        </div>
                    </div>
                </td>
                <td>${formatPrice(item.price)}</td>
                <td>
                    <div class="qty-control">
                        <button class="qty-btn" onclick="updateItemQuantity(${item.id}, -1)">−</button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-btn" onclick="updateItemQuantity(${item.id}, 1)">+</button>
                    </div>
                </td>
                <td class="subtotal-cell">${formatPrice(itemSub)}</td>
                <td>
                    <button class="btn-remove-item" onclick="removeCartItem(${item.id})" title="Delete item">🗑️</button>
                </td>
            </tr>
        `;
    });

    tableHtml += `
            </tbody>
        </table>
        <div class="cart-table-footer">
            <a href="products.html" class="btn btn-secondary">← Continue Shopping</a>
            <button class="btn btn-danger btn-sm" onclick="clearFullCart()">Clear Entire Cart 🧹</button>
        </div>
    `;

    container.innerHTML = tableHtml;

    const shipping = subtotal >= 99 ? 0 : 15;
    const discountAmount = subtotal * activeDiscountPercent;
    const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

    if (summarySubtotal) summarySubtotal.innerText = formatPrice(subtotal);
    if (summaryShipping) summaryShipping.innerText = shipping === 0 ? 'FREE' : formatPrice(shipping);
    
    if (summaryDiscountRow && summaryDiscountVal) {
        if (activeDiscountPercent > 0) {
            summaryDiscountRow.style.display = 'flex';
            summaryDiscountVal.innerText = `-${formatPrice(discountAmount)} (30% OFF)`;
        } else {
            summaryDiscountRow.style.display = 'none';
        }
    }

    if (orderGrandTotal) orderGrandTotal.innerText = formatPrice(grandTotal);
}

function updateItemQuantity(id, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;

    if (item.qty <= 0) {
        removeCartItem(id);
    } else {
        saveCart(cart);
        renderCartPage();
    }
}

function removeCartItem(id) {
    let cart = getCart();
    cart = cart.filter(i => i.id !== id);
    saveCart(cart);
    renderCartPage();
    showToast("🗑️ Item removed from cart");
}

function clearFullCart() {
    if (confirm("Are you sure you want to remove all items from your cart?")) {
        localStorage.removeItem(CART_STORAGE_KEY);
        activeDiscountPercent = 0;
        updateNavCartBadge();
        renderCartPage();
        showToast("🧹 Cart cleared successfully");
    }
}

// ==========================================================================
// 8. HERO SLIDER FUNCTIONALITY (index.html)
// ==========================================================================
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    
    if (!slides.length) return;
    
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
    }

    function nextSlide() { showSlide(currentSlide + 1); }
    function prevSlide() { showSlide(currentSlide - 1); }

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAuto(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAuto(); });

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => { showSlide(idx); resetAuto(); });
    });

    function startAuto() { slideInterval = setInterval(nextSlide, 5000); }
    function resetAuto() { clearInterval(slideInterval); startAuto(); }

    startAuto();
}

// ==========================================================================
// 9. PROMOTIONAL COUNTDOWN TIMER (index.html)
// ==========================================================================
function initDealCountdown() {
    const dealEndTime = new Date().getTime() + (3 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000);

    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = dealEndTime - now;

        if (distance < 0) {
            clearInterval(timerInterval);
            const timerEl = document.getElementById('countdownTimer');
            if (timerEl) timerEl.innerHTML = "<span>Deal Expired!</span>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const dEl = document.getElementById('days');
        const hEl = document.getElementById('hours');
        const mEl = document.getElementById('minutes');
        const sEl = document.getElementById('seconds');

        if (dEl) dEl.innerText = String(days).padStart(2, '0');
        if (hEl) hEl.innerText = String(hours).padStart(2, '0');
        if (mEl) mEl.innerText = String(minutes).padStart(2, '0');
        if (sEl) sEl.innerText = String(seconds).padStart(2, '0');
    }, 1000);
}

// ==========================================================================
// 10. ENHANCED QUICK VIEW MODAL (Specs, What's In The Box, Reviews & Warranty)
// ==========================================================================
function openQuickView(id) {
    const product = productsData.find(p => p.id === id);
    if (!product) return;

    const quickViewModal = document.getElementById('quickViewModal');
    const quickViewContent = document.getElementById('quickViewContent');

    if (!quickViewModal || !quickViewContent) return;

    const isWish = isInWishlist(product.id);
    const specsList = product.specs.map(spec => `<li>✓ ${spec}</li>`).join('');

    let inBoxSection = '';
    if (product.inBox && product.inBox.length > 0) {
        const inBoxItems = product.inBox.map(item => `<li>📦 ${item}</li>`).join('');
        inBoxSection = `
            <h4 style="color: #f8fafc; font-size: 0.95rem; margin-top: 14px; margin-bottom: 8px;">What's In The Box:</h4>
            <ul class="quick-view-specs" style="list-style: none; padding-left: 0; margin-bottom: 15px;">
                ${inBoxItems}
            </ul>
        `;
    }

    const reviewsCount = product.reviews ? `${product.reviews} Customer Reviews` : 'Verified Buyer Ratings';
    const warrantyText = product.warranty || "2-Year Official Manufacturer Warranty & 7-Day Easy Replacement.";

    const stockText = product.inStock <= 4
        ? `<span style="color: #f59e0b; font-weight: 600;">🔥 Hurry! Only ${product.inStock} units left in stock</span>`
        : `<span style="color: #10b981; font-weight: 600;">🟢 In Stock (Express 24h Dispatch Available)</span>`;

    quickViewContent.innerHTML = `
        <div class="quick-view-media">
            <img src="${product.image}" alt="${product.title}" class="quick-view-img">
        </div>
        <div class="quick-view-details">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="product-cat">${product.category.toUpperCase()}</span>
                <button class="btn-wishlist-toggle ${isWish ? 'active' : ''}" style="position: static; box-shadow: none;" onclick="toggleWishlist(${product.id}); openQuickView(${product.id});">
                    ${isWish ? '❤️ Saved to Wishlist' : '🤍 Add to Wishlist'}
                </button>
            </div>
            
            <h2 style="font-size: 1.4rem; margin: 8px 0; color: #ffffff;">${product.title}</h2>
            <div class="product-rating" style="margin-bottom: 10px;">${product.rating} <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 400;">(${reviewsCount})</span></div>
            
            <div class="product-price-row" style="margin-bottom: 12px;">
                <span class="current-price" style="font-size: 1.6rem;">${formatPrice(product.price)}</span>
                <span class="old-price" style="font-size: 1.05rem;">${formatPrice(product.oldPrice)}</span>
            </div>

            <div style="margin-bottom: 12px; font-size: 0.88rem;">${stockText}</div>
            
            <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 15px;">${product.description}</p>
            
            <h4 style="color: #f8fafc; font-size: 0.95rem; margin-bottom: 8px;">Technical Specifications:</h4>
            <ul class="quick-view-specs" style="list-style: none; padding-left: 0; margin-bottom: 12px;">
                ${specsList}
            </ul>

            ${inBoxSection}

            <div style="background: rgba(37, 99, 235, 0.1); border: 1px solid rgba(37, 99, 235, 0.25); padding: 10px 14px; border-radius: 6px; font-size: 0.82rem; color: #94a3b8; margin-bottom: 15px;">
                🛡️ <strong>Official Guarantee:</strong> ${warrantyText}
            </div>

            <button class="btn btn-primary btn-block" style="margin-top: 5px;" onclick="addToCart(${product.id}, '${product.title.replace(/'/g, "\\'")}', ${product.price}, '${product.image}', '${product.category}'); closeQuickView();">
                Add to Cart 🛒
            </button>
        </div>
    `;

    quickViewModal.classList.add('active');
}

function closeQuickView() {
    const quickViewModal = document.getElementById('quickViewModal');
    if (quickViewModal) {
        quickViewModal.classList.remove('active');
    }
}

function initQuickViewModal() {
    const closeBtn = document.getElementById('closeQuickViewBtn');
    const modal = document.getElementById('quickViewModal');

    if (closeBtn) closeBtn.addEventListener('click', closeQuickView);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeQuickView();
        });
    }
}

// ==========================================================================
// 11. FORMS & MOBILE NAV HANDLERS
// ==========================================================================
function initFormHandlers() {
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('userName').value;
            alert(`Thank you, ${name}! 👋\n\nYour inquiry has been submitted to SHAIK ELECTRONIC STORE. We will respond within 24 hours.`);
            contactForm.reset();
        });
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("🎉 Thank you for subscribing to Shaik Electronics Deals & Tech Updates!");
            newsletterForm.reset();
        });
    }
}

function initMobileNav() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// ==========================================================================
// 12. TOAST NOTIFICATION HELPER
// ==========================================================================
function showToast(message) {
    let toast = document.getElementById('toastNotification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastNotification';
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }

    toast.innerText = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

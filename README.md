# ⚡ SHAIK ELECTRONIC STORE - Multi-Page Web Development Project

> **Academic Level:** 3rd-Year B.Tech Computer Science / Information Technology  
> **Author:** Shaik  
> **Tech Stack:** Pure HTML5, CSS3 (Flexbox & CSS Grid), Vanilla JavaScript (ES6, LocalStorage State Sync)  
> **Architecture:** Multi-Page Web Application (Home, Products, Cart & Checkout, About, Contact)

---

## 📖 Project Overview
**SHAIK ELECTRONIC STORE** is a multi-page consumer electronics e-commerce and showroom website. It showcases an inventory across:
1. **Smartphones & Flagship Mobiles**
2. **Laptops & Workstations**
3. **Audio & Studio ANC Headphones**
4. **Smartwatches & Wearables**
5. **Smart TVs & Modern Home Appliances**

All pages seamlessly share a persistent shopping cart state using browser `localStorage`.

---

## 🌐 Multi-Page Structure & Sitemap
```text
SHAIK_ELECTRONIC_STORE/
│
├── index.html       # Home Page (Slider, Trust Badges, Deals, Testimonials, Quick Links)
├── products.html    # Dedicated Products Catalog (Category Tabs, Search, Price/Name Sorting)
├── cart.html        # Dedicated Shopping Cart & Checkout (Table, Quantity Controls, Promo Coupon, Billing Form)
├── about.html       # Dedicated About Us Page (Showroom Story, Core Values, Metrics)
├── contact.html     # Dedicated Contact & Location Page (Store Details, Timings, Inquiry Form)
├── style.css        # Unified CSS3 Stylesheet (Dark Theme, Grid, Flexbox, Tables, Form Design)
├── script.js        # Unified Vanilla JS Logic (LocalStorage Cart Sync, Filters, Timer, Modals)
└── README.md        # Comprehensive Academic Project Documentation
```

---

## 🌟 Key Features & Capabilities

### 1. `index.html` (Home Showcase)
- **Top Bar Multi-Currency Switcher**: Real-time price conversion between **USD ($)**, **INR (₹)**, and **EUR (€)** across all pages.
- **Wishlist Integration**: Interactive ❤️ heart bookmarking system with slide-out drawer modal and `localStorage` persistence.
- Automatic 5-second interval Hero Banner Slideshow with dot indicators and manual arrows.
- Value Proposition Bar (Fast Shipping, Official 2-Year Warranty, 7-Day Easy Returns, No-Cost EMI).
- Trending Gadgets preview linking to the full catalog.
- Promotional Deal-of-the-Week countdown ticker (live days, hours, mins, secs).
- Customer Testimonials & Reviews.

### 2. `products.html` (Dedicated Products Catalog)
- **Expanded 16 Flagship Gadget Inventory**: iPhone 16 Pro Max, Galaxy S25 Ultra, ROG Strix 18 Gaming, PS5 Pro, Sony WH-1000XM5, Apple Watch Ultra 2, Dyson Purifier, Razer Mouse, and more.
- Real-time instant search bar (searches titles, categories, and technical specs).
- Sort dropdown: Default, Price Low-to-High, Price High-to-Low, Name A-to-Z.
- **Category Filter Tabs with Dynamic Counts**: *All Products (16), Smartphones, Laptops & PC, Audio & Sound, Smartwatches, Home Appliances, Gaming & Consoles*.
- **Budget Price Filter Chips**: *All Budgets, Under $200, $200 – $750, $750 & Above*.
- **Stock Urgency Indicators**: Real-time stock status badges (*"🟢 In Stock"* vs *"🔥 Only 2 left!"*).
- **Interactive Quick View Modal** displaying in-depth specifications, warranty tags, and stock counts.
- Direct **Add to Cart** with animated toast notifications.

### 3. `cart.html` (Dedicated Cart, Checkout & Digital Invoice)
- Full interactive Cart Items Table (Image, Title, Category Badge, Unit Price, Quantity controllers `+` / `−`, Item Subtotal, Delete `🗑️`).
- Cart state automatically saved in `localStorage` across page navigation and browser reloads.
- Promo Coupon discount system (Use code **`SHAIKTECH30`** to deduct 30% from the grand total).
- Clear Entire Cart functionality.
- Complete Billing & Delivery details form with payment method selection (Card, UPI / QR, Net Banking, COD).
- **Digital Printable Invoice Modal**: Generates a professional itemized receipt with Order ID (`#SE-2026-XXXX`), customer info, price breakdowns, and a "Print / Save PDF" button (`window.print()`).

### 4. `about.html` & `contact.html`
- Showroom background story, mission, and live counter metric cards (15k+ customers, 500+ gadgets, 24/7 support).
- Core Guarantees & Values.
- Store location, operating hours, telephone lines, and inquiry form with validation.

---

## 💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/furqanshaik2006-spec/SHAIK-ELECRONIC-STORE-PROJECT-2-.git
cd SHAIK-ELECRONIC-STORE-PROJECT-2-
```

### 2. Run the application

Open `index.html` in your web browser:

- **Double-click `index.html`** in file explorer, or
- **Use VS Code Live Server extension** (Right-click `index.html` → *Open with Live Server*), or
- **Run a simple local HTTP server**:
  ```bash
  # Python 3
  python -m http.server 3000
  ```
  Then navigate to `http://localhost:3000` in your web browser.

---

## 🌐 Live Demo
Visit the live deployed web store:  
👉 **[https://furqanshaik2006-spec.github.io/SHAIK-ELECRONIC-STORE-PROJECT-2-/](https://furqanshaik2006-spec.github.io/SHAIK-ELECRONIC-STORE-PROJECT-2-/)**

---

## 🎓 Viva-Voce / Project Defense Guide
When demonstrating this project to your examiner:
1. **Multi-Page Architecture**: Explain that the project is cleanly separated into individual HTML files (`index.html`, `products.html`, `cart.html`, etc.) providing modularity and clear page hierarchies.
2. **Dual State Management via `localStorage`**: Explain how `script.js` manages both cart (`shaik_electronic_store_cart`) and wishlist (`shaik_electronic_store_wishlist`) states, keeping user selections synchronized across different pages without a backend server.
3. **Multi-Currency System**: Demonstrate switching currencies ($ USD, ₹ INR, € EUR) in the top-bar and explain how `formatPrice()` recalculates and renders currency symbols and amounts dynamically on the client side.
4. **Printable Invoice Modal & CSS `@media print`**: Show the checkout flow and explain how `@media print` hides the website headers/footers to render an ink-friendly, professional invoice ready for PDF saving or physical printing.
5. **Responsive CSS Design**: Explain your use of **CSS Grid** for two-dimensional product matrices and **Flexbox** for alignment of navigation bars, table cells, and form rows, along with media queries for mobile/tablet screens.

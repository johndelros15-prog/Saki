// Product Data
const products = {
    women: [
        {
            id: 'w1',
            name: 'Eclaire Lattafa',
            description: 'Captivates the senses with creamy sweetness',
            price: 2700,
            image: 'https://via.placeholder.com/300x400/FFB6C1/8B4513?text=Eclaire+Lattafa',
            fullDescription: 'Eclaire by Lattafa is a luxurious fragrance that embodies elegance and femininity. This exquisite perfume opens with top notes of bergamot and pink pepper, creating a sparkling introduction. The heart reveals a bouquet of jasmine, rose, and orange blossom, while the base notes of vanilla, musk, and sandalwood provide a warm, sensual finish.',
            materials: 'Top Notes: Bergamot, Pink Pepper | Heart Notes: Jasmine, Rose, Orange Blossom | Base Notes: Vanilla, Musk, Sandalwood',
            longevity: '8-10 hours',
            season: 'All seasons, perfect for evening wear',
            occasion: 'Romantic dinners, special events, evening outings'
        },
        {
            id: 'w2',
            name: 'Chloe Le Parfum',
            description: 'Blooms with soft, graceful florals',
            price: 4410,
            image: 'https://via.placeholder.com/300x400/FFC0CB/8B4513?text=Chloe+Le+Parfum',
            fullDescription: 'Chloe Le Parfum is the epitome of modern femininity. This sophisticated fragrance combines the freshness of rose with the warmth of amber. The composition opens with bright notes of pink pepper and bergamot, leading to a heart of rose and jasmine, and settles into a base of cedarwood, amber, and white musk.',
            materials: 'Top Notes: Pink Pepper, Bergamot | Heart Notes: Rose, Jasmine | Base Notes: Cedarwood, Amber, White Musk',
            longevity: '6-8 hours',
            season: 'Spring and summer',
            occasion: 'Daily wear, office, casual outings'
        },
        {
            id: 'w3',
            name: 'Island Vanilla Dunes',
            description: 'Warm, opulent, and irresistibly warm',
            price: 2400,
            image: 'https://via.placeholder.com/300x400/FFE4B5/8B4513?text=Island+Vanilla+Dunes',
            fullDescription: 'Island Vanilla Dunes transports you to a tropical paradise with its intoxicating blend of vanilla and exotic spices. This fragrance captures the essence of sun-kissed beaches and warm ocean breezes. The creamy vanilla is enhanced by notes of coconut, tiare flower, and a hint of cinnamon, creating a truly addictive scent.',
            materials: 'Top Notes: Coconut, Bergamot | Heart Notes: Tiare Flower, Cinnamon | Base Notes: Vanilla, Amber, Musk',
            longevity: '7-9 hours',
            season: 'Summer and fall',
            occasion: 'Beach vacations, summer parties, romantic evenings'
        },
        {
            id: 'w4',
            name: 'Vanilla Aura',
            description: 'Unfolds like a gentle whisper of sweetness',
            price: 2900,
            image: 'https://via.placeholder.com/300x400/FFF8DC/8B4513?text=Vanilla+Aura',
            fullDescription: 'Vanilla Aura is a delicate and sophisticated interpretation of vanilla. This fragrance is not overly sweet but rather elegant and refined. It opens with fresh notes of mandarin and pear, transitions to a heart of vanilla orchid and jasmine, and finishes with a base of vanilla absolute, sandalwood, and white musk.',
            materials: 'Top Notes: Mandarin, Pear | Heart Notes: Vanilla Orchid, Jasmine | Base Notes: Vanilla Absolute, Sandalwood, White Musk',
            longevity: '5-7 hours',
            season: 'All seasons',
            occasion: 'Daily wear, office, casual meetings'
        },
        {
            id: 'w5',
            name: 'Rose Ambre Fragonard',
            description: 'Soft, warm, and exquisitely floral',
            price: 1500,
            image: 'https://via.placeholder.com/300x400/FFE4E1/8B4513?text=Rose+Ambre',
            fullDescription: 'Rose Ambre by Fragonard is a timeless classic that combines the elegance of rose with the warmth of amber. This French perfume is a tribute to femininity and grace. The fragrance opens with fresh rose petals, develops with hints of spicy pink pepper, and settles into a warm amber and musk base.',
            materials: 'Top Notes: Rose Petals, Pink Pepper | Heart Notes: Rose Absolute, Peony | Base Notes: Amber, Musk, Cedarwood',
            longevity: '6-8 hours',
            season: 'Fall and winter',
            occasion: 'Romantic dates, evening events, special occasions'
        }
    ],
    men: [
        {
            id: 'm1',
            name: 'Horizon Guy Laroche',
            description: 'A bold journey of citrus and spice',
            price: 3200,
            image: 'https://via.placeholder.com/300x400/4682B4/FFFFFF?text=Horizon+Guy+Laroche',
            fullDescription: 'Horizon by Guy Laroche is a dynamic fragrance that captures the spirit of adventure. This bold scent opens with invigorating notes of grapefruit and mandarin, spiced up with cardamom and pepper. The heart reveals lavender and geranium, while the base combines vetiver, cedarwood, and musk for a masculine finish.',
            materials: 'Top Notes: Grapefruit, Mandarin, Cardamom, Pepper | Heart Notes: Lavender, Geranium | Base Notes: Vetiver, Cedarwood, Musk',
            longevity: '8-10 hours',
            season: 'Spring and summer',
            occasion: 'Business meetings, daytime events, casual outings'
        },
        {
            id: 'm2',
            name: 'Club De Nuit Urban',
            description: 'A striking fusion of vibrant energy',
            price: 3700,
            image: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Club+De+Nuit+Urban',
            fullDescription: 'Club De Nuit Urban is a modern masculine fragrance that exudes confidence and sophistication. This scent opens with fresh lemon and bergamot, transitions to a heart of jasmine and rose, and settles into a powerful base of ambergris, musk, and patchouli. Perfect for the urban gentleman.',
            materials: 'Top Notes: Lemon, Bergamot, Pineapple | Heart Notes: Jasmine, Rose, Birch | Base Notes: Ambergris, Musk, Patchouli',
            longevity: '10-12 hours',
            season: 'All seasons',
            occasion: 'Night outs, special events, romantic evenings'
        },
        {
            id: 'm3',
            name: 'Shuhrah Elixir Rasasi',
            description: 'Exudes opulent warmth and gentle sensuality',
            price: 3000,
            image: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Shuhrah+Elixir',
            fullDescription: 'Shuhrah Elixir by Rasasi is an oriental woody fragrance that embodies masculine elegance. This sophisticated scent opens with fresh citrus and spicy notes, develops with lavender and cardamom, and finishes with a rich base of oud, amber, and musk. A true masterpiece of Middle Eastern perfumery.',
            materials: 'Top Notes: Citrus, Spices | Heart Notes: Lavender, Cardamom | Base Notes: Oud, Amber, Musk',
            longevity: '12+ hours',
            season: 'Fall and winter',
            occasion: 'Formal events, evening wear, special occasions'
        },
        {
            id: 'm4',
            name: 'Dynasty Lattafa',
            description: 'A sophisticated harmony of deep spices',
            price: 3000,
            image: 'https://via.placeholder.com/300x400/654321/FFFFFF?text=Dynasty+Lattafa',
            fullDescription: 'Dynasty by Lattafa is a regal fragrance that commands respect and admiration. This luxurious scent opens with saffron and cinnamon, transitions to a heart of rose and amber, and settles into a base of oud, sandalwood, and vanilla. Perfect for the modern king.',
            materials: 'Top Notes: Saffron, Cinnamon | Heart Notes: Rose, Amber | Base Notes: Oud, Sandalwood, Vanilla',
            longevity: '10-12 hours',
            season: 'Winter and fall',
            occasion: 'Business meetings, formal events, special celebrations'
        },
        {
            id: 'm5',
            name: 'Asad Elixir Lattafa',
            description: 'Bold, smooth, and unforgettable',
            price: 3000,
            image: 'https://via.placeholder.com/300x400/36454F/FFFFFF?text=Asad+Elixir',
            fullDescription: 'Asad Elixir by Lattafa is a powerful fragrance that captures the essence of masculine strength. This bold scent opens with black pepper and bergamot, develops with lavender and iris, and finishes with a base of vanilla, amber, and leather. A true statement fragrance.',
            materials: 'Top Notes: Black Pepper, Bergamot | Heart Notes: Lavender, Iris | Base Notes: Vanilla, Amber, Leather',
            longevity: '8-10 hours',
            season: 'All seasons',
            occasion: 'Date nights, evening events, when you want to make an impression'
        }
    ],
    unisex: [
        {
            id: 'u1',
            name: 'Forbidden Fruit',
            description: 'Delicate yet daring, with refined charm',
            price: 3550,
            image: 'https://via.placeholder.com/300x400/8B008B/FFFFFF?text=Forbidden+Fruit',
            fullDescription: 'Forbidden Fruit is a mysterious and alluring unisex fragrance that defies conventions. This intriguing scent opens with forbidden apple and blackcurrant, transitions to a heart of rose and jasmine, and settles into a base of patchouli, vanilla, and musk. Perfect for those who dare to be different.',
            materials: 'Top Notes: Forbidden Apple, Blackcurrant | Heart Notes: Rose, Jasmine | Base Notes: Patchouli, Vanilla, Musk',
            longevity: '7-9 hours',
            season: 'All seasons',
            occasion: 'Artistic events, creative meetings, when you want to stand out'
        },
        {
            id: 'u2',
            name: 'Amber Empire',
            description: 'Leaves a trail of refined elegance',
            price: 3500,
            image: 'https://via.placeholder.com/300x400/FF8C00/FFFFFF?text=Amber+Empire',
            fullDescription: 'Amber Empire is a luxurious unisex fragrance that embodies sophistication and warmth. This exquisite scent opens with bergamot and pink pepper, develops with amber and labdanum, and finishes with a base of vanilla, sandalwood, and musk. A true masterpiece of perfumery.',
            materials: 'Top Notes: Bergamot, Pink Pepper | Heart Notes: Amber, Labdanum | Base Notes: Vanilla, Sandalwood, Musk',
            longevity: '10-12 hours',
            season: 'Fall and winter',
            occasion: 'Formal events, luxury gatherings, special celebrations'
        },
        {
            id: 'u3',
            name: 'Vanilla 01 Swiss Arabian',
            description: 'Rich swirl of velvety vanilla',
            price: 2300,
            image: 'https://via.placeholder.com/300x400/F5DEB3/8B4513?text=Vanilla+01',
            fullDescription: 'Vanilla 01 by Swiss Arabian is a gourmet vanilla fragrance that transcends gender boundaries. This delicious scent opens with vanilla orchid and caramel, transitions to a heart of white chocolate and tonka bean, and settles into a base of vanilla absolute, musk, and sandalwood.',
            materials: 'Top Notes: Vanilla Orchid, Caramel | Heart Notes: White Chocolate, Tonka Bean | Base Notes: Vanilla Absolute, Musk, Sandalwood',
            longevity: '8-10 hours',
            season: 'All seasons',
            occasion: 'Cozy evenings, casual outings, when you want comfort'
        },
        {
            id: 'u4',
            name: 'Velvet Blossom Sand + Fog',
            description: 'Soft, enchanting, and quietly luxurious',
            price: 3000,
            image: 'https://via.placeholder.com/300x400/DDA0DD/8B4513?text=Velvet+Blossom',
            fullDescription: 'Velvet Blossom by Sand + Fog is a dreamy unisex fragrance that evokes sophistication and serenity. This gentle scent opens with pear and bergamot, develops with peony and rose, and finishes with a base of white musk and cedarwood. Perfect for everyday elegance.',
            materials: 'Top Notes: Pear, Bergamot | Heart Notes: Peony, Rose | Base Notes: White Musk, Cedarwood',
            longevity: '6-8 hours',
            season: 'Spring and summer',
            occasion: 'Daily wear, office, casual elegance'
        },
        {
            id: 'u5',
            name: 'Haya Lattafa',
            description: 'Luminous blend of florals and gentle sweetness',
            price: 3500,
            image: 'https://via.placeholder.com/300x400/E6E6FA/8B4513?text=Haya+Lattafa',
            fullDescription: 'Haya by Lattafa is a radiant unisex fragrance that combines the best of both worlds. This luminous scent opens with citrus and pear, transitions to a heart of jasmine and orange blossom, and settles into a base of vanilla, musk, and cedarwood. A true celebration of beauty.',
            materials: 'Top Notes: Citrus, Pear | Heart Notes: Jasmine, Orange Blossom | Base Notes: Vanilla, Musk, Cedarwood',
            longevity: '7-9 hours',
            season: 'All seasons',
            occasion: 'Daytime events, social gatherings, when you want to shine'
        }
    ]
};

// Shopping Cart
let cart = [];

// DOM Elements
const categoryBtns = document.querySelectorAll('.category-btn');
const categorySections = document.querySelectorAll('.category-section');
const ordersBtn = document.getElementById('orders-btn');
const ordersPanel = document.getElementById('orders-panel');
const ordersList = document.getElementById('orders-list');
const totalPriceEl = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const paymentModal = document.getElementById('payment-modal');
const modalBody = document.getElementById('modal-body');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
    updateCartDisplay();
});

// Setup Event Listeners
function setupEventListeners() {
    // Category Navigation
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            switchCategory(category);
        });
    });

    // Orders Button
    ordersBtn.addEventListener('click', () => {
        ordersPanel.style.display = ordersPanel.style.display === 'block' ? 'none' : 'block';
    });

    // Checkout Button
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        paymentModal.style.display = 'block';
        ordersPanel.style.display = 'none';
    });

    // Payment Form
    document.getElementById('payment-form').addEventListener('submit', (e) => {
        e.preventDefault();
        processOrder();
    });

    // Modal Close
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            e.target.closest('.modal').style.display = 'none';
        });
    });

    // Click outside modal to close
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

// Switch Category
function switchCategory(category) {
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    categorySections.forEach(section => section.classList.remove('active'));
    document.getElementById(category).classList.add('active');
}

// Render Products
function renderProducts() {
    Object.keys(products).forEach(category => {
        const container = document.getElementById(`${category}-products`);
        container.innerHTML = products[category].map(product => `
            <div class="product-card" onclick="showProductDetail('${category}', '${product.id}')">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <p class="product-price">₱${product.price.toLocaleString()}</p>
                </div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart('${category}', '${product.id}')">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        `).join('');
    });
}

// Show Product Detail
function showProductDetail(category, productId) {
    const product = products[category].find(p => p.id === productId);
    
    modalBody.innerHTML = `
        <div class="product-detail">
            <img src="${product.image}" alt="${product.name}" class="product-detail-image">
            <div class="product-detail-info">
                <h3>${product.name}</h3>
                <p><strong>Description:</strong> ${product.fullDescription}</p>
                <p><strong>Materials:</strong> ${product.materials}</p>
                <p><strong>Longevity:</strong> ${product.longevity}</p>
                <p><strong>Best Season:</strong> ${product.season}</p>
                <p><strong>Occasion:</strong> ${product.occasion}</p>
                <p class="detail-price">₱${product.price.toLocaleString()}</p>
                <button class="checkout-btn" onclick="addToCart('${category}', '${productId}'); productModal.style.display='none';">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    
    productModal.style.display = 'block';
}

// Add to Cart
function addToCart(category, productId) {
    const product = products[category].find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            category: category
        });
    }
    
    updateCartDisplay();
    
    // Show confirmation
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i>';
    btn.style.background = '#4CAF50';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
    }, 1000);
}

// Update Cart Display
function updateCartDisplay() {
    const orderCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.order-count').textContent = orderCount;
    
    if (cart.length === 0) {
        ordersList.innerHTML = '<p style="text-align: center; color: #999;">No items in your cart</p>';
        totalPriceEl.textContent = '0';
        return;
    }
    
    ordersList.innerHTML = cart.map(item => `
        <div class="order-item">
            <div class="order-item-info">
                <div class="order-item-name">${item.name}</div>
                <div>₱${item.price.toLocaleString()} x ${item.quantity}</div>
            </div>
            <button class="remove-item" onclick="removeFromCart('${item.id}')">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPriceEl.textContent = total.toLocaleString();
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Process Order
function processOrder() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    const name = document.querySelector('#payment-form input[type="text"]').value;
    const phone = document.querySelector('#payment-form input[type="tel"]').value;
    const email = document.querySelector('#payment-form input[type="email"]').value;
    
    // Simulate payment processing
    setTimeout(() => {
        paymentModal.style.display = 'none';
        alert('Thanks for your order! This is only a demo store. Your order has been received and will be processed shortly.');
        cart = [];
        updateCartDisplay();
        
        // Reset form
        document.getElementById('payment-form').reset();
    }, 1500);
}

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const floatingElements = document.querySelectorAll('.floating-perfume');
    floatingElements.forEach((el, index) => {const speed = (index + 1) * 0.02;
        const x = (window.innerWidth - e.clientX * speed) / 100;
        const y = (window.innerHeight - e.clientY * speed) / 100;
        el.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

import { useMemo, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { categories, products, reviews } from './data';

const formatPrice = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Living Room', to: '/category/living-room' },
  { label: 'Bedroom', to: '/category/bedroom' },
  { label: 'Dining', to: '/category/dining' },
  { label: 'Storage', to: '/category/storage' },
  { label: 'Decor', to: '/category/decor' },
  { label: 'Offers', to: '/offers' },
  { label: 'Contact', to: '/contact' },
];

const featuredProductIds = ['coco-sofa', 'harbor-dining', 'velvet-bed', 'oak-cabinet'];

function App() {
  const [cartItems, setCartItems] = useState([
    { productId: 'coco-sofa', quantity: 1 },
  ]);
  const [wishlist, setWishlist] = useState(['harbor-dining']);

  const addToCart = (productId) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (existing) {
        return current.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { productId, quantity: 1 }];
    });
  };

  const toggleWishlist = (productId) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  };

  const cartProducts = cartItems
    .map((item) => {
      const product = products.find((entry) => entry.id === item.productId);
      if (!product) return null;
      return { ...product, quantity: item.quantity };
    })
    .filter(Boolean);

  const cartTotal = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="page-shell">
      <TopBar />
      <Header cartCount={cartCount} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                wishlist={wishlist}
              />
            }
          />
          <Route
            path="/category/:slug"
            element={
              <CategoryPage
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                wishlist={wishlist}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductPage
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                wishlist={wishlist}
              />
            }
          />
          <Route
            path="/offers"
            element={<OffersPage addToCart={addToCart} wishlist={wishlist} toggleWishlist={toggleWishlist} />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/wishlist"
            element={
              <WishlistPage
                wishlistProducts={wishlistProducts}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                wishlist={wishlist}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartProducts={cartProducts}
                cartTotal={cartTotal}
                addToCart={addToCart}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <span>Free Shipping over ₹4,999 | 48-hour delivery</span>
        <div className="mini-links">
          <Link to="/contact">Track Order</Link>
          <Link to="/contact">Store Locator</Link>
          <Link to="/contact">Help</Link>
        </div>
      </div>
    </div>
  );
}

function Header({ cartCount }) {
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="Banjara Market home">
          <span className="brand-mark">B</span>
          <span className="brand-name">BANJARA MARKET</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive || (location.pathname === item.to && item.to === '/')
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button className="icon-button" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 4a7 7 0 1 1 0 14a7 7 0 0 1 0-14Zm0 0l9 9" /></svg>
          </button>
          <Link to="/wishlist" className="icon-button" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.25c-4.13-2.65-8.25-6.13-8.25-10.5A4.75 4.75 0 0 1 8.5 5a5.45 5.45 0 0 1 3.5 1.44A5.45 5.45 0 0 1 15.5 5a4.75 4.75 0 0 1 4.75 4.75c0 4.37-4.12 7.85-8.25 10.5Z" /></svg>
          </Link>
          <Link to="/cart" className="icon-button cart-button" aria-label="Cart">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h2l2.5 9.5a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.8L20 7H7" /><circle cx="10" cy="18" r="1.5" /><circle cx="17" cy="18" r="1.5" /></svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <Link className="primary-button" to="/offers">Shop now</Link>
        </div>
      </div>
    </header>
  );
}

function HomePage({ addToCart, wishlist, toggleWishlist }) {
  const heroSlides = [
    {
      title: 'Luxury seating',
      name: 'Coco 3-Seater Sofa',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Dining elegance',
      name: 'Harbor Dining Set',
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Bedroom comfort',
      name: 'Velvet Queen Bed',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Modern living made easy</span>
            <h1>Make your home feel alive.</h1>
            <p>
              Discover handcrafted furniture, cozy accents, and statement pieces designed to
              transform every room into a warm and personal retreat.
            </p>
            <div className="cta-row">
              <Link className="primary-button" to="/offers">Explore collection</Link>
              <Link className="secondary-button" to="/contact">Design advice</Link>
            </div>
            <div className="hero-metrics">
              <div>
                <strong>50K+</strong>
                <span>Happy homes</span>
              </div>
              <div>
                <strong>2,000+</strong>
                <span>Products</span>
              </div>
              <div>
                <strong>4.8/5</strong>
                <span>Customer rating</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            {heroSlides.map((item, index) => (
              <div key={item.name} className={`hero-slide ${index === 0 ? 'active' : ''}`}>
                <img src={item.image} alt={item.name} />
                <div className="slide-card">
                  <small>{item.title}</small>
                  <strong>{item.name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="promo-bar">
        <div className="container promo-row">
          <div><strong>Free delivery</strong> on orders above ₹4,999</div>
          <div><strong>Easy returns</strong> 10-day policy</div>
          <div><strong>Design help</strong> expert assistance</div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Shop by room</h2>
            <p>Handpicked collections for every corner of your home.</p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <Link key={category.slug} to={`/category/${category.slug}`} className="category-card">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay" />
                <div className="category-copy">
                  <strong>{category.name}</strong>
                  <span>{category.count} Products</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <div className="section-head">
            <h2>Best sellers</h2>
            <p>Most-loved pieces for stylish everyday living.</p>
          </div>

          <div className="product-grid">
            {products
              .filter((product) => featuredProductIds.includes(product.id))
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  toggleWishlist={toggleWishlist}
                  isWishlisted={wishlist.includes(product.id)}
                />
              ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-grid">
          <FeatureCard
            icon="🪵"
            title="Premium materials"
            text="Solid wood finishes, sustainable touches, and modern craftsmanship that lasts."
          />
          <FeatureCard
            icon="🎨"
            title="Styling expertise"
            text="Curated designs that blend comfort, elegance, and practicality for Indian homes."
          />
          <FeatureCard
            icon="🛠️"
            title="Built to last"
            text="Sturdy frames, durable textures, and detailed construction for everyday use."
          />
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <div className="story-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
              alt="Interior styling"
            />
          </div>
          <div className="story-copy">
            <h2>Design that feels personal.</h2>
            <p>
              We curate furniture collections that bring warmth, character, and sophistication
              to your home. From cozy nooks to showpiece living rooms, every item is selected to
              create comfort and elevate your everyday lifestyle.
            </p>
            <ul className="check-list">
              <li>Custom room styling guidance</li>
              <li>Furniture tailored for Indian homes</li>
              <li>Trusted by thousands of homeowners</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <div className="section-head">
            <h2>What customers say</h2>
            <p>Real reviews from happy homes.</p>
          </div>

          <div className="review-grid">
            {reviews.map((review) => (
              <div key={review.name} className="review-card">
                <div className="stars">★★★★★</div>
                <p>“{review.quote}”</p>
                <div className="review-person">
                  <img src={review.avatar} alt={review.name} />
                  <div>
                    <strong>{review.name}</strong>
                    <small>{review.location}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container newsletter-box">
          <div>
            <h3>Get exclusive deals in your inbox</h3>
            <p>New arrivals, curated styling tips, and seasonal offers.</p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}

function CategoryPage({ addToCart, wishlist, toggleWishlist }) {
  const { slug } = useParams();
  const category = categories.find((item) => item.slug === slug);
  const items = products.filter((product) => product.category === slug);

  if (!category) {
    return <PageNotFound />;
  }

  return (
    <section className="section">
      <div className="container">
        <div className="category-banner">
          <img src={category.image} alt={category.name} />
          <div className="category-banner-copy">
            <span>{category.label}</span>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
          </div>
        </div>

        <div className="product-grid products-page-grid">
          {items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={wishlist.includes(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPage({ addToCart, wishlist, toggleWishlist }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <PageNotFound />;
  }

  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  return (
    <section className="section product-page">
      <div className="container product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <span className="eyebrow product-badge">{product.categoryLabel}</span>
          <h1>{product.name}</h1>
          <div className="rating-line">★★★★★ <span>({product.ratingCount})</span></div>
          <div className="price-row-large">
            <strong>{formatPrice(product.price)}</strong>
            <span>{formatPrice(product.originalPrice)}</span>
          </div>
          <p>{product.description}</p>
          <div className="product-actions">
            <button className="primary-button" onClick={() => addToCart(product.id)}>Add to cart</button>
            <button className="secondary-button" onClick={() => toggleWishlist(product.id)}>
              {wishlist.includes(product.id) ? 'Saved' : 'Add to wishlist'}
            </button>
          </div>

          <div className="feature-pills">
            {product.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="container related-block">
        <div className="section-head">
          <h2>You may also like</h2>
          <p>Complete your room with a coordinated look.</p>
        </div>
        <div className="product-grid">
          {related.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={wishlist.includes(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function OffersPage({ addToCart, wishlist, toggleWishlist }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>Exclusive offer zone</h2>
          <p>Save with limited-time deals on signature furniture.</p>
        </div>

        <div className="offer-banner">
          <div>
            <span>Up to 40% off</span>
            <h3>Refresh your home this season</h3>
            <p>Handpicked pieces for living rooms, bedrooms, and dining spaces.</p>
            <Link className="primary-button" to="/category/living-room">Browse offers</Link>
          </div>
        </div>

        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={wishlist.includes(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="section">
      <div className="container contact-layout">
        <div className="contact-card">
          <span className="eyebrow">Let’s help you</span>
          <h1>Visit or talk to our team</h1>
          <p>
            Need help choosing the right furniture? Our design experts are here to guide you.
          </p>
          <ul className="contact-list">
            <li>Email: hello@banjaramarket.in</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: 92, MG Road, Bengaluru</li>
          </ul>
        </div>

        <form className="lead-form">
          <div className="input-row">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
          </div>
          <div className="input-row">
            <label>
              Email
              <input type="email" placeholder="Your email" />
            </label>
          </div>
          <div className="input-row">
            <label>
              Message
              <textarea rows="5" placeholder="Tell us what you need"></textarea>
            </label>
          </div>
          <button className="primary-button" type="submit">Send inquiry</button>
        </form>
      </div>
    </section>
  );
}

function WishlistPage({ wishlistProducts, addToCart, toggleWishlist, wishlist }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>Your wishlist</h2>
          <p>Saved pieces for future styling.</p>
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="empty-state">No saved items yet. Start by adding products you love.</div>
        ) : (
          <div className="product-grid">
            {wishlistProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                isWishlisted={wishlist.includes(product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function CartPage({ cartProducts, cartTotal, addToCart }) {
  const shipping = cartProducts.length > 0 ? 499 : 0;

  return (
    <section className="section">
      <div className="container cart-layout">
        <div className="cart-list">
          <div className="section-head align-left">
            <h2>Your cart</h2>
            <p>{cartProducts.length} item(s)</p>
          </div>

          {cartProducts.length === 0 ? (
            <div className="empty-state">Your cart is empty. Explore the collection to add your favorites.</div>
          ) : (
            cartProducts.map((product) => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.name} />
                <div className="cart-item-copy">
                  <h3>{product.name}</h3>
                  <p>{product.categoryLabel}</p>
                  <strong>{formatPrice(product.price)}</strong>
                </div>
                <button className="secondary-button small-button" onClick={() => addToCart(product.id)}>
                  Add another
                </button>
              </div>
            ))
          )}
        </div>

        <aside className="cart-summary">
          <h3>Order summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>{formatPrice(cartTotal)}</strong>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <strong>{formatPrice(shipping)}</strong>
          </div>
          <div className="summary-row total-row">
            <span>Total</span>
            <strong>{formatPrice(cartTotal + shipping)}</strong>
          </div>
          <button className="primary-button full-width">Checkout</button>
        </aside>
      </div>
    </section>
  );
}

function ProductCard({ product, addToCart, toggleWishlist, isWishlisted }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <button
          className={`wishlist-button ${isWishlisted ? 'active' : ''}`}
          onClick={() => toggleWishlist(product.id)}
          aria-label="Toggle wishlist"
        >
          {isWishlisted ? '♥' : '♡'}
        </button>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
      </div>

      <div className="product-body">
        <div className="product-meta">
          <span>{product.categoryLabel}</span>
          <span>{product.badge}</span>
        </div>
        <Link to={`/product/${product.id}`} className="product-name-link">
          <h3>{product.name}</h3>
        </Link>
        <div className="rating-line">★★★★★ <span>({product.ratingCount})</span></div>
        <div className="price-line">
          <div>
            <strong>{formatPrice(product.price)}</strong>
            <span>{formatPrice(product.originalPrice)}</span>
          </div>
          <button className="add-button" onClick={() => addToCart(product.id)}>Add</button>
        </div>
      </div>
    </article>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function PageNotFound() {
  return (
    <div className="section">
      <div className="container empty-state large-empty">
        <h2>Page not found</h2>
        <p>Return home and continue exploring the collection.</p>
        <Link className="primary-button" to="/">Back to home</Link>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <span className="brand-mark">B</span>
            <span className="brand-name">BANJARA MARKET</span>
          </Link>
          <p>
            Creating warm and elegant homes with timeless modern furniture for everyday living.
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/contact">About us</Link></li>
            <li><Link to="/offers">Our story</Link></li>
            <li><Link to="/contact">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li><Link to="/contact">Shipping</Link></li>
            <li><Link to="/contact">Returns</Link></li>
            <li><Link to="/contact">FAQs</Link></li>
            <li><Link to="/contact">Warranty</Link></li>
          </ul>
        </div>

        <div>
          <h4>Visit us</h4>
          <ul>
            <li>92, MG Road</li>
            <li>Bengaluru, India</li>
            <li>Mon-Sat: 10am - 8pm</li>
            <li>hello@banjaramarket.in</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Banjara Market. All rights reserved.</span>
        <div className="socials">
          <span>f</span>
          <span>in</span>
          <span>◎</span>
        </div>
      </div>
    </footer>
  );
}

export default App;

# STIE Dwimulya Design System Guidelines

## Panduan Merek STIE Dwimulya

Panduan ini bertujuan untuk menciptakan identitas visual yang konsisten, profesional, dan modern bagi Sekolah Tinggi Ilmu Ekonomi (STIE) Dwimulya di semua platform komunikasi, baik digital maupun cetak.

---

## Harvard-Style Layout System

### Filosofi Desain
Mengadopsi pendekatan Harvard University dengan menciptakan halaman yang membangun kepercayaan dan otoritas akademik, sambil menyajikan pengalaman yang modern, dinamis, dan berorientasi pada aksi.

### Struktur Layout: Fondasi yang Berwibawa

#### Layout Blok Berirama
Halaman dibagi menjadi blok-blok konten horizontal yang jelas untuk mengorganisir informasi secara tematis dengan ritme latar belakang yang bergantian:

1. **White (#FFFFFF)** - Untuk konten utama dan hero sections
2. **Light Grey (#F5F5F5)** - Untuk section pendukung dan statistical content  
3. **Brand Black (#1E1E1E)** - Untuk featured content dan footer yang menciptakan kontras maksimal

#### Grid System 12 Kolom
- Semua elemen tersusun dalam grid 12 kolom untuk keteraturan dan konsistensi
- Responsive breakpoints: mobile-first approach
- Content containers dengan max-width untuk optimal readability
- Whitespace yang luas untuk tampilan premium

#### Komponen Visual Utama

**Hero Section:**
- Background image berkualitas tinggi dengan gradient overlay
- Tagline kuat menggunakan font Merriweather
- Quick stats dengan icons untuk instant credibility
- Clear call-to-action buttons

**Key Action Cards:**
- Tiga kartu horizontal dengan warna brand striking
- Background menggunakan Brand Black, Gold, atau Oxford Blue
- Statistics terintegrasi untuk credibility
- Icon-based visual hierarchy

**Featured Content Block:**
- Menggunakan Brand Black background untuk focal point
- Layout Harvard-style: main content (8 cols) + sidebar (4 cols)
- Card-based presentation untuk insights/articles
- Newsletter signup terintegrasi

**Dynamic Focus Areas:**
- Keyword ticker dengan font Montserrat besar
- Infinite scroll animation untuk modernitas
- Grid layout untuk detailed focus areas
- Interactive hover states

**Footer Section:**
- Brand Black background yang solid
- Comprehensive navigation dengan 4-column layout
- Contact information dengan icons
- Social media integration
- Newsletter signup

---

## Typography Standards (Brand Compliance)

### Sistem Tipografi STIE Dwimulya
Menggunakan sistem dua font modern dan gratis dari Google Fonts sesuai panduan merek resmi:

#### Primary Typeface (Untuk Judul Utama & Teks Penting)
* **Font**: Merriweather (serif)
* **Penggunaan**: Ideal untuk judul utama (headlines), sub-judul, dan kutipan
* **Karakter**: Memberikan nuansa akademis, wibawa, dan sangat mudah dibaca di layar
* **Bobot**: Regular (400), Bold (700)
* **Sumber**: Google Fonts (gratis)

#### Secondary Typeface (Untuk Teks Isi & Antarmuka)
* **Font**: Montserrat (sans serif)
* **Penggunaan**: Digunakan untuk semua teks isi (paragraf), label, menu navigasi, tombol, dan elemen antarmuka
* **Karakter**: Desain geometris dan bersih memberikan kesan modern dan rapi
* **Bobot**: Regular (400), Medium (500), SemiBold (600), Bold (700)
* **Sumber**: Google Fonts (gratis)

### Aturan Penggunaan Tipografi

#### Ukuran & Legibilitas
* **Ukuran Minimum**: 1rem (setara 16px) - tidak boleh lebih kecil dari browser default
* **X-height**: Minimum 8.3px ±5% pada ukuran 16px default
* **Line Height**: 1.4-1.6 untuk optimal readability

#### Perataan (Alignment)
* **Headings**: Selalu gunakan perataan kiri (left-aligned)
* **Text Blocks**: Perataan kiri dengan ragged right margins
* **Reading Text**: Left-aligned untuk optimal readability
* **Hindari**: Center alignment untuk headings dan justified text

#### Penekanan (Emphasis)
* **Bold**: Gunakan untuk memberikan penekanan utama
* **Italic**: Gunakan seperlunya dan hemat
* **Underline**: Hanya untuk links, jangan untuk emphasis
* **No Effects**: Hindari drop shadow, outline, atau stretching

### Typography Hierarchy

```css
/* Display Text - Merriweather */
.text-display: 3rem, Merriweather, Bold, Oxford Blue

/* Titles - Merriweather */
.text-title: 2.25rem, Merriweather, Bold, Oxford Blue
.text-subtitle: 1.75rem, Merriweather, Bold, Oxford Blue

/* Body Text - Montserrat */
.text-body-large: 1.125rem, Montserrat, Normal, Brand Black
.text-body: 1rem, Montserrat, Normal, Brand Black
.text-body-bold: 1rem, Montserrat, Bold, Brand Black

/* Navigation - Montserrat */
.nav-title: 1.125rem, Montserrat, Bold, Oxford Blue
.nav-text: 1rem, Montserrat, Medium, Brand Black

/* Captions & Labels - Montserrat */
.text-caption: 1rem, Montserrat, Normal, Slate Grey
.text-overline: 1rem, Montserrat, Bold, Uppercase, Slate Grey
```

### Wayfinding Elements
Semua elemen navigasi, menu, label, kontrol, announcements, dan alerts harus menggunakan **Montserrat (sans serif)**:
* Navigation menus
* Button labels
* Form controls
* Alert messages
* Breadcrumbs
* Search interfaces

---

## Color Palette (Palet Warna)

### Warna Inti (Core Colors)
Warna utama yang mendefinisikan merek STIE Dwimulya:

#### Oxford Blue
* **HEX**: `#002147`
* **RGB**: (0, 33, 71)
* **CMYK**: (100, 54, 0, 72)
* **Penggunaan**: Elemen utama, headings, primary buttons

#### Brand Black
* **HEX**: `#1E1E1E`
* **RGB**: (30, 30, 30)
* **CMYK**: (0, 0, 0, 100)
* **Penggunaan**: Body text, secondary elements, featured sections background

### Warna Aksen (Accent Colors)
Gunakan secara hemat untuk menyorot informasi penting:

#### Brand Gold (Aksen Hangat)
* **HEX**: `#D4AF37`
* **Karakter**: Memberi kesan prestasi dan kualitas
* **Penggunaan**: Call-to-action, highlights, achievements

#### Sky Blue (Aksen Cerah)
* **HEX**: `#A9D6E5`
* **Karakter**: Memberi kesan lapang dan modern
* **Penggunaan**: Secondary buttons, links, interactive elements

#### Slate Grey (Netral Gelap)
* **HEX**: `#8996A0`
* **Penggunaan**: Secondary text, disabled states

#### Light Grey (Netral Terang)
* **HEX**: `#F5F5F5`
* **Penggunaan**: Background sections, cards, subtle divisions

### Background Rhythm System
Untuk menciptakan visual hierarchy yang kuat:

1. **Primary Sections**: White background (#FFFFFF)
2. **Secondary Sections**: Light Grey background (#F5F5F5)  
3. **Featured Sections**: Brand Black background (#1E1E1E)
4. **Footer**: Brand Black background (#1E1E1E)

---

## Grid System & Layout Principles

### 12-Column Grid System
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.grid-cols-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
}

/* Responsive Breakpoints */
@media (max-width: 768px) {
  .col-span-12 { grid-column: span 12; }
  .col-span-6 { grid-column: span 12; }
  .col-span-4 { grid-column: span 12; }
}
```

### Layout Components

#### Hero Section Layout
```css
.hero-content {
  grid-column: span 7; /* 7 columns for content */
}

.hero-visual {
  grid-column: span 5; /* 5 columns for visual elements */
}
```

#### Content Block Layout
```css
.main-content {
  grid-column: span 8; /* 8 columns for main content */
}

.sidebar {
  grid-column: span 4; /* 4 columns for sidebar */
}
```

#### Card Grid Layout
```css
.card-grid-3 {
  grid-column: span 4; /* 3 cards per row */
}

.card-grid-2 {
  grid-column: span 6; /* 2 cards per row */
}
```

### Spacing System
```css
:root {
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 1.5rem;   /* 24px */
  --spacing-lg: 2rem;     /* 32px */
  --spacing-xl: 3rem;     /* 48px */
  --spacing-2xl: 4rem;    /* 64px */
  --spacing-3xl: 6rem;    /* 96px */
}

/* Section Spacing */
.section-padding {
  padding: var(--spacing-3xl) 0;
}

.container-padding {
  padding: 0 var(--spacing-lg);
}
```

---

## Animasi & Mikrointeraksi STIE Dwimulya

### Loading Screen System
* Initial loading dengan progress bar animasi
* Logo animation dengan pulsing effect
* Smooth transition ke main content
* Loading complete dengan notification feedback

### GSAP Animation Patterns
```javascript
// Hero Text Animation
const titleSplit = new SplitText(element, { type: "chars" });
gsap.fromTo(titleSplit.chars, 
  { opacity: 0, y: 100, rotationZ: 5 },
  { opacity: 1, y: 0, rotationZ: 0, duration: 0.8, stagger: 0.03 }
);

// Scroll-triggered Content
gsap.fromTo(elements, 
  { opacity: 0, y: 80, scale: 0.9 },
  { opacity: 1, y: 0, scale: 1, stagger: 0.2, scrollTrigger: trigger }
);

// Infinite Ticker Animation
gsap.to(ticker, {
  x: -tickerWidth,
  duration: 20,
  ease: "none",
  repeat: -1
});
```

### Filosofi Inti
Setiap gerakan harus memiliki tujuan dan selaras dengan identitas merek yang profesional, stabil, dan modern.

#### Prinsip Desain
1. **Fungsional**: Animasi harus membantu pengguna memahami apa yang terjadi
2. **Halus & Profesional**: Gerakan terasa halus, cepat, dan tidak berlebihan
3. **Konsisten**: Interaksi yang sama selalu menghasilkan animasi yang sama

### Parameter Teknis

#### Durasi Animasi
* **Cepat (150ms - 250ms)**: Untuk umpan balik instan seperti hover pada tombol
* **Standar (300ms - 500ms)**: Untuk transisi panel, modal, atau perubahan status
* **Lambat (500ms+)**: Hindari - akan terasa lambat untuk pengguna

#### Easing (Kurva Percepatan)
* **ease-out**: Untuk elemen yang muncul ke layar
* **ease-in-out**: Untuk perubahan status atau posisi elemen existing

---

## Component Guidelines

### Hero Section Components
```jsx
<HeroSection>
  <HeroContent> {/* 7 columns */}
    <Tagline /> {/* Merriweather, Display size */}
    <Subtitle /> {/* Montserrat, Body Large */}
    <CTAButtons />
    <QuickStats />
  </HeroContent>
  <HeroVisual> {/* 5 columns */}
    <BackgroundImage />
    <DecorativeElements />
  </HeroVisual>
</HeroSection>
```

### Key Action Cards
```jsx
<KeyActionCards>
  <ActionCard background="oxford-blue">
    <Icon />
    <Title /> {/* Merriweather */}
    <Subtitle /> {/* Montserrat Bold */}
    <Description /> {/* Montserrat Regular */}
    <Stats />
    <CTAButton />
  </ActionCard>
</KeyActionCards>
```

### Featured Content Block
```jsx
<FeaturedSection background="brand-black">
  <MainContent> {/* 8 columns */}
    <SectionHeader />
    <FeaturedArticle />
    <ArticleGrid />
  </MainContent>
  <Sidebar> {/* 4 columns */}
    <QuickLinks />
    <Newsletter />
    <ContactInfo />
  </Sidebar>
</FeaturedSection>
```

### Dynamic Focus Areas
```jsx
<FocusSection>
  <SectionHeader />
  <InfiniteTicker> {/* Large Montserrat */}
    <KeywordList />
  </InfiniteTicker>
  <DetailedGrid />
</FocusSection>
```

---

## Implementation Classes

### Layout Classes
```css
/* Grid System */
.grid-cols-12     /* 12-column grid */
.col-span-*       /* Column spanning */
.col-start-*      /* Column start position */

/* Spacing */
.section-padding  /* Standard section padding */
.container-padding /* Container horizontal padding */

/* Background Rhythm */
.bg-white         /* Primary sections */
.bg-light-grey    /* Secondary sections */
.bg-brand-black   /* Featured sections */

/* Typography */
.text-display     /* Hero titles */
.text-title       /* Section titles */
.text-subtitle    /* Subsection titles */
.text-body-large  /* Large body text */
.text-body        /* Regular body text */
.heading-block    /* Left-aligned headings */
.reading-text     /* Optimized paragraph text */

/* Components */
.card-micro       /* Interactive card hover */
.btn-micro        /* Button microinteractions */
.brand-shadow     /* Brand-appropriate shadows */
```

### Responsive Utilities
```css
/* Mobile-first breakpoints */
@media (min-width: 640px) { .sm\:* }
@media (min-width: 768px) { .md\:* }
@media (min-width: 1024px) { .lg\:* }
@media (min-width: 1280px) { .xl\:* }
```

---

## Quality Assurance Checklist

**Layout & Structure:**
- [ ] 12-column grid system digunakan konsisten
- [ ] Background rhythm mengikuti pattern White → Light Grey → Brand Black
- [ ] Whitespace yang cukup antara sections
- [ ] Responsive behavior di semua breakpoints
- [ ] Loading screen berfungsi dengan baik

**Typography:**
- [ ] Merriweather untuk headings dan teks penting
- [ ] Montserrat untuk wayfinding dan body text
- [ ] Left-aligned content structure
- [ ] Minimum 1rem font size
- [ ] No centered text blocks atau justified text

**Visual Hierarchy:**
- [ ] Clear section separation dengan background colors
- [ ] Proper contrast ratios untuk accessibility
- [ ] Brand colors digunakan sesuai semantic guidelines
- [ ] Icons dan imagery mendukung content

**Interactive Elements:**
- [ ] Smooth GSAP animations dengan timing yang tepat
- [ ] Microinteractions memberikan feedback yang jelas
- [ ] Hover states konsisten di semua komponen
- [ ] Loading states untuk async operations

**Content Structure:**
- [ ] Hero section dengan tagline yang kuat
- [ ] Key action cards dengan clear CTAs
- [ ] Featured content dengan sidebar layout
- [ ] Dynamic elements dengan appropriate animations
- [ ] Comprehensive footer dengan navigation

---

## Photography & Imagery Guidelines

### Hero Section Images
* **Style**: Campus life, students in action, academic activities
* **Quality**: High resolution (minimum 1920x1080)
* **Composition**: Leave space for text overlay
* **Color**: Complement brand palette
* **Format**: WebP dengan JPEG fallback

### Content Images  
* **Relevance**: Directly related to academic content
* **Diversity**: Inclusive representation of student body
* **Professional**: Consistent lighting and composition
* **Accessible**: Proper alt text untuk screen readers

---

*Panduan ini memastikan implementasi website STIE Dwimulya yang konsisten dengan identitas visual Harvard-style yang profesional, modern, dan berwibawa.*
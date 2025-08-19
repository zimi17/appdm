# STIE Dwimulya Web Design System Foundations

STIE Dwimulya's web design system provides a comprehensive component library supporting modern, scalable, and accessible digital experiences while ensuring consistency of the STIE Dwimulya brand identity and values.

This foundation document outlines accessibility standards, grid system, page templates, brand color themes, typography hierarchy, and image aspect ratios specifically designed for STIE Dwimulya's unique positioning as Indonesia's most transparent higher education institution.

**Design Philosophy**: *"Transparency, Accessibility, Regional Pride"*

---

## **Accessibility Standards**

STIE Dwimulya is committed to creating inclusive digital experiences for all prospective students and stakeholders. All web properties must comply with **WCAG 2.1 Level AA standards** and align with **Indonesian Digital Accessibility Standards (UU No. 8/2016)**.

### **Core Accessibility Requirements**
- **Keyboard Navigation**: Full website navigation without mouse dependency
- **Screen Reader Support**: NVDA, JAWS, VoiceOver compatibility  
- **Color Contrast**: Minimum 4.5:1 ratio for normal text, 3:1 for large text
- **Alternative Text**: Descriptive alt attributes for all images
- **Focus Indicators**: Clear visual focus states for interactive elements
- **Language Declaration**: Proper HTML lang attributes (id-ID primary)

### **Testing & Validation**
- **Automated**: Lighthouse accessibility scoring >90
- **Manual**: Keyboard-only navigation testing
- **User Testing**: Regular validation with vision-impaired users
- **Documentation**: Accessibility compliance reports per major release

---

## **Grid System & Layout Structure**

The STIE Dwimulya design system uses a responsive grid to establish vertical rhythm and ensure consistent alignments that reflect academic precision and professionalism.

### **Grid Specifications**
- **Desktop (≥1024px)**: 16-column grid system
- **Tablet (600px-1023px)**: 8-column grid system  
- **Mobile (<600px)**: 4-column grid system

### **Content Alignment Options**
1. **Center Alignment**: 8 columns (50% width) - Primary content blocks
2. **Wide Alignment**: 12 columns (75% width) - Feature sections
3. **Full Alignment**: 16 columns (100% width) - Hero sections, headers

### **Responsive Breakpoints**
```scss
$bp-mobile: 320px;      // Minimum mobile device
$bp-tablet: 600px;      // Tablet portrait
$bp-tablet-xl: 800px;   // Tablet landscape  
$bp-desktop: 1024px;    // Desktop start
$bp-desktop-lg: 1200px; // Large desktop
$bp-desktop-xl: 1440px; // Extra large desktop
$bp-max-width: 1600px;  // Maximum container width
```

### **Spacing System**
- **Base Unit**: 8px (0.5rem)
- **Micro Spacing**: 4px, 8px, 12px
- **Component Spacing**: 16px, 24px, 32px
- **Section Spacing**: 48px, 64px, 80px, 120px
- **Page Spacing**: 160px, 200px

---

## **Page Templates & Architecture**

STIE Dwimulya page templates prioritize **conversion optimization** and **trust building** through strategic information hierarchy.

### **1. Landing Page Template**
**Use Cases**: Homepage, Program Overview, Scholarship Information
- **Structure**: Hero Statement → Key Statistics → Value Proposition → Social Proof → CTA
- **Conversion Goals**: Scholarship inquiries, program applications
- **Trust Elements**: Accreditation badges, verified statistics, testimonials

### **2. Detail Page Template**  
**Use Cases**: Academic Programs, Faculty Profiles, News Articles
- **Structure**: Breadcrumbs → Hero Section → Content Body → Related Content → Contact CTA
- **Information Hierarchy**: Credentials → Details → Outcomes → Next Steps
- **Authority Signals**: BAN-PT numbers, industry partnerships, placement data

### **3. Application Template**
**Use Cases**: Admissions Forms, Contact Forms, Scholarship Applications  
- **Structure**: Progress Indicator → Form Sections → Validation → Confirmation
- **User Experience**: Multi-step, real-time validation, clear error messaging
- **Trust Building**: Security badges, privacy policy links, response time guarantees

### **4. Dashboard Template**
**Use Cases**: Student Portal, Career Tracking, Alumni Network
- **Structure**: Navigation Sidebar → Key Metrics → Interactive Content → Support Access
- **Functionality**: Real-time data, progress tracking, document access
- **Transparency**: Public-facing metrics, verified achievements, contact options

---

## **Brand Color System**

STIE Dwimulya color palette reflects **academic authority**, **regional pride**, and **transparent communication**.

### **Primary Brand Colors**
```scss
// Primary - Oxford Blue (Authority & Trust)
$brand-primary: #002147;
$brand-primary-light: #1a365d;
$brand-primary-dark: #001a35;

// Accent - Goldenrod (Achievement & Opportunity)  
$brand-accent: #D4A017;
$brand-accent-light: #e6b84a;
$brand-accent-dark: #b8890f;
```

### **Semantic Color System**
```scss
// Success (Achievements, Approvals)
$color-success: #28A745;
$color-success-light: #d4edda;

// Warning (Important Information)  
$color-warning: #FFC107;
$color-warning-light: #fff3cd;

// Error (Validation, Critical Info)
$color-error: #DC3545;  
$color-error-light: #f8d7da;

// Information (Tips, Additional Context)
$color-info: #17A2B8;
$color-info-light: #d1ecf1;
```

### **Neutral Color Palette**
```scss
// Text Hierarchy
$color-text-primary: #212529;    // Headlines, important text
$color-text-secondary: #495057;  // Body text, descriptions  
$color-text-muted: #6c757d;      // Captions, metadata
$color-text-disabled: #adb5bd;   // Disabled states

// Background System
$color-bg-primary: #ffffff;      // Main content areas
$color-bg-secondary: #f8f9fa;    // Alternate sections
$color-bg-tertiary: #e9ecef;     // Borders, dividers
$color-bg-overlay: rgba(0, 33, 71, 0.8); // Modal overlays
```

### **Color Usage Guidelines**
- **Oxford Blue**: Headers, navigation, primary CTAs, trust elements
- **Goldenrod**: Highlights, achievement badges, scholarship callouts, success states
- **Semantic Colors**: Form validation, status indicators, alerts
- **Neutral Scale**: Text hierarchy, backgrounds, interface elements

---

## **Typography System**

STIE Dwimulya typography emphasizes **clarity**, **authority**, and **modern professionalism** suitable for academic communications.

### **Font Stack**
```scss
// Headlines & Navigation - Work Sans
$font-headline: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

// Body Text - Work Sans  
$font-body: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

// Articles & Quotes - Source Serif Pro
$font-article: 'Source Serif Pro', Georgia, 'Times New Roman', serif;

// Code & Data - Roboto Mono
$font-mono: 'Roboto Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace;
```

### **Type Scale System**
```scss
// Headings
$text-6xl: 3.75rem;   // 60px - Page titles, hero headlines
$text-5xl: 3rem;      // 48px - Section titles  
$text-4xl: 2.25rem;   // 36px - Subsection titles
$text-3xl: 1.875rem;  // 30px - Component titles
$text-2xl: 1.5rem;    // 24px - Card titles
$text-xl: 1.25rem;    // 20px - Large text

// Body Text
$text-lg: 1.125rem;   // 18px - Large body text
$text-base: 1rem;     // 16px - Default body text
$text-sm: 0.875rem;   // 14px - Small text, captions
$text-xs: 0.75rem;    // 12px - Fine print, metadata
```

### **Typography Hierarchy**
1. **Page Titles**: Work Sans Bold, 48-60px, Oxford Blue
2. **Section Headers**: Work Sans SemiBold, 30-36px, Oxford Blue  
3. **Body Content**: Work Sans Regular, 16-18px, Text Primary
4. **Article Content**: Source Serif Pro Regular, 16-18px, Text Primary
5. **Captions**: Work Sans Regular, 14px, Text Muted
6. **Data/Metrics**: Roboto Mono Medium, 16-24px, Accent Color

---

## **Image Guidelines & Aspect Ratios**

STIE Dwimulya visual content strategy prioritizes **authenticity**, **professionalism**, and **regional representation**.

### **Core Aspect Ratios**
- **16:9** - Hero sections, video content, wide landscapes
- **3:2** - Default horizontal crop, featured images
- **4:3** - Academic content, presentation format
- **1:1** - Profile pictures, social media, icons
- **3:4** - Portrait orientation, mobile-optimized content

### **Component-Specific Guidelines**

#### **Hero Sections**
- **Aspect Ratio**: 16:9 (desktop), adapts to 3:2 (mobile)
- **Content**: Real STIE Dwimulya campus, students, faculty
- **Scaling**: Responsive background, text overlay protection
- **Quality**: High resolution (1920x1080 minimum)

#### **Card Components**  
- **Aspect Ratio**: 3:2 (horizontal), 3:4 (vertical layouts)
- **Content**: Program imagery, student activities, facilities
- **Scaling**: Proportional scaling, center-crop fallback
- **Loading**: Progressive enhancement, lazy loading

#### **Profile Images**
- **Aspect Ratio**: 1:1 (square crop to circular display)
- **Content**: Professional headshots, consistent lighting
- **Size**: 400x400px minimum, optimized for retina displays
- **Format**: WebP primary, JPEG fallback

#### **News & Articles**
- **Aspect Ratio**: 3:2 (featured images), 16:9 (video embeds)
- **Content**: Event photography, achievement documentation
- **SEO**: Descriptive alt text, structured data markup
- **Performance**: Optimized file sizes, responsive images

### **Photography Style Guidelines**
- **Authentic Content**: Real STIE Dwimulya people and locations
- **Professional Quality**: Proper lighting, composition, resolution
- **Brand Consistency**: Consistent color grading, style approach  
- **Accessibility**: High contrast, clear subject matter
- **Cultural Sensitivity**: Respectful representation of diversity

---

## **Component Architecture**

STIE Dwimulya component library follows **atomic design principles** with emphasis on **reusability** and **brand consistency**.

### **Component Hierarchy**
1. **Primitives** (Foundational) - Buttons, inputs, typography, icons
2. **Blocks** (Compound) - Cards, forms, navigation, content sections
3. **Templates** (Page layouts) - Landing pages, detail pages, applications
4. **Universal** (Global) - Headers, footers, overlays, notifications

### **Design Tokens**
```scss
// Spacing tokens
$spacing-xs: 0.25rem;   // 4px
$spacing-sm: 0.5rem;    // 8px  
$spacing-md: 1rem;      // 16px
$spacing-lg: 1.5rem;    // 24px
$spacing-xl: 2rem;      // 32px
$spacing-2xl: 3rem;     // 48px
$spacing-3xl: 4rem;     // 64px

// Border radius tokens
$radius-sm: 0.125rem;   // 2px
$radius-md: 0.25rem;    // 4px
$radius-lg: 0.5rem;     // 8px
$radius-xl: 1rem;       // 16px

// Shadow tokens  
$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
$shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
$shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
```

### **Interactive States**
- **Default**: Base appearance, clear affordances
- **Hover**: Subtle transformation, maintain accessibility
- **Focus**: High contrast outline, keyboard navigation support
- **Active**: Clear feedback, immediate response indication
- **Disabled**: Obvious unavailability, maintained layout

---

## **Performance & Technical Standards**

### **Core Performance Metrics**
- **Page Load Time**: <3 seconds on 3G connection
- **First Contentful Paint**: <2.5 seconds
- **Largest Contentful Paint**: <2.5 seconds  
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: <3.5 seconds

### **Optimization Requirements**
- **Image Optimization**: WebP format, responsive images, lazy loading
- **Code Splitting**: Route-based, component-based chunking
- **Caching Strategy**: Static assets, API responses, CDN utilization
- **Bundle Size**: <500KB initial bundle, <200KB per route

### **Technical Implementation**
- **Framework**: Next.js 15+ with TypeScript strict mode
- **Styling**: Tailwind CSS with custom design tokens
- **Components**: Headless UI + custom component library
- **Testing**: Jest, React Testing Library, Accessibility testing
- **Analytics**: Performance monitoring, user behavior tracking

---

## **Content Strategy & Messaging**

### **Brand Voice & Tone**
- **Authoritative**: Academic credibility, verified claims
- **Transparent**: Open data, clear processes, honest communication
- **Accessible**: Plain language, jargon-free explanations
- **Regional Pride**: Banten identity, national aspiration
- **Student-Centric**: Focus on outcomes, career success, personal growth

### **Content Principles**
1. **Transparency First**: All claims must be verifiable and sourced
2. **Outcome-Focused**: Emphasize career results, not just educational process
3. **Local Context**: Celebrate Banten heritage while highlighting national reach
4. **Professional Tone**: Academic authority without intimidation
5. **Action-Oriented**: Clear next steps, compelling calls-to-action

---

## **Quality Assurance & Testing**

### **Design Review Checklist**
- [ ] Brand color compliance (Oxford Blue, Goldenrod usage)
- [ ] Typography hierarchy implementation
- [ ] Responsive design across all breakpoints
- [ ] Accessibility standards validation (WCAG 2.1 AA)
- [ ] Performance metrics compliance
- [ ] Content accuracy and verification
- [ ] Cross-browser compatibility testing
- [ ] Mobile-first optimization validation

### **Launch Criteria**
- **Lighthouse Score**: 90+ across all categories
- **Accessibility Audit**: Zero critical violations
- **Performance Budget**: Meets defined thresholds
- **Content Review**: Factual accuracy verification
- **Legal Compliance**: Privacy policy, terms of service
- **Analytics Setup**: Proper tracking implementation

---

**Document Authority**: STIE Dwimulya Design System Team  
**Version**: 1.0  
**Last Updated**: January 2025  
**Next Review**: April 2025

*"Dari Serang, Untuk Indonesia – Design Excellence Through Systematic Approach"*

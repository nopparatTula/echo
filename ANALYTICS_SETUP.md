# 📊 DOT Marketing - Analytics & Tracking Setup

## 🎯 Google Analytics 4 (GA4) Setup

### 1. Initial Setup
```html
<!-- Google tag (gtag.js) - ใส่ใน Layout.astro -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. Enhanced Ecommerce Events
```javascript
// Contact Form Submission
gtag('event', 'generate_lead', {
  currency: 'THB',
  value: 15000
});

// Service Page View
gtag('event', 'page_view', {
  page_title: 'Services - DOT Marketing',
  page_location: window.location.href,
  content_group1: 'Services'
});

// Download Lead Magnet
gtag('event', 'select_content', {
  content_type: 'download',
  content_id: 'sales-page-checklist'
});
```

### 3. Custom Dimensions
- **Custom Dimension 1:** Service Type (Sales Page, SEO, Content, Consulting)
- **Custom Dimension 2:** Traffic Source Detail
- **Custom Dimension 3:** Lead Score (Hot, Warm, Cold)
- **Custom Dimension 4:** Content Category (Blog, Case Study, Guide)

### 4. Goals & Conversions
- **Primary:** Contact Form Submission
- **Secondary:** Newsletter Signup
- **Micro:** PDF Download
- **Engagement:** 3+ Page Views

## 🔍 Google Search Console Setup

### 1. Property Verification
```html
<!-- HTML tag verification - ใส่ใน Layout.astro head -->
<meta name="google-site-verification" content="your-verification-code" />
```

### 2. Sitemap Submission
- Submit: `https://dotmarketing.co.th/sitemap.xml`
- Monitor indexing status
- Check for crawl errors

### 3. URL Parameters
Set up parameter handling for:
- `?utm_source=` (ignore)
- `?service=` (track)
- `?ref=` (ignore)

## 🎯 Facebook Pixel Setup

### 1. Base Code
```html
<!-- Facebook Pixel Code - ใส่ใน Layout.astro -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

### 2. Custom Events
```javascript
// Lead Generation
fbq('track', 'Lead', {
  content_name: 'Contact Form',
  content_category: 'Lead Generation',
  value: 15000,
  currency: 'THB'
});

// View Content
fbq('track', 'ViewContent', {
  content_type: 'service',
  content_ids: ['sales-page-design'],
  content_name: 'Sales Page Design Service',
  value: 15000,
  currency: 'THB'
});
```

## 📞 Call Tracking Setup

### 1. Google Call Extensions
```html
<!-- Call tracking number -->
<a href="tel:+66891234567" onclick="gtag('event', 'phone_call', {
  event_category: 'Contact',
  event_label: 'Header Phone Number'
});">
  089-123-4567
</a>
```

### 2. Dynamic Number Insertion
- Use different numbers for different traffic sources
- Track which campaigns generate calls
- Implement call recording for quality

## 📧 Email Marketing Tracking

### 1. UTM Parameters for Email
```
Campaign Source: newsletter
Campaign Medium: email  
Campaign Name: weekly-tips-w1
Campaign Content: main-cta
```

### 2. Email Events Tracking
```javascript
// Newsletter Signup
gtag('event', 'sign_up', {
  method: 'newsletter'
});

// Email Click Through
gtag('event', 'click', {
  event_category: 'Email',
  event_label: 'Newsletter CTA'
});
```

## 🎭 Heatmap & User Behavior

### 1. Hotjar Setup
```html
<!-- Hotjar Tracking Code -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_HJID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

### 2. Key Pages to Track
- Homepage heatmaps
- Services page behavior
- Contact form interactions
- Blog post engagement

## 📊 Dashboard Setup

### 1. Google Data Studio Dashboard
**Sections:**
- Traffic Overview (Sessions, Users, Bounce Rate)
- Acquisition (Source/Medium breakdown)
- Behavior (Top Pages, Time on Site)
- Conversions (Goals, Revenue, ROI)
- SEO Performance (Rankings, CTR, Impressions)

### 2. Weekly Reports
**Automated Reports to Include:**
- Traffic growth week-over-week
- Top performing content
- Conversion funnel analysis
- SEO keyword performance
- Social media engagement

### 3. Monthly Business Review
**KPIs to Track:**
- Total Leads Generated
- Cost Per Lead (CPL)
- Lead to Customer Conversion Rate
- Customer Lifetime Value (CLV)
- Return on Ad Spend (ROAS)

## 🎯 Conversion Funnel Tracking

### 1. Awareness Stage
- Blog post views
- Social media engagement
- Organic search impressions

### 2. Interest Stage  
- Service page views
- Case study downloads
- Newsletter signups

### 3. Consideration Stage
- Contact form views
- Pricing page time
- Multiple page sessions

### 4. Decision Stage
- Contact form submissions
- Phone calls
- Consultation bookings

## 🔧 Technical Implementation

### 1. Tag Manager Setup
Use Google Tag Manager for:
- All tracking codes
- Event triggers
- Conversion tracking
- A/B testing scripts

### 2. GDPR Compliance
```html
<!-- Cookie Consent -->
<script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"></script>
<script>
window.addEventListener("load", function(){
  window.cookieconsent.initialise({
    "palette": {
      "popup": {"background": "#dc2626"},
      "button": {"background": "#ffffff", "text": "#dc2626"}
    },
    "content": {
      "message": "เว็บไซต์นี้ใช้คุกกี้เพื่อประสบการณ์ที่ดีที่สุด",
      "dismiss": "ยอมรับ",
      "link": "นโยบายความเป็นส่วนตัว"
    }
  })
});
</script>
```

### 3. Performance Monitoring
- Page load speed tracking
- Core Web Vitals monitoring  
- Mobile usability alerts
- Broken link monitoring

## 📈 ROI Calculation

### 1. Attribution Model
- **First Touch:** SEO/Content Marketing
- **Last Touch:** Paid Ads/Direct
- **Multi-Touch:** Full customer journey

### 2. Revenue Tracking
```javascript
// Service Purchase
gtag('event', 'purchase', {
  transaction_id: 'T12345',
  value: 15000,
  currency: 'THB',
  items: [{
    item_id: 'sales-page-design',
    item_name: 'Sales Page Design',
    category: 'Digital Marketing',
    quantity: 1,
    price: 15000
  }]
});
```

### 3. Campaign ROI Formula
```
ROI = (Revenue - Cost) / Cost × 100

Example:
- SEO Campaign Cost: 50,000 THB/month
- Revenue Generated: 200,000 THB/month  
- ROI = (200,000 - 50,000) / 50,000 × 100 = 300%
```

## ⚡ Quick Setup Checklist

### Week 1: Foundation
- [ ] Google Analytics 4 setup
- [ ] Google Search Console verification
- [ ] Sitemap submission
- [ ] Basic event tracking

### Week 2: Enhanced Tracking  
- [ ] Facebook Pixel implementation
- [ ] Call tracking setup
- [ ] Hotjar heatmaps
- [ ] Email marketing UTMs

### Week 3: Reporting
- [ ] Data Studio dashboard
- [ ] Automated reports
- [ ] Goal tracking
- [ ] Conversion funnels

### Week 4: Optimization
- [ ] Performance analysis
- [ ] A/B testing setup
- [ ] ROI calculations
- [ ] Strategy adjustments

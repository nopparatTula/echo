# Strapi Blog Setup Guide

## ขั้นตอนการติดตั้ง Strapi สำหรับ Blog

### 1. สร้างโปรเจกต์ Strapi
```bash
npx create-strapi-app@latest blog-cms --quickstart
cd blog-cms
```

### 2. สร้าง Content Types

#### Blog Post Content Type
- **Collection Name**: Post
- **API ID**: post

**Fields:**
- title (Text - Required)
- slug (UID - Required, target field: title)
- excerpt (Text)
- content (Rich text - Required)
- featured_image (Media - Single)
- published_at (DateTime)
- author (Relation - One to One with User)
- category (Relation - Many to One with Category)
- tags (Relation - Many to Many with Tag)
- seo_title (Text)
- seo_description (Text)
- status (Enumeration: draft, published)

#### Category Content Type
- **Collection Name**: Category  
- **API ID**: category

**Fields:**
- name (Text - Required)
- slug (UID - Required, target field: name)
- description (Text)
- color (Text)

#### Tag Content Type
- **Collection Name**: Tag
- **API ID**: tag  

**Fields:**
- name (Text - Required)
- slug (UID - Required, target field: name)

### 3. Configuration

#### Database (SQLite for development)
```javascript
// config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
```

#### CORS Settings
```javascript
// config/middlewares.js
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:4321', 'http://localhost:3000', 'https://your-domain.com'],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

### 4. API Permissions
ไปที่ Settings > Roles > Public และเปิด permissions สำหรับ:
- Post: find, findOne
- Category: find, findOne  
- Tag: find, findOne

### 5. Sample Data

#### Categories
1. Digital Marketing (slug: digital-marketing)
2. Sales Strategy (slug: sales-strategy)
3. SEO Tips (slug: seo-tips)
4. Web Design (slug: web-design)

#### Tags
- conversion-optimization
- landing-page
- google-ads
- social-media
- content-marketing
- keyword-research
- technical-seo

#### Sample Posts
1. "10 เทคนิคสร้าง Landing Page ที่แปลงยอดขายได้จริง"
2. "วิธีทำ SEO ให้ติดอันดับ 1 ใน Google 2024"
3. "กลยุทธ์ Content Marketing ที่ช่วยเพิ่มยอดขาย"
4. "การออกแบบ Sales Page ที่ขายได้"

### 6. Start Strapi
```bash
npm run develop
```

Admin panel จะเปิดที่: http://localhost:1337/admin
API endpoint: http://localhost:1337/api

### 7. API Endpoints สำหรับ Astro

#### Get all posts
```
GET /api/posts?populate=*&sort=published_at:desc
```

#### Get post by slug  
```
GET /api/posts?filters[slug][$eq]=post-slug&populate=*
```

#### Get categories
```
GET /api/categories?populate=*
```

#### Get posts by category
```
GET /api/posts?filters[category][slug][$eq]=category-slug&populate=*
```

### 8. Environment Variables สำหรับ Astro
```
# .env
STRAPI_URL=http://localhost:1337
```

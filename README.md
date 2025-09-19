# SalesPage Pro - เว็บไซต์บริษัทให้บริการด้าน Sales Page และ SEO

เว็บไซต์บริษัทที่สร้างด้วย Astro และ Strapi สำหรับให้บริการด้าน Sales Page Design, SEO Optimization และ Digital Marketing

## ✨ Features

- 🚀 **Fast Performance** - สร้างด้วย Astro Static Site Generator
- 🎨 **Modern Design** - UI/UX ที่สวยงามและทันสมัย
- 📱 **Responsive** - รองรับทุกอุปกรณ์
- 🔍 **SEO Optimized** - เตรียมพร้อมสำหรับ SEO
- 📝 **Blog System** - ระบบ Blog ที่ใช้ Strapi CMS
- 💼 **Portfolio** - แสดงผลงานและเคสสตัดี้
- 📞 **Contact Form** - ฟอร์มติดต่อที่ทำงานได้จริง

## 🛠️ Tech Stack

### Frontend (Astro)
- **Astro** - Static Site Generator
- **React** - สำหรับ Interactive Components
- **Tailwind CSS** - CSS Framework
- **TypeScript** - Type Safety

### Backend (Strapi - Optional)
- **Strapi** - Headless CMS สำหรับ Blog
- **SQLite** - Database (Development)
- **REST API** - API สำหรับดึงข้อมูล Blog

## 📁 Project Structure

```
/
├── public/
│   ├── images/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro          # หน้าหลัก
│   │   ├── about.astro          # เกี่ยวกับเรา
│   │   ├── services.astro       # บริการ
│   │   ├── portfolio.astro      # ผลงาน
│   │   ├── contact.astro        # ติดต่อ
│   │   └── blog/
│   │       ├── index.astro      # หน้า Blog หลัก
│   │       └── [slug].astro     # หน้า Blog Post
│   └── styles/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🚀 การติดตั้งและใช้งาน

### ข้อกำหนดเบื้องต้น

- Node.js 18+ 
- npm หรือ yarn

### 1. ติดตั้ง Dependencies

```bash
npm install
```

### 2. รันเว็บไซต์ (Development)

```bash
npm run dev
```

เว็บไซต์จะเปิดที่: http://localhost:4321

### 3. Build สำหรับ Production

```bash
npm run build
npm run preview
```

## 🎯 การตั้งค่า Strapi Blog (Optional)

หากต้องการใช้ระบบ Blog ที่เชื่อมต่อกับ Strapi:

### 1. สร้าง Strapi Project

```bash
# ในโฟลเดอร์แยกต่างหาก
npx create-strapi-app@latest blog-cms --quickstart
cd blog-cms
```

### 2. สร้าง Content Types

ตามคู่มือใน `strapi-setup.md`

### 3. ตั้งค่า Environment Variables

```bash
# .env
STRAPI_URL=http://localhost:1337
```

### 4. รัน Strapi

```bash
cd blog-cms
npm run develop
```

Strapi Admin จะเปิดที่: http://localhost:1337/admin

## 📄 หน้าต่างๆ ในเว็บไซต์

### 🏠 หน้าหลัก (/)
- Hero Section พร้อม CTA
- แสดงจุดเด่นของบริการ
- บริการหลักสั้นๆ
- Call-to-Action Section

### 💼 บริการ (/services)
- รายละเอียดบริการทั้ง 4 ด้าน:
  - Sales Page Design
  - SEO Optimization
  - Content Marketing
  - Digital Consulting
- ราคาและรายละเอียดของแต่ละบริการ
- ขั้นตอนการทำงาน

### 👥 เกี่ยวกับเรา (/about)
- ข้อมูลบริษัทและทีมงาน
- พันธกิจและวิสัยทัศน์
- ค่านิยมและหลักการทำงาน
- ผลงานและรางวัล

### 🎨 ผลงาน (/portfolio)
- เคสสตัดี้และผลงานที่ประสบความสำเร็จ
- ฟิลเตอร์ตามประเภทบริการ
- ผลลัพธ์และสถิติ
- ความคิดเห็นจากลูกค้า

### 📝 Blog (/blog)
- บทความด้าน Digital Marketing
- ฟิลเตอร์ตามหมวดหมู่
- ระบบค้นหาและแท็ก
- Newsletter Signup

### 📞 ติดต่อ (/contact)
- ฟอร์มติดต่อ
- ข้อมูลติดต่อ
- แผนที่ตำแหน่ง
- เวลาทำการ

## 🎨 การปรับแต่ง Design

### Colors
อัปเดตสีหลักในไฟล์ `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Blue gradient colors
      },
      secondary: {
        // Secondary colors
      }
    }
  }
}
```

### Fonts
ใช้ Google Fonts:
- **Inter** - สำหรับ body text
- **Poppins** - สำหรับ headings

### Components
สร้าง components เพิ่มเติมในโฟลเดอร์ `src/components/`

## 📱 Responsive Design

เว็บไซต์ถูกออกแบบให้รองรับ:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔧 การปรับแต่งเพิ่มเติม

### เพิ่มหน้าใหม่
1. สร้างไฟล์ `.astro` ใหม่ในโฟลเดอร์ `src/pages/`
2. ใช้ Layout หลัก
3. เพิ่มลิงก์ใน Navigation

### เชื่อมต่อฟอร์ม
แก้ไขไฟล์ `src/pages/contact.astro` เพื่อเชื่อมต่อกับ:
- Netlify Forms
- Formspree
- EmailJS
- Backend API

### เพิ่ม Analytics
เพิ่มใน `src/layouts/Layout.astro`:
- Google Analytics
- Facebook Pixel
- Other tracking scripts

## 🚀 Deployment

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy with Vercel CLI
```

### Traditional Hosting
```bash
npm run build
# Upload dist/ folder to your server
```

## 📝 To-Do List สำหรับการพัฒนาต่อ

- [ ] เชื่อมต่อฟอร์มกับ Backend
- [ ] เพิ่ม Google Analytics
- [ ] ปรับปรุงการเพิ่มประสิทธิภาพรูปภาพ
- [ ] เพิ่ม Search functionality
- [ ] เพิ่ม Multi-language support
- [ ] เชื่อมต่อกับ CRM
- [ ] เพิ่ม Payment integration
- [ ] สร้าง Admin dashboard

## 🤝 การสนับสนุน

หากต้องการความช่วยเหลือ:
1. อ่านเอกสารนี้อย่างละเอียด
2. ตรวจสอบ Issues ใน GitHub
3. สร้าง Issue ใหม่หากพบปัญหา

## 📄 License

MIT License - ดูรายละเอียดในไฟล์ LICENSE

---

**SalesPage Pro** - Your Partner in Digital Growth 🚀

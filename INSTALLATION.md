# คู่มือการติดตั้งและใช้งาน SalesPage Pro

## 📋 ข้อกำหนดเบื้องต้น

### 1. ติดตั้ง Node.js และ npm

#### macOS
**วิธีที่ 1: ดาวน์โหลดจากเว็บไซต์อย่างเป็นทางการ**
1. ไปที่ https://nodejs.org/
2. ดาวน์โหลดเวอร์ชัน LTS (แนะนำ)
3. รันไฟล์ installer และทำตามขั้นตอน

**วิธีที่ 2: ใช้ Homebrew**
```bash
# ติดตั้ง Homebrew ก่อน (ถ้ายังไม่มี)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# ติดตั้ง Node.js
brew install node
```

**วิธีที่ 3: ใช้ nvm (แนะนำสำหรับ Developer)**
```bash
# ติดตั้ง nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# รีสตาร์ท Terminal แล้วรัน
nvm install --lts
nvm use --lts
```

### 2. ตรวจสอบการติดตั้ง

```bash
node --version  # ควรแสดง v18.x.x หรือสูงกว่า
npm --version   # ควรแสดง v9.x.x หรือสูงกว่า
```

## 🚀 การติดตั้งโปรเจกต์

### 1. เปิด Terminal และเข้าไปในโฟลเดอร์โปรเจกต์

```bash
cd /Users/xx/Desktop/astro
```

### 2. ติดตั้ง Dependencies

```bash
npm install
```

หากเกิดข้อผิดพลาด ลองใช้:
```bash
npm install --legacy-peer-deps
```

### 3. รันเว็บไซต์

```bash
npm run dev
```

### 4. เปิดเว็บไซต์

เปิดเบราว์เซอร์และไปที่: http://localhost:4321

## 🔧 คำสั่งที่สำคัญ

```bash
# รันเว็บไซต์ในโหมด Development
npm run dev

# Build เว็บไซต์สำหรับ Production
npm run build

# Preview เว็บไซต์หลัง Build
npm run preview

# ตรวจสอบไฟล์ที่มีปัญหา
npm run astro check
```

## 📝 การแก้ไขปัญหาเบื้องต้น

### ปัญหา: npm command not found
**แก้ไข:** ติดตั้ง Node.js ใหม่ หรือเพิ่ม PATH

```bash
# เช็ค PATH
echo $PATH

# เพิ่ม Node.js ใน PATH (ถ้าจำเป็น)
export PATH="/usr/local/bin:$PATH"
```

### ปัญหา: Permission denied
**แก้ไข:** ใช้ nvm แทน หรือแก้ไข npm permissions

```bash
# วิธีที่ 1: ใช้ nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts

# วิธีที่ 2: แก้ไข npm global directory
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
source ~/.profile
```

### ปัญหา: Port 4321 ถูกใช้งานแล้ว
**แก้ไข:** ใช้ port อื่น

```bash
npm run dev -- --port 3000
```

### ปัญหา: Module not found
**แก้ไข:** ติดตั้ง dependencies ใหม่

```bash
rm -rf node_modules package-lock.json
npm install
```

## 🎨 การปรับแต่งเบื้องต้น

### เปลี่ยนสีหลัก
แก้ไขไฟล์ `tailwind.config.mjs`:
```javascript
colors: {
  primary: {
    500: '#YOUR_COLOR', // เปลี่ยนเป็นสีที่ต้องการ
  }
}
```

### เปลี่ยนข้อมูลบริษัท
แก้ไขไฟล์ต่างๆ ใน `src/pages/`:
- `index.astro` - หน้าหลัก
- `about.astro` - ข้อมูลบริษัท
- `contact.astro` - ข้อมูลติดต่อ

### เพิ่มรูปภาพ
ใส่รูปภาพในโฟลเดอร์ `public/images/`

## 📊 การติดตั้ง Analytics (Optional)

### Google Analytics
1. สร้างบัญชี GA4
2. เพิ่ม Tracking ID ในไฟล์ `src/layouts/Layout.astro`

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 การ Deploy

### Netlify (แนะนำ)
1. สร้างบัญชี Netlify
2. เชื่อมต่อ GitHub repository
3. ตั้งค่า Build command: `npm run build`
4. ตั้งค่า Publish directory: `dist`

### Vercel
1. สร้างบัญชี Vercel
2. Import project จาก GitHub
3. Deploy อัตโนมัติ

### Manual Upload
```bash
npm run build
# อัปโหลดโฟลเดอร์ dist/ ไปยัง web hosting
```

## 📞 การขอความช่วยเหลือ

หากพบปัญหาหรือต้องการความช่วยเหลือ:

1. ตรวจสอบ Terminal สำหรับ error messages
2. อ่านคู่มือนี้อีกครั้ง
3. ลองค้นหาปัญหาใน Google
4. สร้าง Issue ใน GitHub repository

## ✅ Checklist การติดตั้ง

- [ ] ติดตั้ง Node.js เรียบร้อย
- [ ] ตรวจสอบ `node --version` และ `npm --version`
- [ ] รัน `npm install` สำเร็จ
- [ ] รัน `npm run dev` สำเร็จ
- [ ] เปิดเว็บไซต์ที่ localhost:4321 ได้
- [ ] เว็บไซต์แสดงผลถูกต้อง
- [ ] ทดสอบการนำทางระหว่างหน้า
- [ ] ทดสอบ responsive design

---

🎉 **ยินดีด้วย! คุณติดตั้ง SalesPage Pro เรียบร้อยแล้ว**

สามารถเริ่มปรับแต่งเนื้อหาและ design ตามต้องการได้เลย

# ✏️ Portfolio Editing Guide

Welcome! This website was built with React, but you don't need to know React to change your content. Most things you'll want to edit are inside one single file.

## 🏠 Main Page Content
**File location:** `src/content.js`

Open this file to change almost anything on the homepage. You'll see blocks of text inside quotes like this:
```javascript
title: "Senior UX Designer",
```
Just replace the text between the quotes (keep the quotes!) and save the file. The website will update instantly.

### Things you can change in `src/content.js`:
- **Hero**: Your name, titles, and the typing animation.
- **Work**: The titles and descriptions of your projects shown on the homepage.
- **Skills**: The scrolling list of tools and your three expertise columns.
- **Socials**: Your LinkedIn, GitHub, and email address.

---

### 📂 Adding or Editing Projects
**Folder location:** `src/projects/`

Each project (like "Invisible AI") has its own file here.
- If you want to change the text *inside* a project page, find the file with that name (e.g., `InvisibleAICaseStudy.jsx`).
- The content is written in "JSX" which looks exactly like HTML. Look for tags like `<h1>` (Title), `<h2>` (Heading), and `<p>` (Paragraph).

---

### 🎨 Changing Colors & Styles
This site uses **Tailwind CSS**. You'll see class names like `text-blurple` or `bg-white` inside the code.
- `src/index.css`: This is where the core theme (like the "blurple" color) is defined.

---

### 🚀 Technical Tips
- **Quotes**: Always keep the quotes around your text! `title: "My Name"` is good. `title: My Name` (without quotes) will cause an error.
- **Commas**: If you see a comma at the end of a line, try to keep it there.
- **Images**: If you need to add images, place them in the `public/` folder and reference them by their name (e.g., `/my-image.jpg`).

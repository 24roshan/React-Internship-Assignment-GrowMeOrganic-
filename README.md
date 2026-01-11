# Art Institute of Chicago – Artwork Table

A React + TypeScript application built using **Vite** and **PrimeReact DataTable** to display artwork data from the Art Institute of Chicago API.  
The app implements **server-side pagination** and **persistent row selection** as per assignment requirements.

---
## 🔗 Links

- **Live Demo:**https://69637a32efd141eb65894415--growmeorgane.netlify.app/
- **GitHub Repository:**https://github.com/24roshan/React-Internship-Assignment-GrowMeOrganic-/tree/main

---

## 🛠 Tech Stack

- React (Vite)
- TypeScript
- PrimeReact
- Art Institute of Chicago API

---

## 📁 Project Structure

src/
├── App.tsx
├── ArtworkTable.tsx
├── types.ts
├── main.tsx
├── index.css
 ---

## ✨ Key Features

- Server-side pagination (API-based)
- PrimeReact DataTable implementation
- Checkbox row selection
- Persistent row selection across pages
- Custom row selection via overlay panel
- Displays selected rows count
- No prefetching or storage of other page data

---

## ⚠️ Constraints Followed

- API is called only on page change
- Only current page data is stored
- Selection state is tracked using row IDs
- No mass data storage or prefetching

---

## ▶️ Run Locally

```bash
npm install
npm run dev
👤 Author
Roshan Jha
B.Tech – Computer Science Engineering
Amity University Uttar Pradesh

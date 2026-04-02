<div align="center">

<!-- Animated Header Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=200&section=header&text=John%20Christopher%20Pineda&fontSize=45&fontColor=ffffff&fontAlignY=38&desc=Software%20Engineer%20%7C%20The%20Alpine%20Engineer&descAlignY=58&descSize=18&animation=fadeIn" width="100%"/>

<!-- Typing Animation -->
<a href="https://github.com/engineeringwithjp">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=A78BFA&center=true&vCenter=true&width=600&lines=Full+Stack+Engineer+%F0%9F%9A%80;React+%7C+Node.js+%7C+JavaScript+%E2%9C%A8;Building+elegant+solutions+%F0%9F%8F%94%EF%B8%8F;Welcome+to+my+Portfolio+%F0%9F%91%8B" alt="Typing SVG" />
</a>

<br/>

<!-- Profile Views & Social Badges -->
[![Profile Views](https://komarev.com/ghpvc/?username=engineeringwithjp&color=7c3aed&style=flat-square&label=PROFILE+VIEWS)](https://github.com/engineeringwithjp)
[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-Live-7c3aed?style=flat-square)](https://github.com/engineeringwithjp/portfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/pinedajohnchristopher/)
[![YouTube](https://img.shields.io/badge/YouTube-TheAlpineEngineer-FF0000?style=flat-square&logo=youtube)](https://www.youtube.com/@TheAlpineEngineer)
[![Instagram](https://img.shields.io/badge/Instagram-Follow-E4405F?style=flat-square&logo=instagram)](https://www.instagram.com/jpjohnpineda)

</div>

---

<!-- About Section -->
## 👨‍💻 About This Project

> **A modern, responsive developer portfolio** built with React — designed to showcase projects, skills, and engineering identity. Clean UI, smooth animations, and built to impress.

This portfolio represents more than a resume — it's a living, breathing showcase of my work, thinking, and growth as an engineer. Whether you're a recruiter, collaborator, or fellow dev, welcome aboard.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Modern UI** | Clean, dark-themed interface with smooth animations |
| 📱 **Fully Responsive** | Looks great on mobile, tablet, and desktop |
| ⚡ **React Powered** | Fast, component-based architecture |
| 🔗 **Social Integration** | GitHub, LinkedIn, YouTube & Instagram links |
| 🌊 **Smooth Animations** | Particle effects and animated transitions |
| 🧩 **Modular Components** | Easy to extend and customize |
| 🚀 **Fast Load** | Optimized for performance |

---

## 🛠️ Built With

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed before you begin:

- **Node.js** `>= 14.x` — [Download here](https://nodejs.org/)
- **npm** `>= 6.x` or **yarn** `>= 1.22`
- **Git** — [Download here](https://git-scm.com/)

Check your versions:
```bash
node --version
npm --version
git --version
```

---

### ⚙️ Installation

**1. Clone the repository**
```bash
git clone https://github.com/engineeringwithjp/portfolio.git
```

**2. Navigate into the project**
```bash
cd portfolio
```

**3. Install dependencies**
```bash
npm install
# or if you prefer yarn
yarn install
```

**4. Start the development server**
```bash
npm start
# or
yarn start
```

**5. Open in your browser**
```
http://localhost:3000
```

🎉 The portfolio is now running locally!

---

### 🏗️ Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `/build` folder, ready for deployment.

---

### 🌐 Deployment

<details>
<summary><b>🔵 Deploy to GitHub Pages</b></summary>

**1. Install gh-pages**
```bash
npm install --save-dev gh-pages
```

**2. Add to `package.json`**
```json
{
  "homepage": "https://engineeringwithjp.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

**3. Deploy**
```bash
npm run deploy
```

</details>

<details>
<summary><b>▲ Deploy to Vercel</b></summary>

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel
```

**Option B — Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your GitHub repo
4. Click **Deploy** ✅

</details>

<details>
<summary><b>🟢 Deploy to Netlify</b></summary>

**Option A — Netlify CLI**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

**Option B — Netlify Dashboard**
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop your `/build` folder
3. Done ✅

</details>

---

## 📁 Project Structure

```
portfolio/
│
├── public/                  # Static public assets
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── Assets/              # Images, icons, documents
│   │   └── ...
│   │
│   ├── components/          # Reusable React components
│   │   ├── About/
│   │   ├── Footer/
│   │   │   └── Footer.js    # ← You're here!
│   │   ├── Home/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   └── Resume/
│   │
│   ├── App.js               # Root component & routing
│   ├── App.css              # Global styles
│   └── index.js             # Entry point
│
├── package.json
└── README.md
```

---

## 🎨 Customization Guide

### 🧑 Update Personal Info

Edit `src/components/Home/Home.js` to update your name and intro.

### 🔗 Update Social Links

Edit `src/components/Footer/Footer.js`:
```jsx
// Replace these hrefs with your own links
href="https://github.com/YOUR_USERNAME"
href="https://www.youtube.com/@YOUR_CHANNEL"
href="https://www.linkedin.com/in/YOUR_PROFILE/"
href="https://www.instagram.com/YOUR_HANDLE"
```

### 🎨 Change Colors / Theme

Edit `src/App.css` — look for the `:root` CSS variables:
```css
:root {
  --primary-color: #623686;   /* Change to your brand color */
  --background: #0d1117;
  --text-primary: #ffffff;
}
```

### 🗂️ Add a New Project

In `src/components/Projects/Projects.js`, add a new `<ProjectCard>` component:
```jsx
<ProjectCard
  imgPath={yourProjectImage}
  isBlog={false}
  title="Your Project Title"
  description="A short description of what it does."
  ghLink="https://github.com/engineeringwithjp/your-repo"
  demoLink="https://your-demo.com"
/>
```

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. **Fork** the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a **Pull Request**

---

## 📊 GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=engineeringwithjp&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" height="165"/>
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=engineeringwithjp&layout=compact&theme=tokyonight&hide_border=true" height="165"/>

</div>

<div align="center">

[![GitHub Streak](https://streak-stats.demolab.com?user=engineeringwithjp&theme=tokyonight&hide_border=true)](https://git.io/streak-stats)

</div>

---

## 📬 Contact

<div align="center">

Got a project idea, job opportunity, or just want to connect?

[![LinkedIn](https://img.shields.io/badge/LinkedIn-John_Christopher_Pineda-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/pinedajohnchristopher/)
[![YouTube](https://img.shields.io/badge/YouTube-TheAlpineEngineer-FF0000?style=for-the-badge&logo=youtube)](https://www.youtube.com/@TheAlpineEngineer)
[![GitHub](https://img.shields.io/badge/GitHub-engineeringwithjp-181717?style=for-the-badge&logo=github)](https://github.com/engineeringwithjp)
[![Instagram](https://img.shields.io/badge/Instagram-jpjohnpineda-E4405F?style=for-the-badge&logo=instagram)](https://www.instagram.com/jpjohnpineda)

</div>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:24243e,50:302b63,100:0f0c29&height=120&section=footer" width="100%"/>

**Developed with ❤️ by [John Christopher Pineda](https://github.com/engineeringwithjp)**

*"Engineering solutions, one commit at a time."* 🏔️

⭐ **If you found this helpful, please star the repo!** ⭐

</div>
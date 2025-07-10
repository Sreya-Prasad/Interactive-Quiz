# 🎉 BubbleQ – Interactive Quiz Website

BubbleQ is an interactive web-based quiz application that challenges users with multiple-choice questions under a 30-second countdown. Designed with an animated bubble background and celebratory confetti effects, it makes learning fun and engaging!

---

## 📌 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage Instructions](#usage-instructions)
- [Customization](#customization)
- [Project Structure](#project-structure)
- [Author](#author)

---

## 🚀 Features

- 🧠 Multiple-choice quiz questions  
- ⏱️ 30-second countdown timer for each question  
- ✅ Submit button to confirm selected answer  
- 📊 Score tracking and instant result display  
- 🎉 Confetti animation on quiz completion  
- 🔁 Restart quiz functionality  
- 🌐 Responsive design for all screen sizes  
- 🎨 Animated bubble background for visual appeal

---

## 🛠 Technologies Used

- **HTML5** – Structure  
- **CSS3** – Styling and layout  
- **JavaScript** – Quiz logic and interactivity  
- **Canvas Confetti Library** – Celebration animation  
- **Git** – Version control  

---

## 📂 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sreya-Prasad/Interactive-Quiz.git
cd Interactive-Quiz
````

### 2. Open in Browser

You can open the project directly in a browser:

```bash
open index.html
```

Or 

**🚀 How to Host a Website Using GitHub Pages:**

🔹 Step 1: Create a GitHub Repository

- Go to https://github.com and log in.
- Click the ➕ New Repository button.
- Enter a repository name (e.g., portfolio-website).
- Choose Public visibility.
- ✅ Check "Initialize with a README".
- Click Create repository.

🔹 Step 2: Upload Your Website Files

- Click Add file → Upload files.
- Drag and drop your HTML, CSS, and JS files.
- Click Commit changes.
- (Or) use Git:
```
Copy
Edit
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/repo-name.git
git push -u origin main
```

🔹 Step 3: Enable GitHub Pages

- Go to your repository's Settings.
- Scroll down and click Pages in the sidebar.
- Under Source, select:
- - Branch: main (or master)
- - Folder: / (root)
- Click Save.

🔹 Step 4: Get Your Live Website Link

-  GitHub generates a URL like:
https://yourusername.github.io/repository-name/
- Open it to view your live site!

🔹 Step 5: Make Sure It Works

- Ensure your homepage is named index.html.
- Check all file paths (CSS, JS) are correct and relative.
- To display images, make sure your image path is ./foldername/filename in the html file.
  
Demo: [Tutorial](https://www.youtube.com/watch?v=BT4WzyT2g8k)

---
To visit site: 
   [Interactive-Quiz](https://sreya-prasad.github.io/Interactive-Quiz/)

---

## 📝 Usage Instructions

1. When the page loads, the quiz starts automatically.
2. Read the question displayed at the top.
3. Select one of the four options.
4. Click **Submit Answer** to lock in your response.
5. Your score will update after each question.
6. If time runs out, the question auto-submits.
7. On quiz completion, confetti will appear and your final score will be shown.
8. Click **Restart Quiz** to try again.
   (User Guide - PDF Uploaded)
---

## ✏️ Customization

You can easily add or modify questions in the `index.js` file:

```javascript
const quizData = [
  {
    question: "Your custom question?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Correct Answer"
  },
  ...
];
```

You can also customize:

* Timer duration
* Styling via `style.css`
* Confetti effects using the `canvas-confetti` API

---

## 📁 Project Structure

```
Ineractive-Quiz/
├── index.html         # Main HTML file
├── style.css          # All styles
├── index.js           # Quiz logic
├── assets/            # (Optional) Images or media
└── README.md          # Project documentation
```

---

## 👤 Author

**Sreya Ann Prasad**

* LinkedIn: *[https://linkedin.com/in/sreya-prasad](https://linkedin.com/in/sreya-prasad)*
* Email: *[contactsreyaprasad@gmail.com](mailto:contactsreyaprasad@gmail.com)*

---

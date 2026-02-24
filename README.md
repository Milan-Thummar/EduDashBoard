# Logged-in Course Dashboard

## 📌 Project Overview

A logged-in learning dashboard that allows users to:

- Track course progress (In Progress, Completed, Not Started)
- Discover new courses
- Navigate core user areas

The implementation focuses on **UX clarity, visual consistency, responsive design, and reusable component architecture**.
The UI was implemented based on a Figma prototype.

## 🚀 Implementation Highlights

- Component-driven architecture
- Design token approach using Tailwind + custom tokens
- Reusable UI primitives (`Button`, `ProgressCard`, `CourseCard`, `Pagination`)
- Split navigation architecture (Desktop + Mobile)
- Layout wrapper for persistent navigation
- Data abstraction layer (`courseService`)
- Simulated server-side pagination
- Type-safe domain models

## 🛠 Tech Stack

**Framework**

- React (Vite + TypeScript)

**Styling**

- Tailwind CSS (design token strategy)
- Custom UI utility classes (`ui-*` pattern)

**UI & Accessibility**

- Radix UI (Popover)
- Lucide Icons
- Skip navigation pattern

## 📦 Project Structure (Simplified)

```
src/
  components/
    navigation/
  pages/
  layout/
  data/
  types/
  styles/
  utils/
  assets/

public/
  mock/
```

## ✅ Prerequisites

Make sure you have the following installed:

- Node.js (LTS recommended)
- npm

Verify installation:

```bash
node -v
npm -v
```

## ⚙️ Setup & Run Instructions

### 1. Clone repository

```bash
git clone https://github.com/Milan-Thummar/EduDashBoard.git
cd EduDashBoard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

### 4. Build production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## 🔗 Figma Prototype

**Desktop Screen:** https://www.figma.com/proto/NqOE7HGPc1atEQQLBX95xj/EduDashboard?node-id=1-2&t=vPIZdkDlzhvyvm73-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=226%3A718&hide-ui=1

**Mobile Screen:** https://www.figma.com/proto/NqOE7HGPc1atEQQLBX95xj/EduDashboard?node-id=226-405&t=vPIZdkDlzhvyvm73-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=226%3A718&hide-ui=1

## 🔗 Repository

👉 **GitHub Repository:**
`https://github.com/Milan-Thummar/EduDashBoard.git`

## 📊 Data & Pagination Approach

The project simulates **server-side pagination**:

- Course data stored in public JSON
- UI requests only the required page
- Page size configurable without changing data
- Data fetching abstracted via `courseService`

Example API pattern simulated:

```
GET /courses?page=2&limit=6
```

## ♿ Accessibility Considerations

- Semantic HTML structure
- Skip navigation link
- Keyboard accessible navigation
- Visible focus rings
- Accessible pagination controls
- ARIA attributes for progress and navigation

## ✨ Possible Future Improvements

- Real backend API integration
- Course search & filtering
- Course detail page
- URL-driven pagination
- Prefetch next page
- Dark mode
- Internationalization (i18n)
- Analytics tracking

# Restaurant Table Ordering System (Queen's Kitchen)
**Front End Engineering - II (25CSE0203) — Project Based Evaluation-II (Phase 2)**  
**Department of Computer Science & Engineering • Chitkara University**  

---

### 📌 Project Metadata
- **Group ID**: Group G14
- **Project ID**: G14-PID-11 (Project 21: Restaurant Table Ordering System with a Re-render Audit)
- **Supervised By**: Mr. Shubham Kumar (Technical Trainer)
- **Team Leader**: Priyanshi (Roll No: 2510990889)
- **Team Members**:
  - Nishtha Sharma (Roll No: 2510990840)
  - Priyanshi (Roll No: 2510990916)
  - Trisha Jindal (Roll No: 2510990815)

---

### 🚀 Phase 2 Architectural Features

1. **Royal Guest Access Gate & Protected Route Architecture (`/` & `ProtectedRoute.jsx`)**:
   - Strict dining gatekeeper locking menu ordering, seating, and bill settlements until guest signs in.
   - Post-signout route protection instantly re-locks protected dining views to eliminate unauthenticated table mutations.

2. **Intelligent Duplicate Account Detection**:
   - Automatically cross-checks contact numbers against registered diner profiles.
   - If an existing user attempts duplicate registration, they are routed to Quick Log In with an active alert.

3. **Dynamic 12-Table Floor Plan & Seating Math (`/tables`)**:
   - Live seating map divided into Nuclear (1–5, 4 seats), Family (6–10, 6 seats), and Joint (11–12, 10 seats) dining zones.
   - Dynamic capacity arithmetic: `Available = Total (12) - Occupied`.

4. **200-Dish Culinary Architecture (`/Home`)**:
   - 4-Tier division: 50 Starters, 75 Main Course, 40 Desserts, and 35 Beverages with authentic imagery and dietary badges (Veg, Non-Veg, Vegan).

5. **Live Kitchen Display System (KDS) & Stepper (`/Kitchen`)**:
   - Real-time kitchen ticket dispatch with chef order notes and dish quantities.
   - Table lifecycle stepper: `Ordering` ➔ `Served` ➔ `Billed`.

6. **Split-Bill Financial Engine**:
   - Dynamic 5% GST computation, service charge, and automated N-way per-person split billing.

7. **Teleported 5-Star Dining Feedback Modal (`createPortal`)**:
   - Isolated in `document.body` to prevent stacking context or z-index collisions.
   - Interactive 1–5 star rating with glowing experience tags (Food Quality, Quick Service, Royal Ambience, Value for Money, Portion Size).

8. **Empirical Re-Render Audit Engine (`/Audit`)**:
   - Real-time Virtual DOM profiling comparing Naive (State Cascade) vs Optimized (Composition with `React.memo` & `useCallback`).
   - Achieves an empirical 99.5% reduction in unnecessary re-renders when scaling from 9 to 200 items.

9. **Full-Device Mobile Responsiveness**:
   - Fluid Grid layout, 1-column mobile reflow, touch-inertia horizontal swipe bars, minimum 44px tap targets, and a sticky floating mobile order drawer for phones and tablets.

---

### 📂 Official Deliverables Included
- **`G-14 - PID-11.pptx`**: Official 9-Slide Evaluation Presentation Deck
- **`G-14 - PID-11.pdf`**: Official 10-Page Evaluation Report with Chitkara Cover
- **`src/`**: Complete React 18 Single Page Application Source Code
- **`public/images/`**: High-resolution dish and branding photography

---

### 💻 Local Setup & Execution
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

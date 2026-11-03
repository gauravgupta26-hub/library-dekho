# 👀 Library Dekho

## City Public Library Membership & Book Catalog System

*A responsive, interactive frontend web application to search books, explore library branches, buy memberships and reserve books, all in one place.*

**🌐 Live Demo:** https://library-dekho.vercel.app/

**Presented by Team Sandworm**

---

## 🎓 Academic Details

| Field | Details |
|---|---|
| University | Lovely Professional University (LPU), Phagwara, Punjab |
| Course | CSE326 – Internet Programming |
| Section | K3P26FK |
| Project Title | City Public Library Membership And Book Catalog System |
| Website Name | Library Dekho 👀 |
| Team Name | Team Sandworm |
| Deployment | https://library-dekho.vercel.app/ |

---

## 👥 Team Members

| S.No | Name | Registration ID |
|---|---|---|
| 1 | Gaurav Kumar | 12609757 |
| 2 | Sagar | 12608681 |
| 3 | Ravi Raushan Kumar | 12608441 |

---

## 📖 About the Project

**Library Dekho** is a frontend application that helps users manage and access a city public library's membership and book catalog system. Users can sign up, browse a searchable book catalog, check library branch details, buy a membership with concession plans, join a library by selecting a time slot, and place book hold requests. The interface supports dark and light modes and works on mobile, tablet and desktop.

## 🎯 Project Objective

To develop a responsive, interactive frontend application that helps users manage or access city public library membership and book catalog services.

---

## ✅ Project Requirements Covered

| Required Functionality | How It Is Implemented |
|---|---|
| Public library book search catalog with filters for Fiction, History, Science, Literature and Competitive Exam books | Catalog page with live search and category filter buttons |
| Library branch directory with addresses, reading room seating capacities and operating hours | Branches page with a card for every branch, including LPU Library, Phagwara |
| Online library membership registration form with Student / Senior Citizen concession plans | Membership page with Student, Senior Citizen and General plans |
| Book reservation hold request form allowing members to hold books at their nearest branch | Reserve page where members hold a book at a branch of their choice |

---

## ✨ Features

### 📚 Book Catalog
- 29 books across 5 categories
- Filters: Fiction, History, Science, Literature, Competitive Exam
- Live search by book title or author
- Book details popup with a "Go & Read" link that opens Wikipedia

### 🏛️ Branch Directory
- Address, reading room seating capacity and operating hours for every branch
- LPU Library, Phagwara included
- Libraries added through membership appear here as "My Library"
- Join option on every branch with date and time slot selection

### 🪪 Membership
- Online registration with Student, Senior Citizen and General plans
- Unique Membership ID generated on registration
- Header button changes from red "Buy Membership" to green "Member" after purchase
- "Find a Library Near You": choose from 10 states and get 2 random district libraries
- Join is allowed only after the membership is bought

### 📌 Book Reservation
- Members place a hold request for a book at a branch of their choice
- "My Holds" list with a "Go & Read" link for each reserved book

### 🔐 Login and Sign Up
- Simple sign up with name, Gmail and address
- Login using the registered Gmail

### 🎨 Interface
- Animated 👀 splash screen
- Dark / Light mode toggle, remembered across visits
- Tilted "The Art of Reading" featured book card that straightens on hover or tap
- Responsive layout using CSS Grid and Flexbox

### 🆘 Help and Feedback
- Direct Telegram support link
- Star rating and Google review option
- Network overview showing libraries connected across states

---

## 🗺️ Supported States

Punjab, Haryana, Bihar, Uttar Pradesh, Delhi, Maharashtra, Rajasthan, Gujarat, West Bengal, Karnataka

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and layout |
| CSS3 | Styling, CSS variables, Grid, Flexbox, animations, dark and light themes |
| JavaScript (ES6) | Interactivity, filtering, forms, navigation and app state |
| localStorage | Saving accounts, memberships, joins and holds in the browser |
| Vercel | Deployment and hosting |

---

## 📁 Project Structure

```
library-dekho/
├── index.html    # Page structure: splash, auth, sections, modals
├── style.css     # Styling, responsive layout, dark and light themes
├── script.js     # Catalog, auth, membership, join slots, reservations
└── README.md     # Project documentation
```

---

## 🚀 Run Locally

1. Clone the repository
   ```
   git clone https://github.com/<your-username>/library-dekho.git
   ```
2. Open the folder
   ```
   cd library-dekho
   ```
3. Open `index.html` in any web browser

No installation or build tools are needed.

---

## 🧭 How to Use

1. Sign up with your name, Gmail and address.
2. Browse the catalog, filter by category or search, and click a book for details.
3. Open Membership, choose a plan and buy your membership.
4. Select your state and add a nearby district library.
5. Open Branches, click Join, and pick a date and time slot.
6. Use Reserve to hold a book at your preferred branch.
7. Visit Help for support, ratings and reviews.

---

## ⚠️ Note

This is a frontend-only academic project. All data (accounts, memberships, joins and holds) is stored in the browser's localStorage, so it stays on the user's own device and is not shared across devices.

---

## 🔮 Future Scope

- Backend with a real database for accounts and memberships
- Online payment integration for membership plans
- Real book covers and live catalog data
- Email notifications for holds and join confirmations
- Admin panel for library staff

---

## 🙏 Acknowledgements

- Lovely Professional University (LPU) for the opportunity and guidance
- Faculty of CSE326 – Internet Programming
- Wikipedia for book reference links

---

## 👨‍💻 Made by Team Sandworm

**Gaurav Kumar (12609757) · Sagar (12608681) · Ravi Raushan Kumar (12608441)**

CSE326 Internet Programming · Section K3P26FK · Lovely Professional University

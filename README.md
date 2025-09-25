## Website Pages Overview

### Home Page  
The home page welcomes visitors with a strong **headline** and **call-to-action**. It highlights why people should choose us, showcases our main services, and shares company achievements. Visitors can explore client testimonials, learn about our process, and preview the latest blog posts. The page concludes with a clear call-to-action to guide them forward.  

### About Us Page  
The about page introduces who we are and what we stand for. It shares our story, vision, and values, while also highlighting the milestones we’ve achieved. Visitors can get to know our team through short bios, photos, and social links.  

### Services Page  
The services page explains what we offer in a simple and clear way. Users can filter services by category, and at the end of the page, they will find a clear call-to-action to move forward.  

### Service Details Page  
This page provides detailed information about a specific service. It also includes a call-to-action that encourages users to contact us directly.  

### Gallery Page  
The gallery page showcases our recent work, company impact, and projects. Users can open a modal to view detailed project information.  

### Blogs Page  
The blogs page presents valuable service-related content written by our team. Users can filter blogs by category for easy navigation.  

### Blog Details Page  
On this page, users can read the full blog content and gain deeper insights. At the end of the page, a clear call-to-action encourages them to get in touch.  

### Contact Page  
The contact page provides multiple ways for users to connect with us. It features a contact form managed with **Zustand**, where all submitted information is stored in the Zustand store.  



✅ All pages are fully responsive and optimized for all devices.

---

### How to run the Application

| Command             | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| `npm run dev`       | Start Next.js in **development** mode with Turbopack.              |
| `npm run build`     | Create an optimized **production build** using Turbopack.          |
| `npm run start`     | Run the production server (after `build`).                         |
| `npm run lint`      | Lint the codebase with **ESLint**.                                 |
| `npm run typecheck` | Type-check the codebase with **TypeScript** (no files emitted).    |
| `npm run test`      | Run unit tests with **Vitest** in the terminal.                    |
| `npm run test:ui`   | Run Vitest in **UI mode** (browser interface for debugging tests). |

> 💡 Use `dev` during development, `build` + `start` for production, and `lint`, `typecheck`, `test` to keep code quality high.

---


### File & Folder Structure

```
/company-portfolio
├─ app/                                 # Root folder of app
│  ├─ about/page.tsx                    # About us Page
│  ├─ blogs/
│  │  ├─ [slug]/page.tsx                # Blog Details page
│  │  ├─ page.tsx                       # Blogs List page
│  ├─ contact/page.tsx                  # Contact page
│  ├─ gallery/page.tsx                  # Gallery page
│  ├─ services/
│  │  ├─ [slug]/page.tsx                # Service Details page
│  │  ├─ page.tsx                       # Services List page
│  ├─ favicon.ico                       # Application favicon
│  ├─ layout.tsx                        # App Root layout
│  ├─ not-found.tsx                     # Page Not found page
│  └─ page.tsx                          # Home Page
├─ components/
│  ├─ layout/                           # App layout related components like: `Container.tsx & RootLayout.tsx` .
│  ├─ sections/                         # Pages section related components.
│  ├─ skeleton/                         # Loading, NotFound content and skeleton related components.
│  ├─ ui/                               # App small UI related components.
│  └─ ui/shadcnui/                      # shadcn ui library components.
├─ data/
│  ├─ blogs.ts                          # Blogs data
│  ├─ company.ts                        # Company Info data
│  ├─ constant.ts                       # Static or Constant data
│  ├─ gallery.ts                        # Gallery or Projects data
│  ├─ services.ts                       # Services Data
│  ├─ teams.ts                          # Teams Data
│  └─ testimonial.ts                    # Client Testimonials Data
├─ lib/
│  ├─ utils.ts                          # Utility functions
│  └─ validator.ts                      # Validator functions
├─ public/
│  ├─ images/                           # App all images
│  ├─ logo-white.svg                    # Application logo for Dark background
│  └─ logo.svg                          # Application main logo
├─ store/
│  ├─ useFilter.ts                      # Store for all types of filter value
│  ├─ useMobileMenu.ts                  # Store for mobile menu status
│  └─ useStore.ts                       # Store for storing contact data
├─ styles/
│  └─ globals.css                       # Application css styles
├─ tests/
│  ├─ lib/                              # lib unit test folder for testing lib related function
│  │  ├─ utils.test.ts
│  │  └─ validator.test.ts
│  └─ setup.ts                          # vitest setup
├─ types/
│  └─ index.ts                          # Definition TypeScript types
├─ .gitignore                           # gitignore file for github
├─ components.json                      # shadcn ui generated json file
├─ eslint.config.mjs                    # EsLint configuration file
├─ next.config.js                       # Next Js configuration file
├─ package.json                         # Application packages data
├─ postcss.config.mjs                   # Tailwind css generated config file for postcss
├─ README.md                            # Simple documentation about application
├─ tsconfig.json                        # TypeScript configuration file
└─ vitest.config.ts                     # vitest configuration file
```

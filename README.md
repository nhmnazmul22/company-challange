# Pro Lubricant Website Pages Overview

## Home Page

The home page welcomes visitors with a strong **headline** and **call-to-action**, emphasizing premium lubricants and industrial oils. It highlights why customers should choose Pro Lubricant, showcases top products, and presents company achievements. Visitors can explore client testimonials, learn about our process, and preview the latest industry insights. The page concludes with a clear call-to-action for inquiries or purchases.

## About Us Page

The about page introduces Pro Lubricant’s history, vision, and values. It shares milestones, company achievements, and sustainability initiatives. Visitors can get to know the team with short bios, photos, and social links, reinforcing trust and expertise.

## Products Page

The products page showcases our complete range of automotive, industrial, and specialty lubricants. Users can filter products by category, view key features, and access product details. Each product has a clear call-to-action to purchase or request more information.

## Product Details Page

This page provides detailed specifications, key benefits, usage instructions, and safety information for each product. High-quality images and organized sections ensure clarity. A call-to-action encourages users to contact sales or request a quote.

## Gallery Page

The gallery page displays company events, certifications, product applications, and facility images. Hover overlays reveal titles, and modals provide more information when images are clicked.

## Blogs Page

The blogs page presents expert articles on lubrication technology, maintenance tips, and industry trends. Users can filter blogs by category to find relevant content quickly.

## Blog Details Page

Users can read full articles on product care, technical updates, and best practices. Each blog ends with a call-to-action to contact Pro Lubricant for consultation or purchases.

## Contact Page

The contact page provides multiple ways to connect, including a form managed with Zustand, email, phone, and office locations. Clear guidance ensures inquiries are directed to the right team efficiently.

---

✅ All pages are fully responsive, optimized for performance, and designed for a professional lubricant brand experience.

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

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

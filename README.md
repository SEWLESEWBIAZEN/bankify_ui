********for better prievew, click on "readme.md" -> click on "code" tab next to "preview"************

Here is the file structure of my project, bankify_ui. It is a banking application(frontend) which automates manual works of a financial insitution that is small sized like credit associations.

├── .gitignore
├── README.md
├── app
    ├── (root)
    │   ├── dashboard
    │   │   └── page.tsx
    │   ├── layout.tsx
    │   ├── loading.tsx
    │   ├── page.tsx
    │   └── users
    │   │   └── page.tsx
    ├── CenteralStore.ts
    ├── _components
    │   ├── one-time
    │   │   ├── common
    │   │   │   ├── Navlinks.tsx
    │   │   │   └── Sidebar.tsx
    │   │   └── users
    │   │   │   ├── column.tsx
    │   │   │   └── index.tsx
    │   └── reusable
    │   │   ├── Button.tsx
    │   │   ├── DataTable.tsx
    │   │   ├── DataTableColumnHeader.tsx
    │   │   ├── DataTablePagination.tsx
    │   │   ├── DebounceInput.tsx
    │   │   ├── Filter.tsx
    │   │   └── PageNavBar.tsx
    ├── _lib
    │   ├── data
    │   │   └── users.ts
    │   └── utils.ts
    ├── _services
    │   └── envService.ts
    ├── favicon.ico
    ├── globals.css
    ├── layout.tsx
    └── page.tsx
├── components.json
├── components
    ├── theme-provider.tsx
    ├── theme-togle.tsx
    └── ui
    │   ├── avatar.tsx
    │   ├── button.tsx
    │   ├── checkbox.tsx
    │   ├── dropdown-menu.tsx
    │   ├── select.tsx
    │   └── table.tsx
├── definitions
    └── type-definitions
    │   └── user.ts
├── lib
    └── utils.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public
    ├── file.svg
    ├── globe.svg
    ├── next.svg
    ├── vercel.svg
    └── window.svg
├── tailwind.config.ts
└── tsconfig.json

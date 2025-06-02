# My SvelteKit Portfolio & Blog

This is a SvelteKit project for my personal portfolio and blog, built with a focus on minimalism, performance, and reflecting my technical interests.

## Getting Started

1.  **Clone the repository (or create files):**
    If you haven't already, create a new SvelteKit project:
    ```bash
    npm create svelte@latest my-portfolio
    # Choose: Skeleton project, TypeScript (or JavaScript), and other preferences.
    ```
    Then, replace the relevant generated files in `src/` with the code provided.

2.  **Install Dependencies:**
    Navigate into your project directory and run:
    ```bash
    cd my-portfolio
    npm install
    # or pnpm install / yarn install
    ```

3.  **Setup `Drafting* Mono` Font:**
    *   Acquire the `Drafting* Mono` web font files (e.g., `.woff2`, `.woff`).
    *   Create a `static/fonts` directory.
    *   Place your font files inside `static/fonts/`.
    *   Open `src/app.css` and add/update the `@font-face` rules at the top to correctly point to your font files. Example:
        ```css
        @font-face {
          font-family: 'Drafting Mono';
          src: url('/fonts/DraftingMono-Regular.woff2') format('woff2'); /* Adjust filename */
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        /* Add more for bold/italic variants if you have them */
        ```

4.  **Update Personal Information:**
    *   Search for `[Your Last Name]` and replace it with your actual last name (e.g., in `src/app.html`, `src/routes/+page.svelte`, `src/routes/about/+page.svelte`).
    *   Update `your.email@example.com` in `src/routes/contact/+page.svelte`.
    *   Update `YOUR_LINKEDIN_PROFILE_URL` in `src/routes/contact/+page.svelte` and `src/lib/components/Footer.svelte`.
    *   Review and customize the content in `src/lib/projectsData.js`, `src/lib/blogData.js`, and `src/routes/about/+page.svelte` to match your actual projects, posts, and details.

5.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    Open your browser to `http://localhost:5173` (or the port specified in your terminal).

## Building for Production

```bash
npm run build

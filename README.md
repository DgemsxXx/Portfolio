# IDENTRA

An independent creative studio portfolio for graphic design, AI UGC ad concepts, kinetic typography, and brand identities. It develops the supplied IDENTRA prototype into a responsive site with an editorial hero, original graphic artwork, a filterable project rail, accessible concept previews, a five-step process, and a project inquiry form.

## Technologies

- React 19 and TypeScript for the interface.
- TanStack Start and TanStack Router for server rendering and file-based routing.
- Vite and the Netlify TanStack Start plugin for deployment.
- Tailwind CSS 4 and custom CSS for the responsive visual system.
- Lucide icons, Anton, Manrope, and JetBrains Mono for iconography and typography.
- Netlify Forms for securely collecting project inquiries without a custom backend or database.

## Local development

Use Node.js 22 and pnpm. Install dependencies with `pnpm install`, then run `netlify dev --port 8889` from the project root. This starts the Vite application through Netlify’s local development environment. A basic frontend-only session can also use `pnpm dev`, but it does not provide Netlify form processing.

The production build is configured in `netlify.toml` and is performed by the deployment pipeline. Form registration requires a deployed build containing `public/__forms.html` and enabled Netlify Forms detection.

## Content and customization

Project titles, categories, descriptions, and deliverables live in `src/data/projects.ts`. All current projects are explicitly labeled original concepts or visual studies; they are not claimed to be real client campaigns. The previews animate graphic artwork, not finished video footage, and have no audio. Add approved client assets before presenting real campaign work.

`src/components/Artwork.tsx` contains the original CSS/SVG compositions. `src/styles.css` defines the palette, typography, artwork, responsive layouts, and reduced-motion behavior. The supplied reference is preserved in `docs/assets/identra-prototype.html`; it is not served as part of the live site.

The home page and its interactions live in `src/routes/index.tsx`. Site title, description, sharing metadata, favicon, and fallback pages are configured in `src/routes/__root.tsx`. Google Fonts are loaded from their hosted stylesheet with system-font fallbacks.

## Project inquiries

The React form submits URL-encoded data to `/__forms.html`, which avoids TanStack Start’s SSR catch-all. Its hidden form registration skeleton mirrors all submitted fields. A honeypot discourages spam, and the UI includes native validation, sending feedback, a timeout, retry messaging, and confirmation. Inquiry details are not written to browser storage or local files.

View submissions in the site’s Netlify Forms dashboard after deployment. Configure email notifications in Netlify if you want new inquiries delivered to an inbox. No unverified email address or social account has been added to the site.

## Accessibility

The site includes a skip link, semantic sections, visible focus indicators, keyboard-operable filters and carousels, native dialog focus management and Escape dismissal, labeled form controls, live feedback, and reduced-motion support.

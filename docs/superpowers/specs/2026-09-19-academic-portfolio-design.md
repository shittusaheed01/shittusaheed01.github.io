# Academic Portfolio Design Specification

**Date:** 2026-09-19  
**Route:** `/academic-portfolio`  
**Public name:** Saheed Shittu

## Purpose

Present Saheed Shittu's academic profile to prospective graduate supervisors, admissions committees, and research collaborators. The page will communicate research direction and evidence clearly without exposing private application materials.

## Scope

Create a self-contained, static Next.js route with its own title, description, canonical URL, Open Graph metadata, and academic-profile structured data. The existing professional portfolio will not link to this route, and this route will not link back to it or share its navigation.

The page will include:

1. A research-led introduction, research interests, and concise academic profile.
2. Academic credentials: BEng in Electrical and Electronics Engineering, First Class Honours, CGPA 4.60/5.00, and 2nd of 32 in the Power Systems and Machines option.
3. The 2025 co-authored publication on rotor-angle stability in Nigeria's 330 kV power grid, with its DOI.
4. The 2.5 kVA inverter and solar-sizing application as the selected engineering project.
5. Teaching and research-assistant experience at Moshood Abiola Polytechnic.
6. Completed certifications only:
   - Embedded Systems (Arduino), 2019.
   - Renewable Power and Electricity Systems, University of Colorado Boulder via Coursera, 2026.
7. A direct academic-contact link.

## Content boundaries

Use the consolidated Academic CV dated 18 September 2026 as the source of record. Do not publish application statements, recommendation letters, referees' details, identification documents, passport material, scholarship plans, application deadlines, or certificates/courses still in progress.

## Visual direction

Use a light, restrained editorial system distinct from the existing dark professional portfolio: near-white paper background, ink text, muted slate rules, and a single research-blue accent. Pair an expressive display face for headings with a highly readable body face. Use a structured grid, generous spacing, precise typographic hierarchy, and subtle hover and focus states. The layout must remain legible at 375 px, 768 px, 1024 px, and 1440 px, support keyboard navigation, and respect reduced-motion preferences.

## Technical design

- Add `app/academic-portfolio/page.tsx` and a route-specific `layout.tsx`.
- Keep academic content in a dedicated data module rather than importing the professional portfolio profile.
- Use a route-local CSS module so academic styling does not affect the professional pages.
- Add the public route to the static sitemap and confirm it is present in the static export.
- Add focused export checks for the route, its canonical metadata, structured data, and completed certifications.

## Acceptance criteria

- `/academic-portfolio` renders as an independent academic site on desktop and mobile.
- Its metadata describes Saheed Shittu's academic work and uses the route's canonical URL.
- The page includes the verified publication, project, teaching experience, education, and both completed certifications.
- No private application or reference content appears.
- No existing professional navigation item points to the new route.
- Type checking, production build, and export tests pass.

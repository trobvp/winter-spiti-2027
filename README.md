# Winter Spiti 2027 — GitHub Pages Website

A mobile-first, interactive expedition marketing website based on the provided **14-page Winter Spiti 2027 brochure**. Built with plain HTML, CSS and JavaScript; no build tools, server, databases or paid libraries are needed.

## What is included

- `index.html`: semantic SEO-ready landing page with tour content and booking/enquiry section
- `styles.css`: responsive visual styling, animations, mobile menus and typography
- `script.js`: interactive daily itinerary, route selector, gallery, packing checklists, 14-page brochure viewer, countdown, FAQ-supporting interactions and WhatsApp enquiries
- `assets/`: imagery and organiser logos extracted from the supplied brochure; all images are local
- `Winter-Spiti-2027-Brochure.pdf`: downloadable copy of the original brochure
- `favicon.svg`: site icon

The only external requests are to **Google Fonts** for optional typography and **WhatsApp / Google Maps** when a visitor intentionally follows those links. Fallback fonts mean the site still renders without Google Fonts. The website does not collect data or accept payments.

## Publish with GitHub Pages

1. Create a new public repository on GitHub, e.g. `winter-spiti-2027`.
2. Upload **all contents of this folder**, preserving the `assets/` subfolder. The `index.html` file must be in the repository root.
3. In the repository open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, choose branch `main` and folder `/(root)`, then save.
5. Open the public GitHub Pages URL shown in the Pages settings. For a repository named `winter-spiti-2027`, the URL normally looks like `https://YOUR-USERNAME.github.io/winter-spiti-2027/`.

Alternatively, place the folder contents in the root of your username's `YOUR-USERNAME.github.io` repository.

## Before advertising

- Contact the organisers to reconfirm availability, terms, road access and any updates. The brochure's specific dates and payment deadlines remain as originally printed.
- **Base package:** ₹39,999 per person; **double sharing only**. The brochure excludes vehicle, fuel, GST @ 5%, lunch and other fees. This is stated on the website.
- The brochure states a **₹5,000 non-refundable booking amount**, a **50% refund of amount paid before 14 January** and **15% refund in the last seven days**. These may overlap in application, so the website recommends confirming exact terms in writing.
- The current WhatsApp enquiry recipient is **YHM Expeditions: +91 99985 56599**. Edit the phone number in `script.js` / `index.html` if necessary.
- The expedition runs **21–31 January 2027**. A live countdown changes to a passed-departure message after its start date.
- Scenic and vehicle artwork was extracted from the brochure, so it is **illustrative**, not a claim about actual January 2027 road conditions.
- The form composes a WhatsApp message locally; it does **not** store entries or send data to a database. To collect leads automatically you would need to connect a form service or your own backend later.

## Easy customizations

- Modify package or contact text in `index.html`.
- Update day-by-day itinerary, route stops and personal/vehicle checklists in `script.js`.
- Adjust colours/fonts in the `:root` variables in `styles.css`.
- Replace photos in `assets/` while keeping the same filenames (or change references in the files).
- For social cards, if you have a **custom domain**, change `og:image` to an absolute `https://` URL for best WhatsApp / Facebook preview support. GitHub Pages path-relative images are not always picked up by social preview bots.

## Privacy & accessibility

Images have meaningful alt text, mobile navigation uses `aria-expanded`, tabs and filters use button states, galleries support the keyboard, and animations respect `prefers-reduced-motion`. The form only sends what the visitor actively chooses to pass to WhatsApp.

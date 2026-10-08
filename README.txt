WEB PROGRAMMING ASSIGNMENT: ALTERNATE COLOR THEME

Author: Brij Chovatiya

Topic: Why I Am Learning Web Programming

To view the website:
1. Extract the ZIP file.
2. Keep all files and folders in their current locations.
3. Open index.html in a web browser.
4. Use the links in the header to visit the other three pages.

Included files:
- index.html: Home page with three paragraphs, a bulleted list, and a table
- styling.html: Page about using CSS
- launch.html: Page about testing and publishing a website
- about.html: About page with my photograph, motivation, and LinkedIn profile
- styles.css: Light and dark CSS variables and shared styles for every page
- about-page-style.css: External stylesheet using the shared color variables and two-level Flexbox layout
- theme.js: Commented vanilla JavaScript for switching and remembering the theme
- certificates/css-essential-training-certificate.pdf: LinkedIn Learning course certificate
- images folder: The four images used by the pages, including my personal photograph

All page links and image paths are relative, so the website works offline.

HOW THE THEME WORKS

1. styles.css defines the light theme colors as variables inside :root.
2. :root.dark_mode defines alternate values for the same variables.
3. The style rules use var(--variable-name) instead of fixed color values.
4. Every HTML page loads theme.js with defer and includes a theme button.
5. JavaScript toggles dark_mode on the HTML element when the button is clicked.
6. localStorage saves the choice and restores it when another page loads.
7. A storage event listener synchronizes other tabs on the same website.
8. Both CSS files use the shared variables, so the About page also changes.

This assignment uses ordinary HTML, CSS, and JavaScript. No framework,
JavaScript library, build process, or package installation is required.
All HTML, CSS, and JavaScript files contain explanatory comments.

The approach is based on the example required by the assignment:
https://dev.to/codedgar/how-to-create-a-dark-theme-system-in-5-minutes-or-less-with-vanilla-js-2922
The existing website content and layout are retained.

IMAGE SOURCES

The images were found through web image search and downloaded from Pexels.

- html-coding.jpg
  Photographer: Lukas Blazek
  Source: https://www.pexels.com/photo/person-using-macbook-pro-574077/

- color-palette.jpg
  Photographer: Thirdman
  Source: https://www.pexels.com/photo/close-up-photo-of-color-palette-5582594/

- web-coding.jpg
  Photographer: ThisIsEngineering
  Source: https://www.pexels.com/photo/person-coding-on-laptop-3862142/

- brij-chovatiya.jpeg
  Personal photograph

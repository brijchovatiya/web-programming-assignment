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

TRY THE WEBSITE

Open index.html and click "Switch to dark theme". The button changes to
"Switch to light theme". Check the paragraphs, links, and table, then visit
the other pages. Click again to return to the original light colors.

For consistent saved preferences across pages, use a local HTTP server
or GitHub Pages. Browsers can handle localStorage differently for files
opened directly with a file:// address. If storage is blocked, the theme
button still works on the current page.

Optional local server, if Python 3 is installed:
- Open Terminal in the folder containing index.html.
- Run: python3 -m http.server 8000
- Open: http://localhost:8000
- Press Control+C in Terminal when finished.

PUSH TO YOUR EXISTING GITHUB REPOSITORY ON A MAC

1. Download and unzip this assignment package.
2. Open GitHub Desktop and select your web-programming-assignment repository.
3. Click Fetch origin. If Pull origin appears, click it to get the latest files.
4. Choose Repository > Show in Finder to open your local repository folder.
5. Copy the following files from the extracted web-programming-assignment
   folder into that repository folder. Choose Replace for matching files:
   - index.html
   - styling.html
   - launch.html
   - about.html
   - styles.css
   - about-page-style.css
   - theme.js
   - README.txt
6. The package includes images and certificates. Keep those folders beside
   index.html. If they already exist, retain them and add any missing files
   from the package. Keep the filenames and paths used by the HTML.
7. Copy the files INSIDE the extracted folder, not the outer folder itself.
   index.html must remain in your repository root, not a second nested folder.
8. Open index.html from the repository folder and try the theme button.
9. Return to GitHub Desktop. The edited and new files should appear in Changes.
10. Review the changes. In the Summary field enter:
    Add light and dark themes with CSS variables and vanilla JavaScript
11. Click Commit to main (or the corresponding button for your current branch).
12. Click Push origin. Wait for the push to finish.
13. Choose Repository > View on GitHub.
14. Confirm that theme.js and the updated HTML/CSS files appear on GitHub.
15. Copy the repository URL from your browser and paste it into the assignment
    submission text box. Use the code repository link, not the local file path
    or a ZIP download link. Make sure the instructor can access the repository.

The repository link will look like:
https://github.com/YOUR-USERNAME/web-programming-assignment
Replace YOUR-USERNAME with your actual account name, or just copy the real URL.

ALTERNATIVE: UPLOAD THROUGH THE GITHUB WEBSITE

If you prefer using the browser instead of GitHub Desktop:
1. Open your existing repository on GitHub.
2. Select Add file > Upload files.
3. Drag the eight code/README files listed above into the upload area.
4. Add missing assets to their existing images or certificates folder if needed.
5. Enter the commit message listed above and commit the changes.
6. Check that theme.js is next to index.html and copy the repository URL.

Submit the repository link after the new files have been committed and pushed.

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
  Personal photograph provided by Brij Chovatiya

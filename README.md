

<h1>Warf Designs Website</h1>

Overview:

A Code: You capstone project utilizing 3rd party API's while also highlighting HTML, CSS, and JavaScript abilities using a React Framework.

Project Overview:

This is a redesign of my current WordPress website. Always preferred a custom built site with my own code; just never got around to actually having the time to do so. This website will show display all my services, have forms for customers to sign contract agreements, forms for appointment schedules, email notifications or sms messages to my phone to notify me, and more. It will also feature a app-like menu at the bottom of the screen for mobile devices, and use javascript to use html templates for the headers, footers, and app-menu to be located on every page of the website.



<h1>Project Organization</h1>

| Page | Description |
|------|-------------|
| **Home** | The landing page provides users with some information about Warf Designs, and what I do for a living. It will also list the products on the page. |
| **Contact Us** | Will have a form where customers can contact me by email. It will also have a google captcha for verification that the person is not a robot filling in the form. |
| **Domain Search** | This page will have a custom domain search. Give customers the ability to search for a domain that they want to use. |
| **About Us** | This page will have information about Warf Designs, and how I got started. |
| **Digitizing Services** | This page will have information about my digitizing services and pricing. It will also include a calculator for estimating pricing for customers along with bulk pricing. |
| **Website Design** | This page will showcase our website design services, and websites I've built. It will also detail the pricing and allow customers to pay through stripe for this service. It will require users to sign the contract agreement before proceeding to pay on stripes website. |
| **Website Hosting** | This page will will discuss briefly what I offer in hosting and there will be a link directing customers to another site I use for managing customers' hosting. |
| **WordPress Plugins** | This page will list plugins that I have built. |
| **Videography** | This page will show some work done by Warf Designs, as well as how much it costs for work done by Warf Designs. |
| **Computer Repair and Assistance** | This page will talk about pricing for various computer repair and assistance in person.  |
| **MSP Services** | This page will have information about our MSP services for local small businesses. |
| **Graphic Design Services** | This page will have ads made in the past, logos, as well as other graphic design projects done. |
| **Our Resume** | This page will have my resume. |
| **Our Projects** | This page will show websites we've worked on in the past. |
| **Golden Years Support** | This page will have information about our computers services available for the elderly. |
| **Security Services** | This page will have information about our security services. Antivirus, VPN, 2FA, and Camera Security options we sell. |
| **Accessibility Policy** | This page will discuss the Accessibility Policy. |
| **Privacy Policy** | This page will discuss the Privacy Policy.|


<h1>Capstone Requirements Fulfilled</h1>


| Requirement | Implementation |
|-------------|----------------|
| **Retrieve data from a third-party API** | • Integrated NameSilo API for Domain Search<br>• Implemented captcha API for form.<br>• Implemented The Maps Embed API for the website. |
| **Use a regular expression to validate user input and either prevent the invalid input or inform the user about it (in all cases prevent invalid input from being stored or saved).** | • Created a form that does not allow submission without the correct characters. |
| **Responsive Design** | • Implemented responsive layouts using a mix of Flexbox and Grid.<br>• Created media queries for different screen sizes<br>• Built with mobile-first approach |




<h1>Project Outline: Responsive Website Re-design of warfdesigns.com</h1>

<h2>I. Introduction</h2>
Objective: Develop a responsive website re-design of warfdesigns.com. Provide a seamless shopping experience for customers.
Tools and Technologies: HTML, CSS (Grid, Flexbox, Media Queries), JavaScript, PHP, YouTube, API Configurations

<h2>Goals:</h2>
<p>  Implement responsive design.</p>
<p>  Integrate various web development features.</p>
<p>  Utilize third-party APIs for data retrieval.</p>
<p>  Ensure a visually appealing and user-friendly application.</p>

<h2>II. Responsive Design</h2>
 1. Implementation
    <p>  - Media Queries: Implement media queries to adapt the layout for mobile and desktop screen sizes.</p>
    <p>  - CSS Grid and Flexbox: Use CSS Grid and Flexbox to create flexible and responsive layouts.</p>
    <p>  - Responsive Components: Ensure all components (forms, tables) adjust appropriately across different devices.</p>

<h2>III. Feature Implementation</h2>
 1. Selected Features
 <br></br>
    <p>  - <b>Feature 1:</b> Use a regular expression to validate user input and either prevent the invalid input or inform the user about it (in all cases prevent invalid input from being stored or saved).</p>
    <p>  - <b>Feature 2:</b> Responsive Design</p>
    <p>  - <b>Feature 3:</b> Retrieve data from a third-party API and display it.</p>

<h2>IV Integration of Third-Party API</h2>
<p> 1. Namesilo API: Integrate namesilo API to fetch and display current domains available for purchase.</p>
<p> 2. Captcha API: Added for the form.</p>



<h2>V. Advanced Features</h2>
 <p>  1. Interactive UI Features</p>
    <p>    - Implement features like data sorting, autocomplete for location input, and interactive date-picker for date selection.</p>
    
 <p>  2. Data Persistence</p>
    <p>    - Persist data to an external API and make it accessible within the app, even after a reload/refresh.</p>

<h2>VI. Review Process</h2>

<p>    1. Internal Review</p>
<p>  - Perform thorough testing to ensure the application meets all specified requirements.</p>
<p>  - Validate the responsiveness and functionality of all components.</p>

<p>    2. External Feedback</p>
<p>  - Present the project to peers or mentors for feedback.</p>
<p>  - Incorporate feedback to refine and polish the application.</p>

<h2>VII. Documentation and Final Submission</h2>

<p>    1. Code Annotation and Documentation</p>
<p>- Annotate code with clear comments and explanations.</p>

<p>Write a comprehensive README.md file covering:</p>
<ul>
   <li>Project overview and objectives.</li>
   <li>Setup and installation instructions.</li>
   <li>Usage guidelines and feature descriptions.</li>
   <li>Data sources and API integration details.</li>
</ul>

<p>    2. Final Submission</p>
<p>  - Ensure the project is fully functional and well-documented.</p>
<p>  - Prepare the project for final presentation or submission to evaluators.</p>

This outline provides a structured approach to developing a responsive web application focused on redesigning my website using a react framework. It includes steps for responsive design, feature implementation, data handling, advanced features, project development, review, and documentation to ensure the project meets all requirements and is attractive to potential employers or evaluators.

<h1>Set it Up</h1>
1. Set up: Before installing the application, you'll need to obtain these API keys:

    A. NameSilo API: For NameSilo domain lookups; sign up at https://www.namesilo.com/login for an account.
    Generate a read-only access API key @ https://www.namesilo.com/account/api-manager

    B. The Maps Embed API (Google Cloud): 
      1. Go to the Google Cloud Console: https://console.cloud.google.com/
      2. Create a new project or select an existing one
      3. Enable the The Maps Embed API:
         - In the navigation menu, click "APIs & Services" > "Library"
         - Search for "The Maps Embed API"
         - Click "Enable"
      4. Create credentials:
         - Go to "APIs & Services" > Search for "The Maps Embed API"
         - Click "Keys"
         - You will use this API key when you create a `.env` file

    C. reCAPTCHA (Google Cloud): 
      1. Go to the Google Cloud Console: https://console.cloud.google.com/
      2. Create a new project or select an existing one
      3. Navigate to https://console.cloud.google.com/security/recaptcha.
      3. Enable the reCAPTCHA API:
         - In the navigation menu, click "APIs & Services" > "Library"
         - Search for "reCAPTCHA"
         - Click "Enable"
         - If already enabled or can't locate it continue to https://console.cloud.google.com/security/recaptcha.
      4. Create credentials:
         - Go to https://console.cloud.google.com/security/recaptcha
         - Click "Create Keys"
         - Make the application type choose "Web".
         - Under the domain list type "localhost".
         - Then click on "Create Key".
         - You will use this API key when you create a `.env` file




2. **Clone the repository using GIT**
   ```bash
   git clone https://github.com/WarfDesigns/Warf-Designs-React.git
   ```

<div align="center">
  <img src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png" alt="Netflix Logo" width="80" height="auto" />
  <h1>Netflix Clone (Movie App)</h1>
  <p>
    <strong>A React-based movie streaming application clone featuring Firebase authentication and dynamic content.</strong>
  </p>
  
  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a>
  </p>

  <div>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  </div>
</div>

<br />

<div id="features">
  <h2>✨ Features</h2>
  <ul>
    <li>
      <strong>🔐 Authentication</strong>: Secure Sign Up, Login, and Logout functionality powered by <strong>Firebase Auth</strong>.
    </li>
    <li>
      <strong>🎬 Dynamic Content</strong>: Fetches and displays movie data including "Blockbuster Movies", "Only on Netflix", "Upcoming", and "Top Picks".
    </li>
    <li>
      <strong>⏯️ Video Player</strong>: Interactive player interface for watching content (simulated).
    </li>
    <li>
      <strong>🛡️ Protected Routes</strong>: Prevents unauthorized access to the main application and player pages.
    </li>
    <li>
      <strong>📱 Responsive Design</strong>: Fully responsive UI built with <strong>Tailwind CSS</strong>, looking great on desktop and mobile.
    </li>
    <li>
      <strong>🔔 Toast Notifications</strong>: User feedback for actions like login errors or successful updates.
    </li>
  </ul>
</div>

<div id="tech-stack">
  <h2>🛠️ Tech Stack</h2>
  <table align="center">
    <tr>
      <th align="left">Frontend</th>
      <th align="left">Backend / Services</th>
    </tr>
    <tr>
      <td valign="top">
        <ul>
          <li><strong>React 19</strong></li>
          <li><strong>React Router Dom</strong></li>
          <li><strong>Tailwind CSS 4</strong></li>
        </ul>
      </td>
      <td valign="top">
        <ul>
          <li><strong>Firebase Authentication</strong></li>
          <li><strong>Firebase Firestore</strong></li>
          <li><strong>Vite</strong> (Build Tool)</li>
        </ul>
      </td>
    </tr>
  </table>
</div>

<div id="getting-started">
  <h2>🚀 Getting Started</h2>
  <p>Follow these steps to set up the project locally.</p>

  <h3>Prerequisites</h3>
  <ul>
    <li>Node.js (v14 or higher)</li>
    <li>npm or yarn</li>
  </ul>

  <h3>Installation</h3>
  <ol>
    <li>
        Clone the repository:
        <pre><code>git clone [repository-url]</code></pre>
    </li>
    <li>
        Navigate to the project directory:
        <pre><code>cd movie-app</code></pre>
    </li>
    <li>
        Install dependencies:
        <pre><code>npm install</code></pre>
    </li>
  </ol>

  <h3>Configuration</h3>
  <p>Create a <code>.env</code> file in the root directory and add your Firebase configuration:</p>
  <pre><code>VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id</code></pre>

  <h3>Running the App</h3>
  <p>Start the development server:</p>
  <pre><code>npm run dev</code></pre>
  <p>Open <a href="http://localhost:5173">http://localhost:5173</a> to view it in the browser.</p>
</div>

<hr />

<div align="center">
  <p>Built with ❤️ using React</p>
</div>

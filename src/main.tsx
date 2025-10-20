
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove Famous.ai badge if it exists
const removeBadge = () => {
  const badge = document.getElementById('aiappbuilder-badge');
  if (badge) {
    badge.remove();
  }
};

// Check for badge on load and periodically
removeBadge();
setInterval(removeBadge, 1000);

// Remove dark mode class addition
createRoot(document.getElementById("root")!).render(<App />);


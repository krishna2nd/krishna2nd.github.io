import React from 'react';
import { createRoot } from 'react-dom/client';
import { ProfileView } from 'views/profile';

const initializeApp = () => {
  const domRootNode =
    document.getElementById('krk-app') || window.document.body;
  const krkAppRoot = createRoot(domRootNode);
  krkAppRoot.render(
    <React.StrictMode>
      <ProfileView />
    </React.StrictMode>
  );
};

window.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

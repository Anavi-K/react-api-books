import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

// Use createRoot from "react-dom/client"
const reactRoot = createRoot(root);
reactRoot.render(<App />);

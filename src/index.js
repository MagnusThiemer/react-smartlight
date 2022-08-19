import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
/* import ErrorBoundary from './components/ErrorBoundary';
import * as Sentry from '@sentry/react' */
/* import { BrowserTracing } from "@sentry/tracing"; */

/* Sentry.init({
  dsn: "https://8c79f6aeed4a43d3a21066af7184dbc3@o1143340.ingest.sentry.io/6203656",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
}); */

ReactDOM.render(
  <React.StrictMode>
{/*     <ErrorBoundary> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
{/*     </ErrorBoundary> */}
  </React.StrictMode>,
  document.getElementById('root')
);


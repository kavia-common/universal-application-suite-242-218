import React from "react";

/**
 * PUBLIC_INTERFACE
 * ErrorBoundary component to catch runtime errors.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // In the future, log to a monitoring service
    // console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" style={{ padding: "1rem", border: "1px solid var(--border)", borderRadius: 12 }}>
          <h2>Something went wrong.</h2>
          <pre style={{ whiteSpace: "pre-wrap" }}>{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

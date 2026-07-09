import { Component } from 'react';
import { ErrorState } from './ui/StateMessage';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto max-w-content px-4 py-16">
          <ErrorState
            message="This section couldn't be displayed."
            onRetry={() => this.setState({ hasError: false })}
          />
        </div>
      );
    }
    return this.props.children;
  }
}

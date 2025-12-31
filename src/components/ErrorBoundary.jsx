import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    console.error('ErrorBoundary caught an error:', error)
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary Details:', {
      error: error,
      errorInfo: errorInfo,
      stack: error.stack
    })
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h1>
            <details className="mb-4">
              <summary className="cursor-pointer text-gray-700 font-semibold">Error Details</summary>
              <pre className="mt-2 text-sm text-gray-600 bg-gray-100 p-3 rounded overflow-auto">
                {this.state.error && this.state.error.toString()}
              </pre>
            </details>
            <details>
              <summary className="cursor-pointer text-gray-700 font-semibold">Stack Trace</summary>
              <pre className="mt-2 text-sm text-gray-600 bg-gray-100 p-3 rounded overflow-auto">
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
import React from 'react'

class ErrorBoundary extends React.Component {
    state = { hasError: false }
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    render(){
        if (this.state.hasError) {
            return <h1 className='p-10 text-white'>there was an error loading this page</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundary
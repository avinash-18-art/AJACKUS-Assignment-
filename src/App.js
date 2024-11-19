import React, {Component} from 'react'
import UserList from './components/UserList'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <h1>User Management</h1>
          <UserList />
        </div>
      </ErrorBoundary>
    )
  }
}

export default App

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import './App.css'

const App = () => {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [error, setError] = useState('')

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      )
      setUsers(response.data)
    } catch (err) {
      setError('Failed to fetch users.')
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const addUser = async user => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        user,
      )
      setUsers([...users, response.data])
    } catch (err) {
      setError('Failed to add user.')
    }
  }

  const updateUser = async user => {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        user,
      )
      setUsers(users.map(u => (u.id === user.id ? user : u)))
    } catch (err) {
      setError('Failed to update user.')
    }
  }

  const deleteUser = async id => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      setUsers(users.filter(user => user.id !== id))
    } catch (err) {
      setError('Failed to delete user.')
    }
  }

  return (
    <div className="app-container">
      <h1>User Management</h1>
      {error && <p className="error-message">{error}</p>}
      <UserList users={users} onEdit={setSelectedUser} onDelete={deleteUser} />
      <UserForm
        selectedUser={selectedUser}
        onSave={selectedUser ? updateUser : addUser}
        onCancel={() => setSelectedUser(null)}
      />
    </div>
  )
}

export default App

import React, {Component} from 'react'
import axios from 'axios'
import UserForm from './UserForm'

class UserList extends Component {
  state = {
    users: [],
    selectedUser: null,
    isEditing: false,
  }

  componentDidMount() {
    this.fetchUsers()
  }

  fetchUsers = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      )
      this.setState({users: response.data})
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  handleDelete = async id => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      this.setState({users: this.state.users.filter(user => user.id !== id)})
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  handleEdit = user => {
    this.setState({selectedUser: user, isEditing: true})
  }

  handleFormSubmit = user => {
    if (this.state.isEditing) {
      // Update user
      this.setState({
        users: this.state.users.map(u => (u.id === user.id ? user : u)),
        isEditing: false,
        selectedUser: null,
      })
    } else {
      // Add new user
      this.setState({
        users: [...this.state.users, {...user, id: Date.now()}],
      })
    }
  }

  render() {
    const {users, selectedUser, isEditing} = this.state
    return (
      <div>
        <UserForm
          user={selectedUser}
          isEditing={isEditing}
          onSubmit={this.handleFormSubmit}
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => this.handleEdit(user)}>Edit</button>
                  <button onClick={() => this.handleDelete(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default UserList

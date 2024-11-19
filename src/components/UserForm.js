import React, {useState, useEffect} from 'react'

const UserForm = ({selectedUser, onSave, onCancel}) => {
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    department: '',
  })

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser)
    } else {
      setUser({id: '', name: '', email: '', department: ''})
    }
  }, [selectedUser])

  const handleSubmit = e => {
    e.preventDefault()
    if (!user.name || !user.email) {
      alert('Name and Email are required!')
      return
    }
    onSave(user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedUser ? 'Edit User' : 'Add User'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={e => setUser({...user, name: e.target.value})}
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={e => setUser({...user, email: e.target.value})}
      />
      <input
        type="text"
        placeholder="Department"
        value={user.department}
        onChange={e => setUser({...user, department: e.target.value})}
      />
      <button type="submit">{selectedUser ? 'Update' : 'Add'}</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  )
}

export default UserForm

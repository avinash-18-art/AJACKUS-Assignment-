import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    name: '',
    email: '',
  };

  componentDidUpdate(prevProps) {
    if (this.props.user && this.props.user !== prevProps.user) {
      const { name, email } = this.props.user;
      this.setState({ name, email });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
    const newUser = {
      id: this.props.user?.id || Date.now(),
      name,
      email,
    };
    this.props.onSubmit(newUser);
    this.setState({ name: '', email: '' });
  };

  render() {
    const { name, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <button type="submit">
          {this.props.isEditing ? 'Update User' : 'Add User'}
        </button>
      </form>
    );
  }
}

export default UserForm;

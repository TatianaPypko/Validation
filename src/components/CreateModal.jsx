import React, { Component } from 'react';

class CreateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      errorMessage: ''
    };
}

  validateForm = (values) => {
    let errorMessage = '';
    for (let index = 0; index < values.length; index++) {
      const hasLowerCase = /[a-z]/.test(values[index]);
      const hasUpperCase = /[A-Z]/.test(values[index]);
      const isWithinLengthRange = values[index].length >= 2 && values[index].length <= 7;
      
      if (!hasLowerCase) {
        errorMessage += 'Must contain at least one lowercase letter. ';
        break
      }

      if (!hasUpperCase) {
        errorMessage += 'Must contain at least one uppercase letter. ';
        break
      }

      if (!isWithinLengthRange) {
        errorMessage += 'Length must be between 2 and 7 characters. ';
        break
      }
      
    }
    return errorMessage
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prev => ({...prev,  [name]: value}));
}

  handleSubmit = (event) => {
    event.preventDefault();
    
    const { title, body } = this.state;
    const error = this.validateForm([title, body])

    if (error) {
      this.setState(prev => ({ ...prev, errorMessage: error }))
      return
    }
    
    const { createPost, handleVisibleCreateModal } = this.props
    const id = Date.now()
    
    createPost(id, title, body);
    handleVisibleCreateModal()

  }

  render() {
    const { title, body, errorMessage } = this.state;
    const { handleVisibleCreateModal } = this.props;

    return (
      <article>
        <div className="container">
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input className='inform' type="text" name="title" value={title} onChange={this.handleChange} />
        </label>
        <label>
          Body:
          <textarea className='inform' name="body" value={body} onChange={this.handleChange} />
            </label>
            {errorMessage && <span className='error'>{errorMessage}</span>}
            <button type="submit">Create Post</button>
            <button onClick={handleVisibleCreateModal}>Cancel</button>
          </form>
        </div>
        </article>
    );
  }
}

export default CreateModal;

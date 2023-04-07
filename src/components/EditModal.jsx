import React from "react";
export default class EditModal extends React.Component {
  constructor(props) {
    super(props);

    const { title, body } = props.post;
    this.state = {
      title,
      body,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { handleVisibleEditModal } = this.props;
    const { id } = this.props.post;
    const { title, body } = this.state;
    this.props.editPost(id, title, body);
    handleVisibleEditModal();
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  render() {
    const { handleVisibleEditModal } = this.props;
    const { title, body } = this.state;

    return (
      <article>
        <div className="container">
          <h4>Do you want to edit post?</h4>
          <form onSubmit={this.onSubmit}>
            <input
              name="title"
              value={title}
              onChange={this.onInputChange}
              type="text"
            />
            <input
              name="body"
              value={body}
              onChange={this.onInputChange}
              type="text"
            />
            <button type="submit">ok</button>
            <button onClick={handleVisibleEditModal}>cancel</button>
          </form>
        </div>
      </article>
    );
  }
}

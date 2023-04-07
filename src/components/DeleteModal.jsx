import React from "react";
export default class DeleteModal extends React.Component {
  render() {
    const { handleVisibleDeleteModal, deletePost, id } = this.props;

    return (
      <article>
        <div className="container">
          <h4>Do you want to delete post?</h4>
          <button onClick={() => deletePost(id)}>ok</button>
          <button onClick={handleVisibleDeleteModal}>cancel</button>
        </div>
      </article>
    );
  }
}

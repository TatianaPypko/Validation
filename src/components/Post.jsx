import React from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
export default class Post extends React.Component {
  
constructor(props) {
    super(props);

    this.state = {
      isVisibleDeleteModal: false,
      isVisibleEditModal: false,
    };
  }
  
  handleVisibleDeleteModal= () => {
    this.setState(prev => ({ ...prev, isVisibleDeleteModal: !prev.isVisibleDeleteModal }))
    window.onscroll = false;
    document.body.style.overflow = this.state.isVisibleDeleteModal ? "visible" : "hidden"
    
  }
  
  handleVisibleEditModal = () => {
    this.setState(prev => ({
      ...prev, isVisibleEditModal:
        !prev.isVisibleEditModal
    }))
    document.body.style.overflow = this.state.isVisibleEditModal ? "visible" : "hidden"
  }

  render() {
    const {post, deletePost, editPost } = this.props;
    const { title, body, id } = post;
    const { isVisibleDeleteModal, isVisibleEditModal } = this.state;
    
    return (
      <li>
        <h2>{title}</h2>
        <p>{body}</p>
        <button onClick={this.handleVisibleEditModal}>
          Edit
        </button>
        
        <button onClick={this.handleVisibleDeleteModal}>
            Delete
        </button>
        {isVisibleEditModal &&
          <EditModal
            handleVisibleEditModal={this.handleVisibleEditModal}
            editPost={editPost} post={post}
          />}
        
        {isVisibleDeleteModal &&
          <DeleteModal
            handleVisibleDeleteModal={this.handleVisibleDeleteModal}
            deletePost={deletePost}
            id={id}
          />}
      </li>
    )
  }
}

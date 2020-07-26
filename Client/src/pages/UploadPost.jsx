import React, { useState } from "react";
import { connect } from "react-redux";
import { UPLOAD_POST } from "../redux/actionCreators/userActionCreators";

function UploadPost(props) {
  const {
    history: { push },
    UPLOAD_POST
  } = props;
  const [state, setState] = useState({
    image: "",
    title: "",
    description: "",
    isPublic: ""
  });
  return (
    <div className="UploadPost col-md-6 mx-auto mt-5 ">
      <h1 className="text-center">Upload Post</h1>
      <form
        onSubmit={e => {
          console.log("first");
          e.preventDefault();
          console.log("second");
          console.log(state);
          if (
            state.title === "" ||
            state.description === "" ||
            state.image === "" ||
            state.isPublic === ""
          )
            return;
          console.log("three");
          UPLOAD_POST({ state, push });
          console.log("four");
          
        }}
      >
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            onChange={e => setState({ ...state, image: e.target.value })}
            value={state.image}
            type="file"
            multiple
            className="form-control"
            id="image"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            onChange={e => setState({ ...state, title: e.target.value })}
            value={state.title}
            type="title"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Enter Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            onChange={e => setState({ ...state, description: e.target.value })}
            value={state.description}
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter Description"
          />
        </div>
        <div className="form-group">
          <label>Privacy status : </label>
          <select
            onChange={e => setState({ ...state, isPublic: e.target.value })}
            value={state.isPublic}
            id="exampleInputPassword1"
          >
            <option value="" disabled>
              select privacy
            </option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default connect(
  null,
  { UPLOAD_POST }
)(UploadPost);

import React from "react";
import { connect } from "react-redux";
import { allState } from "../redux/mapStateToProps";
import Card from "../components/common/Card";
import { SET_MY_POSTS } from "../redux/actionCreators/userActionCreators";
import "../styles/MyPosts.css";

function MyPosts(props) {
  const {
    allState: {
      userState: { myPosts }
    }
  } = props;

  
  console.log("myPosts", myPosts);
  console.log("props", props);
  return (
    <div className="MyPosts">
      {myPosts.length ? (
        myPosts.map(post => (
          <div key={post._id} className="card mt-5" style={{ width: "200px" }}>
            <Card post={post} />
          </div>
        ))
      ) : (
        <h1 className="text-center mt-5">No Posts Uploaded </h1>
      )}
    </div>
  );
}

export default connect(
  allState,
  { SET_MY_POSTS }
)(MyPosts);

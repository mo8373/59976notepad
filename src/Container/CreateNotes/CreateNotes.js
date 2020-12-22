import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "../../Components/Appbar/Appbar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import firebaseApp from "../../Config/Firebase/Firebase";
import "./CreateNotes.css";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";

let database = firebaseApp.database().ref("/");

export default class CreateNotes extends React.Component {
  constructor() {
    super();
    this.state = {
      desc: "",
      title: "",
      tagtext: "",
      tags: [],
      userName: "",
    };
  }

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        database.child("Users/" + user.uid + "/").once("value", (res) => {
          let currentuser = res.val();
          localStorage.setItem("user", JSON.stringify(user.uid));
          this.setState({ uid: user.uid, userName: currentuser.user });
        });
      } else {
        // this.props.history.push("/");
      }
    });
  }

  AddNotes = () => {
    let { title, desc, tags, userName } = this.state;
    const uid = this.state.uid;

    if (title === "") {
      alert("Note Title");
    } else if (desc === "") {
      alert("Type something here...");
    } else if (tags.length === 0) {
      alert("Add search tags");
    } else {
      database.child("Notes/").push({
        title,
        desc,
        tags: tags,
        uid: this.state.uid,
        author: userName,
      });
      this.setState({ title: "", desc: "", tags: "" });
      // this.props.hisotry.push("Home");
    }
  };

  handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  handleClick = () => {
    console.info("You clicked the Chip.");
  };

  AddTags = () => {
    let { tagtext, tags } = this.state;
    let arr = tags;
    arr.push(tagtext);
    this.setState({ tags: arr, tagtext: "" });
  };

  render() {
    let { desc, title, tagtext, tags } = this.state;
    console.log("sdfdsf", tags);
    // console.log(questions);
    return (
      <>
        <AppBar showStuden={true} props={this.props.history} popup={true} />

        <Grid
          container
          justify="center"
          className="_grid"
          style={{ marginTop: 30 }}
        >
          <Grid item xs={11} sm={10} md={6} lg={6}>
            Add New Note:
            <br />
            <br />
            <Paper
              className="paper"
              style={{ display: "flex", flexDirection: "column", padding: 10 }}
            >
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Write notes title here"
                value={title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
              <br />
              <textarea
                style={{ height: 300, padding: 5 }}
                placeholder="Write notes desciption here.."
                value={desc}
                onChange={(e) => this.setState({ desc: e.target.value })}
              ></textarea>
              <p>
                {tags.length !== 0
                  ? tags.map((val, i) => {
                      return <Chip label={val} className="_chips" />;
                    })
                  : null}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  justifyContent: "flex-end",
                }}
              >
                <input
                  className="_search"
                  placeholder="add search tags"
                  style={{ display: "flex", flex: 1 }}
                  value={tagtext}
                  onChange={(e) => this.setState({ tagtext: e.target.value })}
                />
                <button style={{ padding: 8 }} onClick={() => this.AddTags()}>
                  Add Tag
                </button>
              </div>
              <p style={{ textAlign: "right" }}>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  style={{ margin: 10, width: 150 }}
                  onClick={() => this.AddNotes()}
                >
                  Publish Note
                </Button>
              </p>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

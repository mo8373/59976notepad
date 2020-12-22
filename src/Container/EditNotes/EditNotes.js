import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "../../Components/Appbar/Appbar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import firebaseApp from "../../Config/Firebase/Firebase";
import "./EditNotes.css";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
let database = firebaseApp.database().ref("/");

export default class EditNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: props.location.state.data.desc,
      title: props.location.state.data.title,
      tags: props.location.state.data.tags,
      tagtext: "",
      noteId: props.location.state.data.noteId,
    };
  }

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user.uid));
        this.setState({ uid: user.uid });
      } else {
        // this.props.history.push("/");
      }
    });
  }

  UpadeNotes = () => {
    let { title, desc, tags, noteId } = this.state;
    const uid = this.state.uid;

    if (title === "") {
      alert("Please enter title");
    } else if (desc === "") {
      alert("Please enter notes description");
    } else if (tags.length === 0) {
      alert("Please add search tags");
    } else {
      database
        .child("Notes/" + noteId + "/")
        .update({ title, desc, tags: tags });
    }
  };

  AddTags = () => {
    let { tagtext, tags } = this.state;
    let arr = tags;
    arr.push(tagtext);
    this.setState({ tags: arr, tagtext: "" });
  };

  render() {
    let { desc, title, tags, tagtext } = this.state;

    let data = this.props.location.state.data;

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
            Edit Note
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
                  onClick={() => this.UpadeNotes()}
                >
                  update note
                </Button>
              </p>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

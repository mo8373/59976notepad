import React from "react";
import Appbar from "./../../Components/Appbar/Appbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./MyNotes.css";
import firebaseApp from "../../Config/Firebase/Firebase";

let database = firebaseApp.database().ref("/");
export default class MyNotes extends React.Component {
  constructor() {
    super();
    this.state = {
      Notes: [],
    };
  }

  componentDidMount() {
    let uid = localStorage.getItem("user");
    uid = JSON.parse(uid);
    let arr = [];
    database.child("Notes/").on("child_added", (res) => {
      let val = res.val();
      val.noteId = res.ref.path.pieces_[1];

      if (val.uid === uid) {
        arr.push(val);
        this.setState({ Notes: arr });
      }
    });
  }

  DeleteNotes = (val) => {
    database.child("Notes/" + val.noteId).remove();
    window.location.reload();
  };
  render() {
  
    let { Notes } = this.state;
    return (
      <div className="_container">
        <Appbar props={this.props.history} popup={true} />

        <br />
        <Grid container justify="center">
          <Grid item xs={11} sm={6}>
            {Notes.length !== 0 ? (
              Notes.map((val, i) => {
                return (
                  <Paper
                    style={{
                      padding: 10,
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Typography>{val.title}</Typography>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <Button
                          size="small"
                          variant="outlined"
                          className="_btns edit"
                          onClick={() =>
                            this.props.history.push("EditNotes", { data: val })
                          }
                        >
                          Edit
                        </Button>

                        <Button
                          size="small"
                          variant="outlined"
                          className="_btns delete"
                          onClick={() => this.DeleteNotes(val)}
                        >
                          Delete
                        </Button>

                        <Button
                          size="small"
                          variant="outlined"
                          className="_btns view"
                          onClick={() =>
                            this.props.history.push("ViewNotes", { data: val })
                          }
                        >
                          View This Note
                        </Button>
                      </div>
                    </div>
                    <div style={{ fontSize: "10px", color: "grey" }}>
                      Created by you
                    </div>
                  </Paper>
                );
              })
            ) : (
              <Typography>There is no any notes published yet!</Typography>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

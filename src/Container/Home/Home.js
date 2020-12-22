import React from "react";
import "./Home.css";
import Appbar from "./../../Components/Appbar/Appbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import firebaseApp from "../../Config/Firebase/Firebase";
let database = firebaseApp.database().ref("/");
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      Notes: [],
      totalTagsArr: [],
      searchKey: "",
    };
  }

  componentDidMount() {
    let arr = [];
    let tagsArr = [];
    database.child("Notes/").on("child_added", (res) => {
      let val = res.val();
      val.noteId = res.ref.path.pieces_[1];
      arr.push(val);
      tagsArr.push(val.tags);
      this.setState({ Notes: arr, totalTagsArr: tagsArr });
    });
  }

  render() {
    // const userData = this.props.location.state.userData;

    let { Notes, totalTagsArr } = this.state;
    const array3 = [];
    for (var i = 0; i < totalTagsArr.length; i++) {
      array3.push(...totalTagsArr[i]);
    }

    let { searchKey } = this.state;
    // const filterArray = Notes.filter((res) => {
    //   return (
    //     res.tags[0].toLowerCase().includes(searchKey.toLowerCase()) &&res.tags && toString(res.tags[0]).toLowerCase().includes(toString(res.tags[0]).toLowerCase())
    //   );
    // });

    const filterArray = Notes.filter((users) => {
      return (
        users.tags[0].toLowerCase().includes(searchKey.toLowerCase()) ||
        (users.tags[1] &&
          users.tags[1].toLowerCase().includes(searchKey.toLowerCase())) ||
        (users.tags[2] &&
          users.tags[2].toLowerCase().includes(searchKey.toLowerCase())) ||
        (users.tags[3] &&
          users.tags[3].toLowerCase().includes(searchKey.toLowerCase())) ||
        (users.tags[4] &&
          users.tags[4].toLowerCase().includes(searchKey.toLowerCase())) ||
        (users.tags[5] &&
          users.tags[5].toLowerCase().includes(searchKey.toLowerCase())) ||
        (users.tags[6] &&
          users.tags[6].toLowerCase().includes(searchKey.toLowerCase())) ||
        (users.tags[7] &&
          users.tags[7].toLowerCase().includes(searchKey.toLowerCase())) ||
        (users.tags[8] &&
          users.tags[8].toLowerCase().includes(searchKey.toLowerCase())) ||
        (users.tags[9] &&
          users.tags[9].toLowerCase().includes(searchKey.toLowerCase())) ||
        (users.tags[10] &&
          users.tags[10].toLowerCase().includes(searchKey.toLowerCase()))
      );
    });

    return (
      <div className="_container">
        <Appbar props={this.props.history} popup={true} />
        <br />
        <br />
        <Grid container container justify="center">
          {/* <Grid xs={2}></Grid> */}
          <Grid item xl={4} xs={11} sm={6}>
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
                onChange={(e) => this.setState({ searchKey: e.target.value })}
              />
              <button style={{ padding: 8 }}>search notes</button>
            </div>
          </Grid>
        </Grid>
        <br />
        <Grid container justify="center">
          <Grid item xs={11} sm={6}>
            {filterArray.length !== 0 ? (
              filterArray.map((val, i) => {
                return (
                  <Paper
                    style={{
                      padding: 10,
                      marginBottom: 10,
                    }}
                    onClick={() =>
                      this.props.history.push("ViewNotes", { data: val })
                    }
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
                      <Button
                        size="small"
                        variant="outlined"
                        className="_viewBtn"
                      >
                        View This Note
                      </Button>
                    </div>
                    <div style={{ fontSize: "10px", color: "grey" }}>
                      By:{val.author}
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

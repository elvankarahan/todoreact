import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import { createNote, getAllNotes } from "../services/ApiService";

export default function Notes(props) {
  const [notes, setNotes] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    getAllNotes().then((response) => {
      setNotes(response.data);
    });
  }, []);

  return (
    <div>
      <Link to="/">
        <button className="btn btn-primary btn-block" type="button">
          Home
        </button>
      </Link>
      <h1 className="text-center"> Note List</h1>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Content</label>
                  <input
                    type="text"
                    className="form-control"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-primary btn-block"
            type="button"
            onClick={() => {
              const newNote = {
                title,
                content,
              };
              createNote(newNote).then((response) => {
                getAllNotes().then((response) => {
                  setNotes([...response.data]);
                });
              });
            }}
          >
            Add Note
          </button>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <td> Note Id</td>
            <td> Title</td>
            <td> Content</td>
            <td> Date</td>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              <td> {note.id}</td>
              <td> {note.title}</td>
              <td> {note.content}</td>
              <td> {note.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

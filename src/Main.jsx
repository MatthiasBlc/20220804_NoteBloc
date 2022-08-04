import ReactMarkdown from "react-markdown";

function Main({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote)
    return <div className="no-active-note">No note Selected</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          value={activeNote.title}
          onChange={(event) => onEditField("title", event.target.value)}
          autoFocus
        />

        <textarea
          id="body"
          placeholder="write your notes here"
          value={activeNote.body}
          onChange={(event) => onEditField("body", event.target.value)}
        />
      </div>

      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Main;

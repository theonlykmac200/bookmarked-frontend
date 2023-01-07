import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
function Show(props) {
  const { id } = useParams()
  const bookmark = props.bookmark.find((bookmark) => bookmark._id === id)
  let navigate = useNavigate()


  // state for form
  const [editForm, setEditForm] = useState(bookmark)

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  // handlesubmit for form
  const handleSubmit = (event) => {
    event.preventDefault()
    props.updatePeople(editForm, bookmark._id)
    // redirect people back to index
    navigate("/")
  }

  const removeBookmark = () => {
    props.deletePeople(bookmark._id);
    // redirect people back to index
    navigate("/")
  };

  return (
    <div className="bookmark">
      <h1>{bookmark.name}</h1>
      <h2>{bookmark.title}</h2>
      <img src={bookmark.image} alt={bookmark.name} />
      <button id="delete" onClick={removeBookmark}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
       
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Update Bookmark" />
      </form>
    </div>
  )
}

export default Show
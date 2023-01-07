import React from "react"
import { useState} from "react"
import { Link} from "react-router-dom"

function Index(props) {
    const [newForm, setNewForm] = useState({
        title: "",
        link: ""

    })

 // handleChange function for form
 const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault()
    props.createBookmark(newForm)
    setNewForm({
      title: "",
      link: ""
    })
  }



   const loaded = () => {
    return props.bookmark.map((bookmark) => (
        <div key={bookmark.title} className="bookmark">
        <Link to={`/bookMarks/${bookmark.title}`}>
        <h1>{bookmark.link}</h1>
        </Link>

          <h3>{bookmark.title}</h3>
        </div>
      ))
    }
    const loading = () => {
        return <h1> Loading Bookmarks...</h1>
    }
    return (
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newForm.title}
              name="title"
              placeholder="title"
              onChange={handleChange}
            />
           
            <input
              type="text"
              value={newForm.link}
              name="link"
              placeholder="link"
              onChange={handleChange}
            />
            <input type="submit" value="Create bookmark" />
          </form>
          {props.bookmark ? loaded() : loading()}
        </section>
      )
    }
  
  export default Index
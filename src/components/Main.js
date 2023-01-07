
import React from "react"
import { useEffect, useState } from "react"
import { Routes, Route} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props) {
    const [bookmark, setBookmark] = useState([])
  
    const URL ="https://bookmarked-ga.herokuapp.com/bookMarks"
  
    const getBookmark = async() => {
        console.log(bookmark);
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data);
      setBookmark(data)
    }
  
    const createBookmark = async (bookmark) => {
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(bookmark),
      })
      getBookmark()
    }
  
    const updateBookmark = async (bookmark, id) => {
     
      await fetch(URL + id, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(bookmark),
      })
      
      getBookmark()
    }
  
    const deleteBookmark = async(id) => {
      await fetch(URL + id, {
        method: "DELETE",
      })
      getBookmark()
    }
  
    useEffect(() => {
      getBookmark()
    }, [])
      return (
        <main>
        <Routes>
          <Route exact path="/" element={
            <Index 
             
              createBookmark={createBookmark} 
            />} />
          <Route
            path="/bookMarks/:id"
            element={
              <Show
  
             
                updateBookmark={updateBookmark}
                deleteBookmark={deleteBookmark}
  
              />
            }
          />
        </Routes>
      </main>
      )
    }
    
    export default Main
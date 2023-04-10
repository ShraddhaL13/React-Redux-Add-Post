import { useState  } from "react";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers  } from "../../users/userSlice";
// import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

export const AddPstForm = () => {
    const dispatch = useDispatch('')
    const [title,setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId , setUserId] = useState('')

    const users= useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)


    const onSavePostClicked = () => {
        if(title &&  content) {
            dispatch(
                postAdded(title,content,userId)
            )
            setTitle('')
            setContent('')
            // console.log("data:"+ data);
        }
    }
     
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOption = users.map(user =>(
        <option key={user.id} value= {user.id}>
            {user.name}
        </option>
    ))

  return (
    <>
     <section>
        <h2>Add a New Posts</h2>
        <form>
            <label htmlFor="postTitle" >Post Title:</label>
            <input type='text' id='postTitle' name="postTitle" value={title} onChange={onTitleChanged}></input>

            <label htmlFor="postAuthor">Author:</label>
            <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                <option value= ""></option>
                {usersOption}
            </select>

            <label htmlFor="postcontent">Content :</label>
            <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged}/>

            <button type="button" onClick={onSavePostClicked }
            disabled={!canSave} >Save Post</button>
        
        </form>
     </section>   
    </>
    )
}

import React, {useState} from 'react'
import NewPostInput from './NewPostInput'
import NewPostTextArea from './NewPostTextArea'

const NewPost = (props) => {

    const [ myValue, setMyValue ] = useState({
        author: '',
        content: '',
        date: '',
        title: '',
    })

    

    const onChange = (e) => {
        
        const data = {...myValue}
        data[e.target.name.toLowerCase()] = e.target.value

        setMyValue(data)

    }

    // obsubmit should be a fetch to the back end as a POST req and we shoulld handle it correctly there
    const onSubmit = (e) => {
        e.preventDefault()
        

        const newPosts = [...props.posts]
        newPosts.push(myValue)
        props.updateList(newPosts)
        setMyValue({
            author: '',
            content: '',
            date: '',
            title: '',
        })
        fetch(`/api/blog`, {
            method: 'POST',
            body: JSON.stringify(myValue),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json()).then(data => console.log(data))
        // console.log(myValue)
    }
    return(
        
            <form onSubmit = {(e) => onSubmit(e)}>
                <NewPostInput 
                value = {myValue.author}
                name = {'Author'}
                onChange = {onChange}
                />
                <NewPostInput 
                value = {myValue.title}
                name = {'Title'}
                onChange = {onChange}
                />
                <NewPostInput 
                value = {myValue.date}
                name = {'Date'}
                onChange = {onChange}
                />
                <NewPostTextArea 
                value = {myValue.content}
                name = {'Content'}
                onChange = {onChange}
                />
            <input type="submit" value="submit" className = "btn btn-primary"/>
            </form>
        
    )
}

export default NewPost
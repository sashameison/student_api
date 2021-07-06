import axios from "axios";
import Post from "../Post/Post";
import {useEffect, useState} from "react";


const SingleStudent = () => {

    const [studentPost, setStudentPost] = useState([])

    const URL = 'http://localhost:8080/api/student/1'
    const fetchStudent = () => {
        axios.get(URL).then(res => {
            console.log(res)
            setStudentPost(res.data)
        });
    }

    useEffect(() => {
        fetchStudent()
    }, [])

    return (
        <div key={studentPost.id}>
            <Post id={studentPost.id} name={studentPost.name} age={studentPost.age}
                  like={10}/>
        </div>
    )

}
export default SingleStudent
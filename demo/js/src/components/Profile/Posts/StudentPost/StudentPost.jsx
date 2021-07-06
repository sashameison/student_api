import axios from "axios";
import Post from "../Post/Post";
import {useEffect, useState} from "react";

const StudentPost = () => {

    const [studentPost, setStudentPost] = useState([])

    const URL = 'http://localhost:8080/api/student'
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
        studentPost.map((student, index) => {
            return (
                <div key={index}>
                    <Post id={student.id} name={student.name} age={student.age}
                          like={10}/>
                </div>
            )
        })
    )
}
export default StudentPost
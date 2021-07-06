import React, {useState} from 'react';
import axios from "axios";
import StudentList, {
    getStudents,
    getStudentsFetch, getStudentsXhr
} from "../../../rest components/StudentList";
import Student from "../../../rest components/Student";
import StudentPost from "../../Profile/Posts/StudentPost/StudentPost";
import {rerenderEntireTree} from "../../../index";


// class PostStudent extends React.Component {
//     constructor(props) {
//         super(props);
//         const [data, setData] = useState(
//             {
//                 name: "",
//                 age: "",
//                 course: ""
//             }
//         )
//         const handle = (e) => {
//             const newData = {...data}
//             newData[e.target.id] = e.target.value
//             setData(newData)
//             console.log(newData)
//         }
//
//         const submit = (e) => {
//             // e.preventDefault
//             axios.post(url, {
//                 name: data.name,
//                 age: parseInt(data.age),
//                 course: parseInt(data.course)
//             }).then(r => console.log(r.data))
//         }
//     }
//
//
//
//     componentDidMount() {
//         // Simple POST request with a JSON body using fetch
//         const requestOptions = {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({title: 'React POST Request Example'})
//         };
//         fetch('http://localhost:8080/api/student', requestOptions)
//             .then(response => response.json())
//             .then(data => this.setState({
//                 studentId: data.id,
//                 studentName: data.name,
//                 studentCourse: data.course,
//                 studentAge: data.age
//             }));
//     }
//
//
//
//
//     render() {
//         return (
//             <div>
//                 <form onSubmit={e => submit(e)}>
//                     <div>
//                         <input onChange={e => handle(e)} id={"name"}
//                                value={data.name}
//                                placeholder={"name"} type="text"/>
//                     </div>
//                     <div>
//                         <input onChange={e => handle(e)} id={"age"}
//                                value={data.age}
//                                placeholder={"age"} type="text"/>
//                     </div>
//                     <div>
//                         <input onChange={e => handle(e)} id={"course"}
//                                value={data.course}
//                                placeholder={"course"} type="text"/>
//                     </div>
//                     <div>
//                         <button type={"submit"}>Add</button>
//                     </div>
//
//                 </form>
//             </div>
//         );
//     }
// }


const PostStudent = () => {
    const url = 'http://localhost:8080/api/student';
    const [data, setData] = useState(
        {
            name: "",
            age: "",
            course: ""
        }
    )
    const handle = (e) => {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
    const submit = (e) => {
        e.preventDefault()
        axios.post(url, {
            name: data.name,
            age: parseInt(data.age),
            course: parseInt(data.course)
        }).then((res) => console.log(res)).then(
           getStudentsFetch
        )
    }

    return (
        <div>
            <form onSubmit={e => submit(e)}>
                <div>
                    <input onChange={e => handle(e)} id={"name"}
                           value={data.name}
                           placeholder={"name"} type="text"
                           pattern="[a-zA-z]{2,10}"/>
                </div>
                <div>
                    <input onChange={e => handle(e)} id={"age"} value={data.age}
                           placeholder={"age"} type="number" min={1} required/>
                </div>
                <div>
                    <input onChange={e => handle(e)} id={"course"}
                           value={data.course}
                           placeholder={"course"} type="number" min={1} /*max={6}*/ required/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}


export default PostStudent;


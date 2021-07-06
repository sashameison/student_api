import React, {Component} from "react";
import Student from "./Student";
import StudentPost from "../components/Profile/Posts/StudentPost/StudentPost";


export let getStudentsXhr = () => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', "http://localhost:8080/api/student")
    xhr.send();
}

export let getStudentsFetch = () => {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };
    fetch("http://localhost:8080/api/student", requestOptions)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
}

class StudentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            s: []
        }
    }

    componentDidMount() {
        Student.getStudents().then((res) => {
            this.setState({s: res.data});
        });
    }


    render() {
        return (
            <div align={'center'}>
                <h2>Student list</h2>
                <table className={'row'}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.s.map(
                            s =>
                                <tr key={s.id}>
                                    <td>{s.id}</td>
                                    <td>{s.name} </td>
                                    <td>{s.age} </td>
                                    <td>{s.course}</td>

                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentList


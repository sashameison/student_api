
import axios from "axios";

const STUDENT_LIST = "http://localhost:8080/api/student"
class Student {
     static getStudents() {
        return (
            axios.get(STUDENT_LIST)
        )
    }

}

export default Student
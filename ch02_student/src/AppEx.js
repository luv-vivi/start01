import React,{ useState } from "react";
import './App.css';

const StudentApp=()=>{
    const [mode, setMode]  = useState('HOME');
    const [students, setStudents] = useState([
        { id: 1, name: 'Alice', username: 'alice123', age: 21, height: 160, joinDate: '2020-01-01' },
        { id: 2, name: 'Bob', username: 'bob123', age: 22, height: 170, joinDate: '2019-03-15' },
        { id: 3, name: 'Charlie', username: 'charlie123', age: 23, height: 180, joinDate: '2018-05-10' },
        { id: 4, name: 'Dave', username: 'dave123', age: 24, height: 175, joinDate: '2017-07-20' },
    ]);

    const [selectedId, setSelectedId] = useState(null);
const [nextId,setNextId] = useState(5);
const selectedStudent = stuednts.find(s => s.id ===selectedId);

const handleCreate = (students)=>{
    let newStudents=[...students,{...students, id:nextId}];

    setStudents(newStudents);
    setNextId(nextId+1);

    setMode('SELECT');
    console.log(newStudents);
};

const handleDelete = () => {
    if(selectedId){
        setStudents(students.filter(s => s.id !== selectedId));
        setSelectedId(null);
        setMode('SETECT');
    }
};
return (
    <div className="app-container">
        <header>
            <h1>Student Info System</h1>
        </header>
    </div>
)





}

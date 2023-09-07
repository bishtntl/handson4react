import { useState } from "react";
import { Link } from "react-router-dom";

function StudentCompo(){
const [data]=useState([
{name:'John',age:26,course:'Mern',batch:'October',change:'Edit'},
{name:' Doe',age:25,course:'Mern',batch:'November',change:'Edit'},
{name:'Biden',age:23,course:'Mern',batch:'September',change:'Edit'},
{name:'Barar',age:22,course:'Mern',batch:'November',change:'Edit'},
{name:'Christ',age:20,course:'Mern',batch:'October',change:'Edit'},
{name:'Elent',age:24,course:'Mern',batch:'September',change:'Edit'}

])

    return(
        <>
        <button className="btn">Add new Student</button>
        <h1>Student Defaults</h1>
        
        <table>
            <thead>
                <tr>
               <th>Name</th>
               <th>Age</th>
               <th>Course</th>
               <th>Batch</th>
               <th>Change</th>
               </tr>
            </thead>
            {data.map((item,index)=>{
                return(
           
            <tbody> 
                <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.course}</td>
                    <td>{item.batch}</td>
                  <Link><td className="one">{item.change}</td></Link>
                </tr>
                
            </tbody>
                )
              })}
        </table>
        
        
        
        </>
    )

}
export default StudentCompo;
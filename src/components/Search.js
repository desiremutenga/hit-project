import { useState } from "react";
import useFetch from '../hooks/useFetch';
import QualificationsTable from './QualificationsTable'

const SearchBar = () => {

const [search, setSearch] = useState("")
const { data } = useFetch('http://localhost:8080/eis/getAllTeachers');

let filteredTeacher =[null]
    if(data != null){
        filteredTeacher = data.filter((teacher)=>(
            teacher._id === search
        ))
    }
    return ( 
        <>
            <div style={{display:'flex',justifyContent:"flex-end"}}>
            <h5 style={{fontWeight:"lighter"}}>Search Qualifications</h5>
             <input
                type="text"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Ec_number"
              />
           </div>
        {filteredTeacher.length > 0 && (<QualificationsTable teacherId ={filteredTeacher}/>)}
        </>

     );
}
 
export default SearchBar;
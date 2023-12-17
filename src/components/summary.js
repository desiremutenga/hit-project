import { useEffect, useState } from "react";

const SummaryTotals = ({total}) => {
 const [data, setData] = useState();
 useEffect(()=>{
    setData(total)
 },[total])

 
    return ( 
        <div style={{display:'flex'}} className="totals">
            <div style={{padding:'5px'}}>
                <h5>Tertiary</h5>
                <div className="tertiary-box"><h6 style={{marginLeft:'8px'}}>250</h6></div>
            </div>
            <div style={{padding:'5px'}}>
                <h5>Secondary</h5>
                <div className="secondary-box"><h6 style={{marginLeft:'8px'}}>15</h6></div>
            </div>
            <div style={{padding:'5px'}}>
                <h5>Primary</h5>
                <div className="primary-box"><h6 style={{marginLeft:'8px'}}>15</h6></div>
            </div>
        </div>
     );
}
 
export default SummaryTotals;
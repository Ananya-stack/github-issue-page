import React,{useState, useEffect} from 'react'
import '../designcss/design.css'
import { Card, Button, FormControl } from 'react-bootstrap'
import CodeIcon from '@mui/icons-material/Code';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import AddCommentIcon from '@mui/icons-material/AddComment';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SurroundSoundRoundedIcon from '@mui/icons-material/SurroundSoundRounded';

const getData = () =>{
  const data = localStorage.getItem('issue')
  if(data) {
    return JSON.parse(data)
  } else {
    return []
  }
}

 const Homes =() => {

  // for hover click
  const [style, setStyle] = useState({display: 'none'});

  // search
  const [search, setSearch] = useState("")
    // for input type
    const [title, setTitle] =useState("")
    const [issues, setIssues] = useState("")
    const [name, setName] = useState(
      getData()
      );


     const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = { title, issues };
        if (title&&issues) {
          setName((c)=> [...c,data])
          setTitle("")
          setIssues("")
        }
     };
    
     useEffect( () => {
       localStorage.setItem('issue', JSON.stringify(name))
     })
  
  return (
    <div>
    <div className='home-div'>

          <div className='code-icon-part'>
           
             <a href='/' className='codes'><ErrorOutlineIcon className='code'/></a>
             <a href='/' className='codes'><CodeIcon className='code'/></a> 
             <a href='/' className='codes'><SlowMotionVideoIcon className='code' /></a>
             <a href='/' className='codes'><PrivacyTipIcon className='code' /></a>
             <a href='/comment' className='codes'><AddCommentIcon className='code' /></a>  
          </div>
            <hr/>

             <div className='row'>
               {/* column1 */}
               <div className='col-lg-7'>
            <Card className='issue-card'>
           <p className='issue-card-content'><SurroundSoundRoundedIcon/> Issues</p>
           </Card>
               </div>
               {/* column2 */}
               <div className='col-lg-3'>
                <Card className='issue-card-2'>

                <FormControl type="search" className="issue-search"
                         onChange={(e) =>{setSearch(e.target.value)}} placeholder="Search.." />
                </Card>
            
              </div> 
            {/* col3 */}
           <div className='col-lg-2'>
           <div className='issue-btn'>
           <a href="/issue"><Button className='issue-card-btn' variant="success">New Issue</Button></a>
           </div>
           </div>
               
           </div>
             <br/>
         <div className='home-part'>
          {
          name.filter((i) =>{
            if(search === "" ) {
                return i
            } else if(i.title.includes(search)) {
                return i
            }
        }).map((i, index) => { 
             return ( 
         <div key={i}>
           <Card className='issue-card-heading'>
           <a href="/issue-detail" className='title-para'>
             <AttachFileIcon className='title-para-icon'/>
             <p className='issue-card-para'>{i.title}</p>
           </a>
          
            </Card>
         </div>
         );
        })
          }
        
         </div>
         <hr/>
         <br/>
    </div>
    <div className='copyrighnt-home'>
           <p>© 2022 GitHub, Inc</p>
         </div>
    </div>
    
  )
}
export default Homes;
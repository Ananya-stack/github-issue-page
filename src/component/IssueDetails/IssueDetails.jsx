import React,{useState, useEffect} from 'react'
import '../designcss/design.css'
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
import AddCommentIcon from '@mui/icons-material/AddComment';

const getData = () =>{
  const data = localStorage.getItem('issue')
  if(data) {
    return JSON.parse(data)
  } else {
    return []
  }
}

 const IssueDetails =() => {

  const [disabled, setDisabled] = useState(false);
    function handleGameClick() {
        setDisabled(!disabled);
      }

   const history = useHistory()

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
       <div>
       <p>Display details here</p>
        </div>
         <div className='btn'>
         <Card style={{ width: '70rem' }} className='details-card-style'>
           <Card.Body>     
                 {

          name.map((i, index) => { 
             return ( 
         <div key={i}>
           <Card className='card-border'>
           <Card.Title className='issue-title-para'>{i.title}</Card.Title>
           <hr/>
           <Card.Text className='issue-title-text'>{i.issues}
           <AddCommentIcon className='card-icon' onClick={() => history.push('/comment')} />

           <button type='submit' onClick={handleGameClick}>Solved</button>
           {/* issue solved part */}
           {/* <Button  onClick = {handleGameClik}> Start Game  </Button> */}

           </Card.Text>         
            </Card>
            <br/>
         </div>
   
  );
        })
          }
        </Card.Body>
        </Card>
          <br/>
          {/* <hr/> */}

          {/* {
          name.map((i, index) => { 
             return ( 
         <div key={i}>
           <Card>
            <p className='title-para'>{i.title}</p>
            
            {i.issues}            
            </Card>
            <br/>
           
         </div>
         );
        })
          } */}
        
         </div>
    </div>
  )
}
export default IssueDetails;
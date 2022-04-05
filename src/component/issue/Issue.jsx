import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import '../designcss/design.css'
import { Card } from 'react-bootstrap'
import { useUserAuth } from '../../firebaseAuth/UserAuth'

const getData = () =>{
  const data = localStorage.getItem('issue')
  if(data) {
    return JSON.parse(data)
  } else {
    return []
  }
}

 const Issues =() => {

  const history = useHistory()
  // for protected part
  const user =useUserAuth()
  console.log(user);

    const [title, setTitle] =useState("")
    const [issues, setIssues] = useState("")
    const [name, setName] = useState(getData());
      
    
     const handleSubmit = (e) => {
        e.preventDefault();
        // history.push('/')

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
           <p>Submit Your Issues</p>
        </div>

         <div className='btn'>
         <Card style={{ width: '70rem' }} className='details-card-style'>
           <Card.Body>     
            
                 <Card.Title> Issues </Card.Title>
                 <hr/>
                
                 <div className='card-details'>
               <Card.Text>      


                      <form onSubmit={handleSubmit} className='form-details'>
                        <div>
                          <div class="form-group">
                            <label for="exampleInputEmaill1" className='issue-title'>Issue Title : </label>
                            <input type='text' name='title' class="form-control" 
                                   value={title}    
                                   onChange={(e) => setTitle(e.target.value)}>
                            </input>
                          </div>

                             <br/>  
                             <div class="form-group">
                              <label className='issue-title'>Issue Detail : </label>
                              <input type='text' name='issues' class="form-control"
                                     value={issues}   
                                     onChange={(e) => setIssues(e.target.value)}>
                              </input>
                              </div>

                        </div> 
                             <br/>
                          <button type="submit" 
                          //  onClick={ ()=> {history.push(`/`)}}
                                  class="btn btn-primary">submit</button>
                      </form>

             </Card.Text>
             </div>
            
        </Card.Body>
        </Card>
          <br/>
        
         </div>
    </div>
  )
}
export default Issues;
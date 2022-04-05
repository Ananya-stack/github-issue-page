import React,{useState, useEffect} from 'react'
import '../designcss/design.css'
import { Card, ListGroup } from 'react-bootstrap'

const getData = () =>{
  const data = localStorage.getItem('comments')
  if(data) {
    return JSON.parse(data)
  }
   else {
    return []
  }
}

 const Comment =() => {
      
    const [comment, setComment] = useState("")
    const [name, setName] = useState(getData());

     const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = { comment };
        if (comment) { 
          setName((c)=> [...c,data])
          setComment("")
        }
        };
    
    // // save data at localstorage
     useEffect( () => { 

       localStorage.setItem('comments', JSON.stringify(name))
     })
  
  return (
    <div>
       <div>
           <p>Display details here</p>
        </div>
         <div className='btn'>
               <br/>
               
          {name?.map((i, index) => { 

             return ( 
                <div key={index}>
                    <br/>  

                  <Card border="primary" className='card-content' style={{ width: '67rem' }}>
                    <Card.Body>  
                     <Card.Title className='comment-content'>{i.comment}</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
             );
           })}
                      <br/>

                      <hr/>
                    
                      <form  onSubmit={handleSubmit}>
                       
                        <div class="mb-3">
                           <input type='text' name='comment' class="form-control"
                                  placeholder='leave a comments'
                                 value={comment}   
                                onChange={(e) => setComment(e.target.value)}
                                 ></input>
                                 </div>
                        <br/>
                        
                         <button type="submit" 
                                   class="btn btn-primary">Comment</button>
                      </form> 
                   
        
         </div>
    </div>
  )
}
export default Comment;
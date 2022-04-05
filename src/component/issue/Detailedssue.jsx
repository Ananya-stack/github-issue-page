import React from 'react';

const Detailedssue = () => {

    const [title, setTitle] = useState();
    const [details, setDetails] = useState();

    return (
        <div>
            <form>
               <div class="form-group">
                  <label for=''></label>
                  <input name='title' value={title}
                  onChange={ (e) => setTitle(e.target.value)}
                  placeholder='enter title of issue' />
               </div>
               
               <div>
                  <label for=''></label>
                  <input name='details' value={details}
                         onChange={ (e) => setDetails(e.target.value)}
                         placeholder='enter issue details' />
               </div>
            </form>
        </div>
    );
}

export default Detailedssue;



import React, {useState} from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import foto1 from '../images/foto1.jpeg';

function NewAvatar() {
  return (
    <div className='profile-img text-center p-4'>
      
    </div>
  )
}

export default NewAvatar



// const [dialog, setDialog] = useState(false);

{/* <div className="div">
<img 
style={{
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
}}
src= {foto1}
alt= ""
/>
<button onClick={() => setDialog(true)}>Dialog</button>

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
        ...
    </div>
    <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
    </div>
    </div>
</div>
</div>

<Dialog
    visible={dialog}
    header = {() => (
        <p htmlFor = "" className='text-2x1 font-semibold textColor'>
            Update Profile Image
        </p>
    )}
    onHide={() => setDialog(false)}
>
    <div className='confirmation-content flex flex-column align-items-center'>
        <div className="flex flex-column align-items-center mt-5 w-12">
            <div className="flex justify-content-around w-12 mt-4">
                <Button label='Save' icon='pi pi-check'></Button>
            </div>
        </div>
    </div>
</Dialog>
</div> */}
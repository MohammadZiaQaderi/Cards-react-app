import Input from "./Input"


const fields = [
    { id: 'firstname', type: 'text', placeholder: 'Enter firstname',label:"Firstname", },
    { id: 'lastname', type: 'text', placeholder: 'Enter lastname',label:"Lastname", },
    { id: 'email', type: 'email', placeholder: 'Enter email',label:"Email", },
    { id: 'phone', type: 'tel', placeholder: 'Enter phone' ,label:"Phone",},
    { id: 'password', type: 'password', placeholder: 'Enter password',label:"Password", },
    { id: 'retypePassword', type: 'retypePassword', placeholder: 'Retype Password',label:"Retype Password", },
];
function Registration() {
    return (
        <div className="row justify-content-center mt-5">
        <div className="card w-50 text-bg-info">
         <div className="card-body">
          <h5 className="card-title">Registration Form</h5>
            <form>
           
            <div className="row">
             {fields.slice(0,2).map((field)=> (
                 <div className="col-md-6 mb-3" key={field.id}>
                <Input 
                For={field.id}
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                label={field.label} 
                />
                </div>
             ))}  
             {fields.slice(2).map(field=> (
                <Input
                key={field.id}
                For={field.id}
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                label={field.label} 
                />
             ))}        
            </div>      
    
            <button type="submit" className="btn btn-primary">Save</button>
            </form> 
         </div>
        </div>
       </div>
    )
}
export default Registration;
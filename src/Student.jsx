  import profilePic from './assets/heartue.jpg'

function Student(){
    return(
       <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Fretch</h2>
            <p className="card-text">fretchhiramis@gmail.com</p>
       </div> 
    );
}
export default Student  

 /* function Student({ student }) {
    return (
        <div className="card">
            <img className="card-image" src={student.image} alt="profile picture"></img>
            <h2 className="card-title">{student.name}</h2>
            <p className="card-text">{student.email}</p>
        </div>
    );
}

export default Student
 

 */
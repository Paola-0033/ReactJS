function App(){
 
  return(
  <div>
    <h1>5A EVND</h1>
    <h3>Alumna: </h3>
    <h3>Paola Rodriguez Hernandez</h3>
    <h4>UTXJ</h4>
  
    <UserComponent/>
    <ProfileComponent/>
    <FeedComponent/>
    </div>
  )
   
}


function UserComponent(){
  const nombre="Paola Michelle ";
  const apellido="Rodriguez hernandez";
  const nombreCompleto= <h2>El nombre es : {nombre} y sus apellidos son {apellido} </h2>;
  return <h2>User Component {nombreCompleto} </h2>;

}


function ProfileComponent(){
    const users=[
    {id:1, name:'Paola', role :'Web Developer'},
    {id:2, name:'Roberto', role :'Web Designer'},
    {id:3, name:'Andrea', role :'Project Manager'},
    
  ]
   return(
    <>
        <p> Lista de usuarios del sistema:</p>
        <ul>{
          users.map( function(user,index){
                return(
                  <li key ={index}>{user.name} es un {user.role}</li>
          
                )
          })
           } 
          
        </ul>
        </>
      )
    }
  


 function FeedComponent(){
  const materiales=[
    {id:1, title:'Martillo ', type :'es una herramienta de construccion'},
    {id:2, title:'pala', type :'es una herrramienta de construccion'},
    {id:3, title:'ladrillos', type :'material de construccion'},
    {id:4, title:'cemento', type :'material de construccion'},
  
  ]
  return(
    <>
        <p> Lista de Materiales de construccion:</p>
        <ul>{
          materiales.map( function(material,index){
                return(
                  <li key ={index}>{material.title} es un  {material.type}</li>
          
                )
          })
           } 
          
        </ul>
        </>
      )
  
 }
export default App

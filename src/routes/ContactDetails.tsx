import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
    const { id }  = useParams();

    //Redirecionamento- Redirect
    
    const navigate = useNavigate();

    const handleContact = () => {
        console.log("Contato enviado!");
        return navigate("/");
    }
  return (
    <div>
        <h1>Exibindo informações do contato: {id}</h1>
        <button onClick={handleContact}>Enviar mensagem</button>
    </div>
  )
}

export default ContactDetails
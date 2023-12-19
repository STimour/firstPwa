import { useNavigate, useParams } from "react-router-dom"

const End = () => {
    const navigate = useNavigate()
    const {time}= useParams()

    return(
    <>
        <p>You win</p>
        <p>Votre temps: {time} sec</p>
        <button onClick={() => navigate("/Game")}>
          Rejouer 
        </button>
    </>
    
        )
}

export default End
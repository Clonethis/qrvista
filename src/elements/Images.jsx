import Image from "./Image"
export default function Images(props) {return(
    <div className="container-images">

        <div className="page-image">
            <img src={props.name} alt="Obrazek" />
        </div>
 

    </div>
)}
import Image from "./Image"
// to props h -> give hidden, it will hide when modile phone large size
export default function Images(props) {return(
    <div className={`container-images ${props.h}`}>

        <div className="page-images">
            <img src={props.name} alt="Obrazek" />
            <img src={props.name2} alt="Obrazek" />
        </div>
 

    </div>
)}
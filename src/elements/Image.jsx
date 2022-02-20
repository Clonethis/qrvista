export default function Image(props) {
    return(
        <div className="page-image">
            <img src={props.name} alt="Obrazek" />
        </div>
    )
}
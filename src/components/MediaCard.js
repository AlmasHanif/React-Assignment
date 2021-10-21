import '../App.css';

const MedaiCard = ({ title, body, image }) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{body}</p>
            <figure>
                <img src={image} alt="logo" />
            </figure>
        </>
    )
}






export default MedaiCard;
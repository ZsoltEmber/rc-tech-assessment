import './style.css';
import HeroComponent from "./component/heroComponent";
import {useFetch} from "./useFetch";

const HeroList = () => {
    const {heroes, loading, toggleAvailability} = useFetch();

    if (loading) {
        return <p className="message">Loading...</p>;
    }

    return (
        <ul className="hero-container">
            {heroes.map((hero) => (
                <HeroComponent
                    key={hero.id}
                    id={hero.id}
                    name={hero.name}
                    available={hero.available}
                    handleClick={toggleAvailability}
                />
            ))}
        </ul>
    );
};

export default HeroList;

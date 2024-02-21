import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cargandoImagen from '../../../assets/tenor.jpg';

const Cards = ({ id, name, image, types }) => {
    const coloresPorTipo = {
        normal: "bg-gray-300",
        fire: "bg-red-300",
        water: "bg-blue-300",
        electric: "bg-yellow-300",
        grass: "bg-green-300",
        ice: "bg-blue-200",
        fighting: "bg-red-600",
        poison: "bg-purple-400",
        ground: "bg-yellow-600",
        flying: "bg-indigo-200",
        psychic: "bg-pink-300",
        bug: "bg-green-500",
        rock: "bg-gray-500",
        ghost: "bg-indigo-800",
        dragon: "bg-blue-800",
        dark: "bg-gray-700",
        steel: "bg-gray-400",
        fairy: "bg-pink-200",
        shadow:"bg-gray-600",
        unknown: "bg-indigo-600"
    };

    const tiposInvertidos = [...types].reverse();
    const loading = useSelector((state) => state.pokemon.loading);

    const handleImageLoad = () => {
    };

    return (
        <div className="flex flex-wrap justify-center">
            <div className="w-1/1 p-4 flex justify-center">
                <div className={`shadow-md border-4 border-white-400 border-opacity-50 rounded-lg overflow-hidden ${coloresPorTipo[tiposInvertidos[0].name]} transition-transform transform hover:scale-110`}>
                    <Link to={`/pokemon/${id}`} className="justify-center block">
                        {loading && (
                            <img src={cargandoImagen} alt="Loading..." className="w-full" />
                        )}

                        {!loading && (
                            <img src={image} alt={`imagen de ${name}`} className="w-full" onLoad={handleImageLoad} />
                        )}
                    </Link>

                    <div className="p-4 flex flex-col items-center justify-center">
                        <Link to={`/pokemon/${id}`} className="block">
                            <h3 className="text-xl font-bold text-gray-800 capitalize">{name}</h3>
                        </Link>
                        <div className="flex flex-wrap justify-around w-full">
                            {tiposInvertidos.map((type, index) => (
                                <span key={index} className="inline-block text-gray-800 px-2 py-1 rounded-full text-sm mr-2 mt-2 border-2 border-white border-opacity-50 capitalize">
                                    {type.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;




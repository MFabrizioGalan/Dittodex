import { Link } from 'react-router-dom';

const Cards = ({ id, name, image, types }) => {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="w-1/1 p-4 flex justify-center">
                <div className="bg-purple-300 bg-opacity-50 shadow-md border border-purple-400 rounded-lg overflow-hidden">
                    <Link to={`/pokemon/${id}`} className="block">
                        <img src={image} alt={`imagen de ${name}`} className="w-full" />
                    </Link>
                    <div className="p-4">
                        <Link to={`/pokemon/${id}`} className="block">
                            <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                        </Link>
                        <div>
                            {types.map((type, index) => (
                                <span key={index} className="inline-block bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm mr-2 mt-2">
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


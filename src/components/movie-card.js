const MovieCard = ({ movie }) => {
    const { title, genre } = movie;
    return (
        <div className="card">
            <div className="content">
                <div className="header">{title}</div>
                <div className="meta">{genre}</div>
            </div>
        </div>
    );
};

export default MovieCard;
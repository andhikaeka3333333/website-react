import React from "react";
import Card from "./Card";

function CardList({ dataWisata, onDelete }) {
    return (
        <div className="card-list">
            {dataWisata.map((wisata) => (
                <Card
                    {...wisata}
                    key={wisata.id}
                    onDelete={onDelete}
                    id={wisata.id}
                />
            ))}
        </div>
    );
}

export default CardList;

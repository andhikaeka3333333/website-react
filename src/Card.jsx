import React from "react";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import DeleteButton from "./DeleteButton";

function Card({ nama,deskripsi,lokasi,rating,foto,onDelete,id }) {
    return (
        <div className="card">
            <hr />
            <CardImage foto={foto}/>
            <CardBody nama={nama}
            deskripsi={deskripsi}
            lokasi={lokasi}
            rating={rating}/>
            <DeleteButton
            onDelete={onDelete}
            id={id}/>
        </div>
    )
}

export default Card
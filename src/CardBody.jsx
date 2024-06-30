import React from "react";

function CardBody({ nama,deskripsi,lokasi,rating }) {
    return (
        <div className="card-body">
            <p>Nama: {nama}</p>
            <br />
            <p>Deskripsi: {deskripsi}</p>
            <br />
            <p>Lokasi: {lokasi}</p>
            <br />
            <p>Rating: {rating}</p>
        </div>
    )
}

export default CardBody
import React from "react";
import UseJsonFetch from "../hooks/UseJsonFetch";

function Data() {
    const {
        data: data,
    } = UseJsonFetch(import.meta.env.VITE_DATA_URL, '/data');

    return (
        <>
            <div>Успешное получение данных: {data}</div>
        </>
    );
}

export default Data

import React from "react";
import UseJsonFetch from "../hooks/UseJsonFetch";

function Error() {
    const {
        error: hasError,
    } = UseJsonFetch(import.meta.env.VITE_DATA_URL, '/error');

    return (
        <>
            <div>Ошибка 500: {hasError}</div>
        </>
    );
}

export default Error

import React from "react";
import UseJsonFetch from "../hooks/UseJsonFetch";

function Loading() {
    const {
        loading: isLoading,
    } = UseJsonFetch(import.meta.env.VITE_DATA_URL, '/loading');

    return (
        <>
            <div>Индикатор загрузки: {isLoading}</div>
        </>
    )
}

export default Loading

import React, { useEffect, useState } from 'react';

type Post = {
    useId: number;
    id: number; 
    title: string;
    body: string;
}

export const Component3 = () => {
    const [data, setData] = useState<Post[] | null>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json()) // Parse the response as JSON
            .then(data => setData(data)) // Set the parsed data
            .catch((error) => { console.log(error); });
    }, []);

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
}

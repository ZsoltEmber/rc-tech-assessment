import {useEffect, useState} from 'react';
import {callApi} from './call-api';

interface Hero {
    id: number;
    name: string;
    available: boolean;
}

export function useFetch() {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchHeroes() {
            const data = await callApi<Hero[]>('heroes');
            setHeroes(data);
            setLoading(false);

        }

        fetchHeroes();
    }, []);

    const toggleAvailability = (id: number) => {
        setHeroes((prevHeroes) =>
            prevHeroes.map((hero) =>
                hero.id === id ? {...hero, available: !hero.available} : hero
            )
        );
    };

    return {heroes, loading, toggleAvailability};
}
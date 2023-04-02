import { useEffect, useState } from "react";

export function FetchUserPronouns (user) {
    const URL = `https://pronouns.alejo.io/api/users/${user}`;

    const [pronounsData, setPronounsData] = useState([])

    const fetchUserPronouns = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPronounsData(data[0])
        } catch (error) {
            console.error(`Can't fetch pronouns from ${url}: ${error}`)
        }
    }
    
    useEffect(() => {
        fetchUserPronouns(URL)
    }, [URL])

    return pronounsData
}
import { useState, useEffect } from 'react';

export async function UserInfoProvider(user) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const APIurl = `https://tw-emotes-api.onrender.com/user?name=${user}`;
    const APIoptions = { method: 'GET' };

    const fetchData = async () => {
      try {
        // console.log('Fetching data...');
        const result = await fetch(APIurl, APIoptions);
        const body = await result.json();
        // console.log('Data received:', body);
        setUserData(body);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [user]);

  // console.log(userData)

  // wrap the badgeData in a React fragment before returning it
  localStorage.setItem("userID", userData.id)
}
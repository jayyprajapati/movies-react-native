import axios from 'axios';
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
export default function Index() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/account/22095472',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTBmMWY2MTg1YWY1ZmNiOWMxMDIxZDc4ZTBkMjE0OCIsIm5iZiI6MTc1MDY0NjU1MS4yMjgsInN1YiI6IjY4NThiZjE3MWRlNDFkODMyNjRiZDM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i1jJGo_g1_cbydgHJEKf7Gle6LbePK8wsytLTkoHtVg'
        }
      };

      try {
        const res = await axios.request(options);
        if (res.status === 200) {
          setData(res.data);
          console.log(res.data)
        } else {
          console.error("Error fetching data", res.status);
        }
      } catch (err) {
        console.error("API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {loading ? (
        <ActivityIndicator />
      ) : data ? (
        <>
          <Text>Username: {data.username}</Text>
          <Text>Name: {data.name}</Text>
        </>
      ) : (
        <Text>No data found</Text>
      )}
    </View>
  );
}

import axios from 'axios';
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Index() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTBmMWY2MTg1YWY1ZmNiOWMxMDIxZDc4ZTBkMjE0OCIsIm5iZiI6MTc1MDY0NjU1MS4yMjgsInN1YiI6IjY4NThiZjE3MWRlNDFkODMyNjRiZDM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i1jJGo_g1_cbydgHJEKf7Gle6LbePK8wsytLTkoHtVg'
        }
      };

      try {
        const res = await axios.request(options);
        if (res.status === 200) {
          setData(res.data.results);
          // console.log(res.data.results)
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
        <SafeAreaView>
          <ScrollView>
          <View>
            <FlatList data={data}  renderItem={({item}) => (<Text>{item.original_title}</Text>)} keyExtractor={(item) => item.id}/>
          </View>
        </ScrollView>
        </SafeAreaView>
        
        
          {/* <Text>Username: {data.username}</Text>
          <Text>Name: {data.name}</Text> */}
        </>
      ) : (
        <Text>No data found</Text>
      )}
    </View>
  );
}

import axios from 'axios';
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";


export default function Index() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // const apiEndpoint = 'https://api.themoviedb.org/3/account/22095472';
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/account/22095472',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTBmMWY2MTg1YWY1ZmNiOWMxMDIxZDc4ZTBkMjE0OCIsIm5iZiI6MTc1MDY0NjU1MS4yMjgsInN1YiI6IjY4NThiZjE3MWRlNDFkODMyNjRiZDM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i1jJGo_g1_cbydgHJEKf7Gle6LbePK8wsytLTkoHtVg'
  }
};
    try {
      axios.request(options).then((res) => {
      if(res.status === 200) {
        setData(res.data);
      } else {
        throw new Error('Error Occurred')
      }
    })
    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }, [])
  return (
    <View className="flex-1 justify-center items-center">
      
      { loading ? <ActivityIndicator /> : <Text>{
      //@ts-ignore
      data && data[0]?.name
      }</Text>}
      {/* <Text className="text-5xl">Welcome!!!</Text> */}
    </View>
  );
}

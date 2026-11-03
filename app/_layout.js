
import { Stack } from "expo-router"
import { StatusBar } from 'expo-status-bar';


const BasicLayout = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack />
    </>
  )
}

export default BasicLayout
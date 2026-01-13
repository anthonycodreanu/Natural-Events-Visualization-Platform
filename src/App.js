import Map from "./components/Map"
import {useState, useEffect} from 'react'
import Loader from "./components/Loader"
function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect (() => {
    async function fetchEvents() {
      setLoading(true)
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events?api_key=eyTpNF4FddPGEKXbibdlEOHEDL5Yx2o7kICG6HSe")
      const data = await res.json()
      const events = data.events
      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div>
      {!loading ?
      <Map eventData = {eventData} center={{ lat: 42.3265, lng: -122 }} zoom={6} />
      :<Loader />}
    </div>
  );
}

export default App;

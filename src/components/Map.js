import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import {useState} from 'react'

function dateCalculator(date,days){
      const eventDate = new Date(date)
      const currentDate = new Date()
      const different = currentDate - eventDate
      const newDays = Math.floor(different / (1000 * 60 * 60 * 24))
      return (newDays <= days)
  }



function Map({eventData, center,zoom }) {
    const [locationInfo,setLocationInfo] = useState(null)
function locationMarkers(){
    let events = []
    for (const event of eventData){     
        if ( ( ((event.categories[0].id) == "wildfires") && (dateCalculator((event.geometry[0].date),30)) ) || ((event.categories[0].id) == "volcanoes")  ){
          events.push(<LocationMarker lat = {event.geometry[0].coordinates[1]}
          lng = {event.geometry[0].coordinates[0]} type = {event.categories[0].id} 
          onClick={() => setLocationInfo({id: event.id, title: event.title})} />)
      
      }
       if ( (dateCalculator((event.geometry[event.geometry.length-1].date),30)) && ( ((event.categories[0].id) == "seaLakeIce") || (event.categories[0].id == "severeStorms"))){
          events.push(<LocationMarker lat = {event.geometry[event.geometry.length-1].coordinates[1]}
          lng = {event.geometry[event.geometry.length-1].coordinates[0]} type = {event.categories[0].id} 
          onClick={() => setLocationInfo({id: event.id, title: event.title})} />)
      
      }
    }  
    return events  
  }

  return (
    <div className = "map">
        <GoogleMapReact
            bootstrapURLKeys = {{ key: "AIzaSyDOD8ACGYJ7YzQs2sXLRb32qKScAgGdT8s" }}
            defaultCenter = { center }
            defaultZoom = { zoom }
        >
          {locationMarkers()}

        </GoogleMapReact>
        {locationInfo ?
        <LocationInfoBox info = {locationInfo} />
        : null
        }
    </div>
  )
}

Map.defaultProps = {
    center: {lat: 42.3265, 
        lng: -122
    },
    zoom: 6

}

export default Map
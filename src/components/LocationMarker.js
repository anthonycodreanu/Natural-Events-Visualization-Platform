import {Icon} from "@iconify/react"
import fireIcon from "@iconify/icons-mdi/fire-alert"
import React from 'react'

const ICONS = {
  wildfires: "mdi:fire-alert",
  earthquake: "streamline-ultimate-color:natural-disaster-earthquake",
  seaLakeIce: "openmoji:iceberg",
  volcanoes: "emojione-v1:volcano",
  severeStorms: "streamline-cyber-color:cloud-storm",
}

function LocationMarker({lat, lng, type, onClick}) {
  return (
    <div className="location-marker" onClick = {onClick}>
        <Icon icon = {ICONS[type]} className = "location-icon" />
    </div>
  )
 
}

export default LocationMarker
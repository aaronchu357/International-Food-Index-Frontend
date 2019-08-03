import React, { Fragment, useState } from 'react'
import { Marker } from '@react-google-maps/api'

const MapMarker = props => {
  // useEffect(() => {
  //   let dishesList = props.location.relationships.national_dishes.data.map(dish => dish.id)
  //   return setNationalDishesIds([...dishesList])
  // },[])

  // return (
  //   <div>
  //     <Marker id={props.location.attributes.name}
  //       onLoad={marker => {
  //         console.log(props.location.attributes.name)
  //       }}
  //       position={{
  //         lat: parseFloat(props.location.attributes.latitude),
  //         lng: parseFloat(props.location.attributes.longitude)
  //       }}
  //       onClick={changeIsShown}
  //     />
  //     {isShown &&
  //       <InfoWindow
  //         position={{ lat: parseFloat(props.location.attributes.latitude), lng: parseFloat(props.location.attributes.longitude) }}
  //       >
  //         <div style={{
  //           background: `white`,
  //           border: `1px solid #ccc`,
  //           padding: 15
  //         }}>
  //           <h1>{props.location.attributes.name}</h1>
  //         </div>
  //       </InfoWindow>
  //     }
  //   </div>
  // )

  // withStateHandlers(() => ({
  //   isOpen: false,
  //   infoIndex: null
  // }), {
  //   showInfo: ({ isOpen, infoIndex }) => (index) => ({
  //     isOpen: infoIndex !== index || !isOpen,
  //     infoIndex: index
  //   })
  // })
  // <Marker onClick={() => props.showInfo(marker.index)}>
  //   {(props.isOpen && props.infoIndex === marker.index) &&
  //     <InfoWindow onCloseClick={props.showInfo}>
  //       <span>{marker.info}</span>
  //     </InfoWindow>}
  // </Marker>

  // const [isOpen, setOpenCondition] = useState(false)

  const [markerHex, setMarkerHex] = useState(Math.floor(Math.random()*16777215).toString(16))

  const handleMarkerOnClick = () => {
    props.handleMarkerOnClick(props.location)
    // setOpenCondition(!isOpen)
  }

  return (
    <Fragment>
        <Marker id={props.location.id}
        onLoad={marker => {
          console.log(props.location.attributes.name)
          console.log(marker)
        }}
        icon={markerHex.length === 6 ? `https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=•|${markerHex}` : `https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=•|FFFFFF` }
        position={{
          lat: parseFloat(props.location.attributes.latitude),
          lng: parseFloat(props.location.attributes.longitude)
        }}
        onClick={handleMarkerOnClick}
        />
        
    </Fragment>
  )
}

export default MapMarker
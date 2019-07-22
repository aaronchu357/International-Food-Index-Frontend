import React, { useCallback, useState, Fragment, useEffect } from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api'
// import MapInfoWindow from './MapInfoWindow'

const MapMarker = (props) => {
  // const [currentInfoWindowlocation, setInfoWindowlocation] = useState({})

  // const changeCurrentInfoWindow = useCallback(
  //   (locationData) => {
  //     setInfoWindowlocation(locationData)
  //   }
  // )

  // return (
  //   <>
  //     <Marker id={props.location.name}
  //       onLoad={marker => {
  //         console.log('marker: ', marker)
  //         console.log(props.location.name)
  //       }}
  //       position={{
  //         lat: parseFloat(props.location.latitude),
  //         lng: parseFloat(props.location.longitude)
  //       }}
  //       onClick={() => changeCurrentInfoWindow(props.location)}
  //     />
  //   </>
  // ) 
  
  // const generateNationalDishes = () => {
  //   debugger
  //   nationalDishesIds.map(nationalDishId => {
  //     return (
  //       fetch(`http://localhost:3000/national_dishes/${nationalDishId}`)
  //         .then(resp => resp.json())
  //         .then(nationalDish => {
  //           return (
  //             <li>
  //               {nationalDish.data.attributes.name}
  //             </li>
  //           )
  //         })
  //     )
  //   })
  // }


  //---------------------------WORKS--------------------------------
  // const [isShown, setIsShown] = useState(false)
  // const [nationalDishesIds, setNationalDishesIds] = useState([])

  // const changeIsShown = useCallback(
  //   () => {
  //     setIsShown(!isShown)
  //   },
  //   [isShown]
  // )
  //-----------------------------------------------------------------

  //-------------------------------WORKS------------------------------
  // useEffect(() => {
  //   let dishesList = props.location.relationships.national_dishes.data.map(dish => dish.id)
  //   return setNationalDishesIds([...dishesList])
  // },[])
  //------------------------------------------------------------------

  //------------------------------WORKS----------------------------
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
  //-------------------------------------------------------------------------
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

  const handleMarkerOnClick = () => {
    props.handleMarkerOnClick(props.location)
    // setOpenCondition(!isOpen)
  }


  return (
    <div>
      <Marker id={props.location.id}
        onLoad={marker => {
          console.log(props.location.attributes.name)
          console.log(marker)
        }}
        position={{
          lat: parseFloat(props.location.attributes.latitude),
          lng: parseFloat(props.location.attributes.longitude)
        }}
        onClick={handleMarkerOnClick}
      />
    </div>
  )
}

export default MapMarker
// import React, { useState } from "react";
// import styled from "styled-components";
// import { Box, IconButton, Typography, Paper } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

// // Define types for our locations
// interface Location {
//   lat: number;
//   lng: number;
//   name?: string;
// }

// interface WorldMapProps {
//   locations?: Location[];
//   title?: string;
// }

// // Sample locations (you can replace these with your actual data)
// const defaultLocations: Location[] = [
//   { lat: 40.7128, lng: -74.006 }, // New York
//   { lat: 34.0522, lng: -118.2437 }, // Los Angeles
//   { lat: 51.5074, lng: -0.1278 }, // London
//   { lat: 48.8566, lng: 2.3522 }, // Paris
//   { lat: 55.7558, lng: 37.6173 }, // Moscow
//   { lat: 39.9042, lng: 116.4074 }, // Beijing
//   { lat: 28.6139, lng: 77.209 }, // Delhi
// ];

// // Styled components
// const MapContainer = styled(Paper)`
//   position: relative;
//   width: 100%;
//   max-width: 1200px;
//   margin: 20px auto;
//   padding: 20px;
//   background-color: #ffffff;
//   border-radius: 8px;
// `;

// const WorldMapSvg = styled.div<{ scale: number }>`
//   position: relative;
//   width: 100%;
//   height: 0;
//   padding-top: 50%;
//   background-color: #f5f5f5;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1000'%3E%3Cpath fill='%23E6E6E6' d='M2000,1000H0V0h2000V1000z M1810,160c-131.1,0-172,101.9-172,101.9s89.1-33.1,172-33.1c82.9,0,172,33.1,172,33.1S1941.1,160,1810,160z'/%3E%3C/svg%3E");
//   background-size: contain;
//   background-repeat: no-repeat;
//   transform: scale(${(props) => props.scale});
//   transform-origin: center center;
//   transition: transform 0.3s ease;
// `;

// const LocationMarker = styled.div`
//   position: absolute;
//   width: 12px;
//   height: 12px;
//   background-color: #2196f3;
//   border-radius: 50%;
//   transform: translate(-50%, -50%);
//   cursor: pointer;
//   box-shadow: 0 0 0 2px #ffffff;

//   &:hover {
//     background-color: #1976d2;
//     transform: translate(-50%, -50%) scale(1.2);
//   }

//   &::after {
//     content: "";
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     border-radius: 50%;
//     background-color: rgba(33, 150, 243, 0.3);
//     animation: pulse 2s infinite;
//   }

//   @keyframes pulse {
//     0% {
//       transform: scale(1);
//       opacity: 1;
//     }
//     100% {
//       transform: scale(2.5);
//       opacity: 0;
//     }
//   }
// `;

// const ZoomControls = styled(Box)`
//   position: absolute;
//   top: 20px;
//   left: 20px;
//   background-color: #ffffff;
//   border-radius: 4px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const WorldMap: React.FC<WorldMapProps> = ({
//   locations = defaultLocations,
//   title = "Real-Time",
// }) => {
//   const [scale, setScale] = useState(1);

//   const handleZoomIn = () => {
//     setScale((prev) => Math.min(prev + 0.2, 2));
//   };

//   const handleZoomOut = () => {
//     setScale((prev) => Math.max(prev - 0.2, 0.5));
//   };

//   // Convert lat/lng to x/y coordinates
//   const getPointCoordinates = (lat: number, lng: number) => {
//     const x = ((lng + 180) * 100) / 360;
//     const y = ((90 - lat) * 100) / 180;
//     return { x, y };
//   };

//   return (
//     <MapContainer elevation={3}>
//       <Typography variant="h6" gutterBottom>
//         {title}
//       </Typography>
//       <Box position="relative">
//         <WorldMapSvg scale={scale}>
//           {locations.map((location, index) => {
//             const { x, y } = getPointCoordinates(location.lat, location.lng);
//             return (
//               <LocationMarker
//                 key={index}
//                 style={{
//                   left: `${x}%`,
//                   top: `${y}%`,
//                 }}
//                 title={location.name || `Location ${index + 1}`}
//               />
//             );
//           })}
//         </WorldMapSvg>
//         <ZoomControls>
//           <IconButton onClick={handleZoomIn} size="small">
//             <AddIcon />
//           </IconButton>
//           <IconButton onClick={handleZoomOut} size="small">
//             <RemoveIcon />
//           </IconButton>
//         </ZoomControls>
//       </Box>
//     </MapContainer>
//   );
// };

// export default WorldMap;
// import React, { useEffect, useState, useCallback } from "react";
// import styled from "styled-components";
// import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// interface Location {
//   lat: number;
//   lng: number;
//   name?: string;
// }

// interface MapProps {
//   locations?: Location[];
//   title?: string;
//   defaultZoom?: number;
//   defaultCenter?: { lat: number; lng: number };
// }

// const MapContainer = styled(Paper)`
//   position: relative;
//   width: 100%;
//   max-width: 1200px;
//   margin: 20px auto;
//   border-radius: 8px;
//   overflow: hidden;
// `;

// const MapWrapper = styled(Box)`
//   position: relative;
//   width: 100%;
//   height: 500px;

//   @media (max-width: 600px) {
//     height: 400px;
//   }
// `;

// const TitleWrapper = styled(Box)`
//   position: relative;
//   padding: 16px;
//   background: white;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.12);
// `;

// const defaultLocations: Location[] = [
//   { lat: 40.7128, lng: -74.006, name: "New York" },
//   { lat: 34.0522, lng: -118.2437, name: "Los Angeles" },
// ];

// const WorldMap: React.FC<MapProps> = ({
//   locations = defaultLocations,
//   title = "My Real-Time Map",
//   defaultZoom = 4,
//   defaultCenter = { lat: 39.8283, lng: -98.5795 },
// }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [map, setMap] = useState<google.maps.Map | null>(null);

//   const mapOptions: google.maps.MapOptions = {
//     zoomControl: true,
//     mapTypeControl: false,
//     streetViewControl: false,
//     fullscreenControl: false,
//     styles: [
//       {
//         featureType: "all",
//         elementType: "geometry",
//         stylers: [{ lightness: 20 }],
//       },
//       {
//         featureType: "water",
//         elementType: "geometry",
//         stylers: [{ color: "#e9e9e9" }],
//       },
//       {
//         featureType: "water",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#9e9e9e" }],
//       },
//     ],
//   };

//   const handleLoad = (map: google.maps.Map) => {
//     setMap(map);
//   };

//   // Move fitBounds to useCallback
//   const fitBounds = useCallback(() => {
//     if (map && locations.length > 0) {
//       const bounds = new google.maps.LatLngBounds();
//       locations.forEach((location) => {
//         bounds.extend(new google.maps.LatLng(location.lat, location.lng));
//       });
//       map.fitBounds(bounds);
//     }
//   }, [map, locations]); // Include dependencies here

//   useEffect(() => {
//     fitBounds();
//   }, [fitBounds]); // Now we can safely use fitBounds as a dependency

//   return (
//     <MapContainer elevation={2}>
//       <TitleWrapper>
//         <Typography variant={isMobile ? "h6" : "h5"}>{title}</Typography>
//       </TitleWrapper>
//       <MapWrapper>
//         <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//           <GoogleMap
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             options={mapOptions}
//             onLoad={handleLoad}
//             zoom={defaultZoom}
//             center={defaultCenter}
//           >
//             {locations.map((location, index) => (
//               <Marker
//                 key={index}
//                 position={{ lat: location.lat, lng: location.lng }}
//                 title={location.name}
//                 animation={google.maps.Animation.DROP}
//               />
//             ))}
//           </GoogleMap>
//         </LoadScript>
//       </MapWrapper>
//     </MapContainer>
//   );
// };

// export default WorldMap;
// import React, { useEffect, useState, useCallback } from "react";
// import styled from "styled-components";
// import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// interface Location {
//   lat: number;
//   lng: number;
//   name?: string;
// }

// interface MapProps {
//   locations?: Location[];
//   title?: string;
//   defaultZoom?: number;
//   defaultCenter?: { lat: number; lng: number };
// }

// const MapContainer = styled(Paper)`
//   position: relative;
//   width: 100%;
//   max-width: 1200px;
//   margin: 20px auto;
//   border-radius: 8px;
//   overflow: hidden;
// `;

// const MapWrapper = styled(Box)`
//   position: relative;
//   width: 100%;
//   height: 500px;

//   @media (max-width: 600px) {
//     height: 400px;
//   }
// `;

// const TitleWrapper = styled(Box)`
//   position: relative;
//   padding: 16px;
//   background: white;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.12);
// `;

// const defaultLocations: Location[] = [
//   { lat: 40.7128, lng: -74.006, name: "New York" },
//   { lat: 34.0522, lng: -118.2437, name: "Los Angeles" },
// ];

// const WorldMap: React.FC<MapProps> = ({
//   locations = defaultLocations,
//   title = "My Real-Time Map",
//   defaultZoom = 4,
//   defaultCenter = { lat: 39.8283, lng: -98.5795 },
// }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [map, setMap] = useState<google.maps.Map | null>(null);
//   const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false);

//   const mapOptions: google.maps.MapOptions = {
//     zoomControl: true,
//     mapTypeControl: false,
//     streetViewControl: false,
//     fullscreenControl: false,
//     styles: [
//       {
//         featureType: "all",
//         elementType: "geometry",
//         stylers: [{ lightness: 20 }],
//       },
//       {
//         featureType: "water",
//         elementType: "geometry",
//         stylers: [{ color: "#e9e9e9" }],
//       },
//       {
//         featureType: "water",
//         elementType: "labels.text.fill",
//         stylers: [{ color: "#9e9e9e" }],
//       },
//     ],
//   };

//   const handleLoad = (map: google.maps.Map) => {
//     setMap(map);
//     setIsMapLoaded(true); // Set map loaded state
//   };

//   const fitBounds = useCallback(() => {
//     if (map && locations.length > 0) {
//       const bounds = new google.maps.LatLngBounds();
//       locations.forEach((location) => {
//         bounds.extend(new google.maps.LatLng(location.lat, location.lng));
//       });
//       map.fitBounds(bounds);
//     }
//   }, [map, locations]);

//   useEffect(() => {
//     if (isMapLoaded) {
//       fitBounds();
//     }
//   }, [fitBounds, isMapLoaded]); // Add isMapLoaded to dependencies

//   return (
//     <MapContainer elevation={2}>
//       <TitleWrapper>
//         <Typography variant={isMobile ? "h6" : "h5"}>{title}</Typography>
//       </TitleWrapper>
//       <MapWrapper>
//         <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//           <GoogleMap
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             options={mapOptions}
//             onLoad={handleLoad}
//             zoom={defaultZoom}
//             center={defaultCenter}
//           >
//             {locations.map((location, index) => (
//               <Marker
//                 key={index}
//                 position={{ lat: location.lat, lng: location.lng }}
//                 title={location.name}
//                 animation={google.maps.Animation.DROP}
//               />
//             ))}
//           </GoogleMap>
//         </LoadScript>
//       </MapWrapper>
//     </MapContainer>
//   );
// };

// export default WorldMap;

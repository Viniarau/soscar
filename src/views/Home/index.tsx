import React, { useRef, useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import CardMap from '../../components/CardMap';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ContainerExit, TextExit } from './style';
import { googleApi } from '../../constants';

export type Props = {
    name: string;
  };

const mockLocationCurrent = {latitude: -19.939652, longitude: -44.0148176};
const mockLocationVehicle = {latitude: -19.9487019, longitude: -44.0258042};

const Home: React.FC<Props> = () => {
    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);
    const mapEl = useRef(null);

    const currentPosition = mockLocationCurrent;
    const vehiclePosition = mockLocationVehicle;

    return (
        <Container>
            <ContainerExit>
                <TextExit>
                    {'X'}
                </TextExit>
            </ContainerExit>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={
                    {height: '100%',
                    width: '100%',
                }}
                initialRegion={{
                latitude: currentPosition.latitude,
                longitude: currentPosition.longitude,
                latitudeDelta: 0.00999,
                longitudeDelta: 0.00444,
                }}
                ref={mapEl}
            >
                <Marker
                    key={1}
                    pinColor={"red"}
                    coordinate={{latitude: currentPosition.latitude, longitude: currentPosition.longitude }}
                    title={'Estou aqui'}
                    description={'João'}
                /> 
                <Marker
                    key={2}
                    pinColor={"red"}
                    coordinate={{latitude: vehiclePosition.latitude, longitude: vehiclePosition.longitude }}
                    title={'Reboque'}
                    description={'ABC-123'}
                >
                   
                    <Ionicons name="car" size={35} color="#4CE5B1" />
                    
                </Marker> 
                <MapViewDirections
                    origin={{latitude: currentPosition.latitude, longitude: currentPosition.longitude }}
                    destination={{latitude: vehiclePosition.latitude, longitude: vehiclePosition.longitude }}
                    apikey={googleApi}
                    strokeWidth={4}
                    strokeColor={'blue'}
                    onReady={result => {
                        setDistance(result.distance);
                        setDuration(result.duration);

                        mapEl.current.fitToCoordinates(
                            result.coordinates,{
                                edgePadding: {
                                    top: 20,
                                    bottom: 363,
                                    left: 20,
                                    right: 20
                                }
                            }
                        )
                    }}
                />
            </ MapView>
            <CardMap data={{distance: distance, duration: duration}} />
        </Container>
    )
}

export default Home;
import React, { useRef, useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import CardMap from '../../components/CardMap';
import CardNewRequest from '../../components/CardNewRequest';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, ContainerExit, TextExit } from './style';
import { googleApi } from '../../constants';

const mock = {
    mockUser: { 
        nameUser: 'João Vitor', 
        avaliationUser: '4.9'
    },
    mockAddres: {
        addresStart: 'Av. Babita Camargos, 1725 - Cidade Industrial, Contagem',
        addresFinish: 'R. Zircônio, 500 - Vila Magnesita, BH',
    },
    mockLocationCurrent: {
        latitude: -19.939652, 
        longitude: -44.0148176
    },
    mockLocationVehicle: {
        latitude: -19.9487019, 
        longitude: -44.0258042
    },
    mockDefaultLocation: {
        latitude: 0.000000, 
        longitude: 0.000000,
        laDelta: 100,
        loDelta: 100
    }
}

const Home: React.FC = () => {
    const [showCard, setShowCard] = useState<boolean>(false);
    const [distance, setDistance] = useState<number>(null);
    const [duration, setDuration] = useState<number>(null);
    const [currentPosition, setCurrentPosition] = useState({latitude: 0.000000, longitude: 0.000000});
    const [vehiclePosition, setVehiclePosition] = useState({latitude: 0.000000, longitude: 0.000000});
    const [laDelta, setLaDelta] = useState<number>(100);
    const [loDelta, setLoDelta] = useState<number>(100);

    const mapEl = useRef(null);

    const setLocation = async () => {
        await setCurrentPosition(mock.mockLocationCurrent);
        await setVehiclePosition(mock.mockLocationVehicle);
        await setLaDelta(0.00999);
        await setLoDelta(0.00444);
    };

    const setClearLocation = async () => {
        await setCurrentPosition({latitude: 0, longitude: 0});
        await setVehiclePosition({latitude: 0, longitude: 0});
        await setLaDelta(100);
        await setLoDelta(100);
    };

    return (
        <Container>
            {/*<ContainerExit>
                <TextExit>
                    {'X'}
                </TextExit>
            </ContainerExit> */}
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{height: '100%', width: '100%',}}
                initialRegion={{
                latitude: currentPosition.latitude ? currentPosition.latitude : mock.mockDefaultLocation.latitude,
                longitude: currentPosition.longitude ? currentPosition.longitude : mock.mockDefaultLocation.longitude,
                latitudeDelta: laDelta,
                longitudeDelta: loDelta,
                }}
                ref={mapEl}
            >
            {currentPosition.latitude !== 0 && (
                <>
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
                </>
            )}
            </ MapView>
            {showCard ? (
                <CardMap 
                    distance={distance}
                    duration={duration}
                    user={mock.mockUser}
                    addres={mock.mockAddres}
                    cancelRequest={(bool: boolean) => {
                        setClearLocation();
                        setShowCard(bool);
                    }} />
            ): (
                <CardNewRequest 
                    start={mock.mockAddres.addresStart} 
                    finish={mock.mockAddres.addresFinish} 
                    startRequest={(bool: boolean) => {
                        setLocation();
                        setShowCard(bool);
                }} />
            )}

        </Container>
    )
}

export default Home;
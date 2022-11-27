import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { ActivityIndicator, Image } from 'react-native';
import { 
    Container,
    ContainerTop,
    ContainerLeft,
    Photo,
    ContainerAvaliation,
    TextAvaliation,
    ContainerName, 
    TextName,
    ContainerLocation,
    ContainerMatch,
    ContainerCurrent,
    TextLocation,
    ContainerIcons,
    ContainerIconMessage,
    ContainerIconCall,
    IconMarkerDefault,
    IconMarkerInternal,
    ContainerInfo,
    ContainerInfoInternal,
    TextTitleInfo,
    TextSubTitleInfo,
    ButtonCancel,
    TextButtonCancel
} from './style';
import Ionicons from '@expo/vector-icons/Ionicons';

type userProps = {
    nameUser: string;
    avaliationUser: string;
};

type addresProps = {
    addresStart: string;
    addresFinish: string;
};

export type DataProps = {
    user: userProps;
    addres: addresProps;
    distance: number;
    duration: number;
    cancelRequest: Dispatch<SetStateAction<boolean>>;
  };

const CardMap = ({user, addres, distance, duration, cancelRequest}: DataProps) => {
    const [showActivity, setShowActivity] = useState<boolean>(false);

    return (
        <Container>
            <ContainerTop>
                <ContainerLeft>
                    <Photo>
                        <Image source={require('../../assets/image/photo.png')} />
                    </Photo>
                    <ContainerName>
                        <TextName>
                            {user.nameUser}
                        </TextName>
                        <ContainerAvaliation>
                            <Image source={require('../../assets/image/shape.png')} />
                            <TextAvaliation>
                                {user.avaliationUser}
                            </TextAvaliation>
                        </ContainerAvaliation>
                    </ContainerName>
                </ContainerLeft>
                <ContainerIcons>
                    <ContainerIconMessage>
                        <Ionicons name="ios-chatbubble" size={28} color="#fff" />
                    </ContainerIconMessage>
                    <ContainerIconCall>
                        <Ionicons name="call" size={28} color="#fff" />
                    </ContainerIconCall>
                </ContainerIcons>
            </ContainerTop>
            <ContainerLocation>
                <ContainerMatch>
                    <IconMarkerDefault>
                        <IconMarkerInternal />
                    </IconMarkerDefault>
                    <TextLocation>
                        {addres.addresStart}
                    </TextLocation>
                </ContainerMatch> 
                <ContainerCurrent>
                    <Ionicons name="pin" size={20} color="#F52D56" />
                    <TextLocation>
                        {addres.addresFinish}
                    </TextLocation>
                </ContainerCurrent>
            </ContainerLocation>
            <ContainerInfo>
                <Ionicons name="car" size={35} color="#242E42" />
                <ContainerInfoInternal>
                    <TextTitleInfo>
                        {'DISTANCE'}
                    </TextTitleInfo>
                    <TextSubTitleInfo>
                        {distance?.toFixed(2)}km
                    </TextSubTitleInfo>
                </ContainerInfoInternal>
                <ContainerInfoInternal>
                    <TextTitleInfo>
                        {'TIME'}
                    </TextTitleInfo>
                    <TextSubTitleInfo>
                        {duration?.toFixed(0)}min
                    </TextSubTitleInfo>
                </ContainerInfoInternal>
                <ContainerInfoInternal>
                    <TextTitleInfo>
                        {'PRICE'}
                    </TextTitleInfo>
                    <TextSubTitleInfo>
                        ${'25.00'}
                    </TextSubTitleInfo>
                </ContainerInfoInternal>
            </ContainerInfo>
           <ButtonCancel onTouchStart={() => {
                   setShowActivity(true);
                   setTimeout(() => {
                        setShowActivity(false);
                        cancelRequest(false);
                    }, 2000)
                   }}>
               <TextButtonCancel>
                    Cancel Request
               </TextButtonCancel>
               {showActivity && (
                    <ActivityIndicator size="small" color="#fff" />
               )}
           </ButtonCancel>
        </Container>
    )
};

export default CardMap;
import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
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

const CardMap = (data: any) => {

    return (
        <Container>
            <ContainerTop>
                <ContainerLeft>
                    <Photo>
                        <Image source={require('../../assets/image/photo.png')} />
                    </Photo>
                    <ContainerName>
                        <TextName>
                            Gregory Smith
                        </TextName>
                        <ContainerAvaliation>
                            <Image source={require('../../assets/image/shape.png')} />
                            <TextAvaliation>
                                4.9
                            </TextAvaliation>
                        </ContainerAvaliation>
                    </ContainerName>
                </ContainerLeft>
                <ContainerIcons>
                    <ContainerIconMessage color={'##4CE5B1'}>
                        <Ionicons name="ios-chatbubble" size={28} color="#fff" />
                    </ContainerIconMessage>
                    <ContainerIconCall color={'#4252FF'}>
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
                        {'Av. Babita Camargos, 1725 - Cidade Industrial, Contagem'}
                    </TextLocation>
                </ContainerMatch> 
                <ContainerCurrent>
                    <Ionicons name="pin" size={20} color="#F52D56" />
                    <TextLocation>
                        {'R. Zircônio, 500 - Vila Magnesita, BH'}
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
                        {data.data.distance?.toFixed(2)}km
                    </TextSubTitleInfo>
                </ContainerInfoInternal>
                <ContainerInfoInternal>
                    <TextTitleInfo>
                        {'TIME'}
                    </TextTitleInfo>
                    <TextSubTitleInfo>
                        {data?.data.duration?.toFixed(0)}min
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
           <ButtonCancel>
               <TextButtonCancel>
                    Cancel Request
               </TextButtonCancel>
           </ButtonCancel>
        </Container>
    )
};

export default CardMap;
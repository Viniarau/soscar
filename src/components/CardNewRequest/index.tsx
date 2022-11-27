import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import {
    Container,
    ButtonCancel,
    TextButtonCancel,
    ContainerInput,
    IconMarkerDefault,
    IconMarkerInternal,
    Input,
} from './style';
import Ionicons from '@expo/vector-icons/Ionicons';

export type DataProps = {
    startRequest: Dispatch<SetStateAction<boolean>>;
    start: string;
    finish: string;
  };

const CardNewRequest = ({start, finish, startRequest}: DataProps) => {
    const [showActivity, setShowActivity] = useState<boolean>(false);

    return (
    <Container>
        <ContainerInput>
            <IconMarkerDefault>
                <IconMarkerInternal />
            </IconMarkerDefault>
            <Input value={start} placeholder="" placeholderTextColor="gray" />
        </ ContainerInput>
        <ContainerInput>
            <Ionicons name="pin" size={20} color="#F52D56" />
            <Input value={finish} placeholder="" placeholderTextColor="gray" />
        </ ContainerInput>
        <ButtonCancel onTouchStart={() => {
                setShowActivity(true);
                setTimeout(() => {
                    setShowActivity(false);
                    startRequest(true)
                }, 2000)
            }}>
            <TextButtonCancel>
                Start Request
            </TextButtonCancel>
            {showActivity && (
                <ActivityIndicator size="small" color="#fff" />
            )}
        </ButtonCancel>
    </Container>
    )
};

export default CardNewRequest;

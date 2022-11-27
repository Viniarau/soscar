import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute; 
    height: 170px;
    width: 343px;
    borderRadius: 8px;
    backgroundColor: #FFF;
    opacity: 0.98;
    bottom: 20px;
    alignItems: center;
    justify-content: center;
    padding-horizontal: 15px;
`;

export const ContainerInput = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const IconMarkerDefault = styled.View`
    width: 18px;
    height: 18px;
    backgroundColor: #fff;
    border-width: 2px;
    border-color: #4CE5B1;
    borderRadius: 20px;
    align-items: center;
    justify-content: center;
`;

export const IconMarkerInternal = styled.View`
    display: flex;
    width: 10.5px;
    height: 10.5px;
    backgroundColor: #4CE5B1;
    borderRadius: 20px;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.TextInput`
    border: 1px solid gray;
    margin-bottom: 10px;
    padding-left: 10px;
    margin-left: 3px;
    borderRadius: 3px
    width: 290px;
`;

export const ButtonCancel = styled.View`
    flex-direction: row;
    width: 311px;
    height: 45px;
    backgroundColor: #242E42;
    alignItems: center;
    justifyContent: center;
    borderRadius: 8px;
    margin-top: 15px;
`;

export const TextButtonCancel = styled.Text`  
    fontSize: 17px;
    lineHeight: 20px; 
    color: #fff;
    padding-right: 10px;
`;

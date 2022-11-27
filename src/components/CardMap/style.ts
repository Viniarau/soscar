import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute; 
    height: 310px;
    width: 343px;
    borderRadius: 8px;
    backgroundColor: #FFF;
    opacity: 0.98;
    bottom: 20px;
    alignItems: center;
`;

export const ContainerTop = styled.View`
    display: flex;
    height: 68px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-start;
    align-items: center;
    padding-horizontal: 15px;
`;

export const ContainerLeft = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.View`
    width: 50px;
    height: 50px;
`;

export const ContainerName = styled.View`
    display: flex;
    flex-direction: column;
    padding-left: 15px;
`;

export const ContainerAvaliation = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
`;

export const TextAvaliation = styled.Text`
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    color: #C8C7CC;
    padding-left: 5px;
    ;
`;

export const TextName = styled.Text`
    font-size: 17px;
    font-weight: 800;
    line-height: 20px;
    color: #242E42;
`;

export const ContainerLocation = styled.View`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-vertical: 15px;
    padding-horizontal: 15px;
    margin-bottom: 10px;
    border-bottom-width: 1px;
    border-color: #EFEFF4;
`;

export const ContainerMatch = styled.View`
    display: flex;
    flex-direction: row;
`;

export const ContainerCurrent = styled.View`
    display: flex;
    flex-direction: row;
    padding-top: 15px;
`;

export const TextLocation = styled.Text`  
    fontSize: 17px;
    lineHeight: 20px; 
    color: #242E42;
    padding-left: 10px;
`;

export const ContainerIcons = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const ContainerIconMessage = styled.View`
    width: 40px;
    height: 40px;
    backgroundColor: #4252FF;
    borderRadius: 20px;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
`;

export const ContainerIconCall = styled.View`
    width: 40px;
    height: 40px;
    backgroundColor: #4CE5B1;
    borderRadius: 20px;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
`;

export const IconMarkerDefault = styled.View`
    width: 21px;
    height: 21px;
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

export const ContainerInfo = styled.View`
    display: flex;
    width: 100%;
    padding-horizontal: 15px;
    padding-vertical: 15px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContainerInfoInternal = styled.View`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
`;

export const TextTitleInfo = styled.Text`  
    fontSize: 15px;
    lineHeight: 17px; 
    color: #C8C7CC;
`;

export const TextSubTitleInfo = styled.Text`  
    fontSize: 18px;
    fontWeight: 800;
    lineHeight: 19px; 
    color: #242E42;
    padding-top: 10px;
`;

export const ButtonCancel = styled.View`
    flex-direction: row;
    width: 311px;
    height: 45px;
    backgroundColor: #242E42;
    alignItems: center;
    justifyContent: center;
    borderRadius: 8px;
`;

export const TextButtonCancel = styled.Text`  
    fontSize: 17px;
    lineHeight: 20px; 
    color: #fff;
    padding-right: 10px;
`;

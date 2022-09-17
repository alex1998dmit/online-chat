import { Button, Grid, TextField, Container } from "@mui/material";
import styled from '@emotion/styled'
import { observer } from "mobx-react-lite";
import rootStore from "../../../store";
import { useEffect } from "react";
import { useParams } from "react-router";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { useForm } from "react-hook-form";
import ControlledInput from "../../ui/ControlledInput";

// TODO убрать в отдельный компонент
const MessageBox = observer(({ msg }) => {
    console.log(msg)
    return (
        <MessageBoxStyled side={msg.side} key={msg.id}>
            <MessageContentStyled side={msg.side}>
                {/* dsadsadasdasasdsad */}
                {msg.isEditing ? <TextField value={msg.editMessage} onChange={msg.changeEditMessage} fullWidth /> : msg.message}
                {(msg.side === 'me' && !msg.isEditing) && (
                    <EditStyled onClick={msg.startEditing}><EditIcon sx={{ fontSize: '1em', color: 'white' }} /></EditStyled>
                )}
                {msg.isEditing && <EditStyled onClick={msg.saveEditing}><CheckIcon sx={{ fontSize: '1em', color: 'white' }} /></EditStyled>}
            </MessageContentStyled>
        </MessageBoxStyled>
    )
})

// TODO rename ChatRoom or MessageRoom
const ChatPage = observer(() => {
    const { id }= useParams();
    const form = useForm();
    console.log(id)

    useEffect(() => {
        const fetch = async () => {
            await rootStore.messageRoom.fetchMessages(id);
        }

        fetch();
    }, []);

    console.log(rootStore.messageRoom.messages)
    return (
        <Container>
            <MessageContainerStyled container>
                <MessagesStyled>
                    {rootStore.messageRoom.messages.map((msg) => <MessageBox key={msg.id} msg={msg} />)}
                </MessagesStyled>
                <ControlsStyled onSubmit={form.handleSubmit(rootStore.messageRoom.sendMessage)}>
                    <ControlledInput form={form} name="message" fullWidth />
                    <Button type='submit'>Send</Button>
                </ControlsStyled>
            </MessageContainerStyled>
        </Container>
    )
});

const MessageBoxStyled = styled.div`
    display: flex;
    width: calc(100% - 20px);
    justify-content: ${(props) => props.side === 'friend' ? 'flex-start' : 'flex-end'};
    padding: 20px 10px;
`

const MessageContentStyled = styled.div`
    padding: 10px 10px 25px 10px;
    background: ${(props) => props.side === 'friend' ? 'white' : '#179CDE'};
    color: ${(props) => props.side === 'friend' ? 'black' : 'white'};
    border: none;
    border-radius: 20px;
    max-width: 60vw;
    overflow-wrap: anywhere;
    position: relative;
`

const EditStyled = styled.button`
    position: absolute;
    right: 10px;
    bottom: 0;
    border: none;
    background: transparent;
`

const MessageContainerStyled = styled.div`
`;

const MessagesStyled = styled.div`
    height: 90vh;
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 10px;
    overflow: auto;
    background: aliceblue;
`
const ControlsStyled = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding-top: 16px;
`

export default ChatPage;

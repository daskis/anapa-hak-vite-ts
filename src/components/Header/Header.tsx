import cls from "./Header.module.scss";
import {Button, ConfigProvider, Form, Input, Modal, Typography, Upload} from "antd";
import {Theme, useTheme} from "@/utils";
import {Header as AntHeader} from "antd/es/layout/layout";
import React, {useEffect, useState} from "react";
import {UploadOutlined} from "@ant-design/icons";
import {useSendFileMutation} from "@/store/services/uploadApi.ts";
import {useAppDispatch} from "@/store";
import {addLink} from "@/store/features/linkSlice.ts";
import {addVideo} from "@/store/features/videoSlice.ts";

export const Header = () => {
    const {toggleTheme} = useTheme()
    const [isModalFileOpen, setIsModalFileOpen] = useState(false);
    const [isModalLinkOpen, setIsModalLinkOpen] = useState(false);
    const [file, setFile] = useState()
    const [link, setLink] = useState("")
    const dispatch = useAppDispatch()
    const {theme} = useTheme()
    const [trigger, {data}] = useSendFileMutation()
    const handleFileUpload = () => {
        const formData = new FormData()
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        formData.set("file", file)
        trigger(formData)
    }
    useEffect(() => {
        dispatch(addVideo(data))
    }, [data]);
    return (
        <AntHeader className={cls.header}>
            <ConfigProvider
                theme={{
                    token: {
                        colorTextBase: theme === Theme.DARK ? "#fff" : "#000",
                        colorBorder: theme === Theme.DARK ? "#fff" : "#000"
                    }
                }}
            >
                <Modal
                    footer={(
                        <>
                            <Button onClick={() => setIsModalLinkOpen(false)}>Отмена</Button>
                            <Button onClick={() => {
                                dispatch(addVideo(null))
                                dispatch(addLink(link))
                                setIsModalLinkOpen(false)
                            }} type="primary">Отправить</Button>
                        </>
                    )}
                    cancelText="Отмена" title="Загрузка ссылки"
                    open={isModalLinkOpen}
                    onOk={() => setIsModalLinkOpen(false)}
                    onCancel={() => setIsModalLinkOpen(false)}>
                    <Form
                        labelCol={{span: 5}}
                        wrapperCol={{span: 20}}
                        className={cls.form}>
                        <Form.Item
                            label="Ссылка"
                            name="link"
                            rules={[{required: true, message: 'Введите ссылку!'}]}
                        >
                            <Input value={link}
                                   onChange={(e) => {
                                       setLink(e.target.value)
                                   }}
                                   className={cls.input} placeholder="rtsp://"/>
                        </Form.Item>
                        {/*<Form.Item*/}
                        {/*    label="Логин"*/}
                        {/*    name="login"*/}
                        {/*    rules={[{required: false}]}*/}
                        {/*>*/}
                        {/*    <Input className={cls.input}/>*/}
                        {/*</Form.Item>*/}
                        {/*<Form.Item*/}
                        {/*    label="Пароль"*/}
                        {/*    name="password"*/}
                        {/*    rules={[{required: false}]}*/}
                        {/*>*/}
                        {/*    <Input className={cls.input}/>*/}
                        {/*</Form.Item>*/}
                    </Form>
                </Modal>

                <Modal
                    footer={(
                        <>
                            <Button onClick={() => setIsModalFileOpen(false)}>Отмена</Button>
                            <Button onClick={() => {
                                if (file) {
                                    handleFileUpload()
                                    setIsModalFileOpen(false)
                                }
                            }} type="primary">Отправить</Button>
                        </>
                    )}
                    cancelText="Отмена" title="Загрузка видео"
                    open={isModalFileOpen}
                    onOk={() => setIsModalFileOpen(false)}
                    onCancel={() => setIsModalFileOpen(false)}>
                    <Form>
                        <Form.Item>
                            <Upload.Dragger
                                maxCount={1}
                                onChange={(e) => {
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-expect-error
                                    setFile(e.file.originFileObj)
                                }}
                            >
                                <UploadOutlined style={{fontSize: 62}}/>
                                <p>Загрузите файл</p>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form>
                </Modal>
            </ConfigProvider>


            <Button onClick={toggleTheme}>
                toggle theme
            </Button>
            <Typography.Paragraph className={cls.paragraph}>
                Переключиться на
                <button onClick={() => setIsModalFileOpen(true)} className={cls.buttonFile}>
                    Выбрать файл
                </button>
                <button onClick={() => setIsModalLinkOpen(true)} className={cls.buttonLink}>
                    Загрузить ссылку
                </button>
            </Typography.Paragraph>
        </AntHeader>
    )
        ;
};


import cls from "./MainPage.module.scss"
import {Spin, Typography} from "antd";
import {Video, WarnList} from "@/components";
import {useGetDangerByIdQuery} from "@/store/services/dangerApi.ts";
import {useEffect, useState} from "react";
import {useAppSelector} from "@/store";

export const MainPage = () => {
    const {data, isSuccess} = useGetDangerByIdQuery(1)
    const [items, setItems] = useState([])
    useEffect(() => {
        if (isSuccess) {
            const array = []
            const obj = {
                danger_count: null,
                danger_level: null,
                time: null,
                img: null
            }// eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            data.dangers.forEach(item => {
                obj.time = item.time
                obj.danger_count = item.danger_count
                obj.danger_level = item.danger_level

            })
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            obj.img = data.shots[0].shot
            array.push(obj)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setItems(array)
        }
    }, [data]);

    const link = useAppSelector(state => state.link.link)
    const video = useAppSelector(state => state.video.video)

    return (
        <div className={cls.wrapper}>
            <div className={cls.firstLine}>
                <div className={cls.main}>
                    <div className={cls.camera}>
                        <Typography.Title className={cls.title}>
                            Главная
                        </Typography.Title>
                        <div className={cls.cameraItem}>
                            {video
                                ?
                                <Video link={video}/>
                                :
                                link
                                    ?
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-expect-error
                                    <Video link={link}/>
                                    : <></>
                            }
                        </div>
                        <div>
                            {/*// eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error*/}
                            <Typography.Title className={cls.title}>{data?.title}</Typography.Title>
                            <Typography.Paragraph>
                                {/*// eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-expect-error*/}
                                {data?.description}
                            </Typography.Paragraph>
                        </div>
                    </div>
                    <div className={cls.warn}>
                        <Typography.Title className={cls.title}>
                            <span></span> Угрозы
                        </Typography.Title>
                        <span></span>
                        <div>
                            <WarnList items={items}/>
                        </div>
                    </div>
                </div>
                {/*<div className={cls.someWarn}>*/}
                {/*    <Typography.Title className={cls.subTitle}>*/}
                {/*        Отображение угрозы*/}
                {/*    </Typography.Title>*/}
                {/*    <div>*/}

                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};


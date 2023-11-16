import {useParams} from "react-router-dom";
import cls from "./DangerPage.module.scss";
import {Typography} from "antd";
import {WarnList} from "@/components";

export const DangerPage = () => {
    const {id} = useParams()
    return (
        <div className={cls.wrapper}>
            <div className={cls.firstLine}>
                <div className={cls.main}>
                    <div className={cls.camera}>
                        <Typography.Title className={cls.title}>
                            <span></span>
                            Угроза № {id}
                        </Typography.Title>
                        <div className={cls.cameraItem}>
                            124
                        </div>
                        <div>
                            <Typography.Title className={cls.title}>
                                Описание угрозы
                            </Typography.Title>
                        </div>
                    </div>
                    <div className={cls.warn}>
                        <Typography.Title className={cls.title}>
                            <span></span> Статус
                        </Typography.Title>
                        <span></span>

                    </div>
                </div>

            </div>
        </div>
    );
};


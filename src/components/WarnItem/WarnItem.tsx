import cls from "./WarnItem.module.scss"
import * as dayjs from "dayjs"
import {Progress, Typography} from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const WarnItem = ({id, danger_count, danger_level, time, img}) => {
    const navigate = useNavigate()
    return (
        <li onClick={() => navigate(`/danger/${danger_count}`)} className={cls.wrapper}>
            <div>
                <p className={cls.paragraph}>Угроза {danger_count}</p>
                <p className={cls.paragraph}>{dayjs(time).format("HH:MM")}</p>
            </div>
            <p className={cls.paragraph}>
                Участники: идентифицированы
            </p>
            <div className={cls.progress}>
                <p className={cls.paragraph}>
                    Категория угрозы: {danger_level}
                </p>
                <Progress percent={danger_level * 20} showInfo={false}/>
            </div>
        </li>
    );
};


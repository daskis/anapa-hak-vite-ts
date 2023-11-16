import cls from "./AllDangers.module.scss"
import {useGetAllDangersQuery} from "@/store/services/dangerApi.ts";
import {Table, Typography} from "antd";
import * as dayjs from "dayjs"

export const AllDangers = () => {
    const {data} = useGetAllDangersQuery(null)
    const columns = [
        {
            title: '№',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Адрес',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'Реакция',
            dataIndex: 'reaction',
            key: 'reaction',
            render: (text: string) => {
                return (
                    <Typography.Paragraph>
                        {text === "In developing..." ? "В процессе" : "Отреагировано"}
                    </Typography.Paragraph>
                )
            }
        }, {
            title: 'Дата&Время',
            dataIndex: 'date',
            key: 'date',
            render: (date: string) => {
                return (
                    <Typography.Paragraph>
                        {dayjs(date).format("DD-MM-YYYY")} {dayjs(date).format("hh:mm:ss")}
                    </Typography.Paragraph>
                )
            }

        }, {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            render: (status: never) => {
                return (
                    <Typography.Paragraph>
                        {status == 1 ? "подтверждено" : "не подтверждена"}
                    </Typography.Paragraph>
                )
            }
        },
    ]

    if (data) {
        return (
            <div className={cls.wrapper}>
                <Typography.Title className={cls.title}>
                    History & arhif center
                </Typography.Title>
                <div className={cls.info}>
                    <div>
                        <Typography.Title>
                            4 540.088
                        </Typography.Title>
                        <Typography.Paragraph>
                            Найдено угроз
                        </Typography.Paragraph>
                    </div>
                    <div>
                        <Typography.Title>
                            2.3M
                        </Typography.Title>
                        <Typography.Paragraph>
                            Подтверждены
                        </Typography.Paragraph>
                    </div>
                    <div>
                        <Typography.Title>
                            2.2M
                        </Typography.Title>
                        <Typography.Paragraph>
                            Ложные
                        </Typography.Paragraph>
                    </div>
                    <div>
                        <Typography.Title>
                            98%
                        </Typography.Title>
                        <Typography.Paragraph>
                            Точность
                        </Typography.Paragraph>
                    </div>
                </div>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/*@ts-expect-error*/}
                <Table columns={columns} dataSource={data}/>
            </div>
        );
    }
};


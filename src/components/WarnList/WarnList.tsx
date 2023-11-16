import {useGetDangerByIdQuery} from "@/store/services/dangerApi.ts";
import {useEffect, useState} from "react";
import {WarnItem} from "../WarnItem/WarnItem.tsx";

export const WarnList = (
    {
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
        items
    }
) => {

    return (
        <ul>
            {/*// eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error*/}
            {items.map((item) => (
                <WarnItem key={item.danger_count} {...item}/>
            ))}
        </ul>
    );
};


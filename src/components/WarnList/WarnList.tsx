import {useGetDangerByIdQuery} from "@/store/services/dangerApi.ts";
import {useEffect, useState} from "react";
import {WarnItem} from "../WarnItem/WarnItem.tsx";

export const WarnList = (
    {
        items
    }
) => {

    return (
        <ul>
            {items.map((item, i) => (
                <WarnItem key={item.danger_count} {...item}/>
            ))}
        </ul>
    );
};


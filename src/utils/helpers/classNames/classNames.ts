type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods : Mods, additional: string[]) : string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(" ");
}
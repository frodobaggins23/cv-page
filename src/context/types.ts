export type AppState = {
    loading: boolean,
    data: ApiData
}

export type Intro = {
    name: string,
    intro:string,
    introLong:string,
}

export type Work = {
    title: string,
    employer:string,
    dateFrom: string,
    dateTo: string,
    description:string,
    workType:string,
}
export type Vision = {
    visionTitle:string,
    visionClaim:string,
    visionText:string
}

export type Icons= {
    iconText: string,
    iconType: string,
    iconUrl:string,
    iconAlt: string,
}

export type OtherCopy = {
    otherText: string,
    otherValue1: string,
    otherValue2: string,
    otherValue3:string,
}

export type ApiData = {
    intro: Array<Intro>,
    work: Array<Work>,
    vision: Array<Vision>,
    icons: Array<Icons>,
    other: Array<OtherCopy>,
}

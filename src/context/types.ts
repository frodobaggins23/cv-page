export type AppState = {
    loading: boolean,
    data: ApiData
}

type Intro = {
    name: string,
    intro:string,
    introLong:string,
}

type Work = {
    title: string,
    employer:string,
    dateFrom: string,
    dateTo: string,
    description:string,
    workType:string,
}
type Vision = {
    visionTitle:string,
    visionClaim:string,
    visionText:string
}

type Icons= {
    iconText: string,
    iconSrc: string,
    iconUrl:string,
    iconAlt: string,
}

type OtherCopy = {
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

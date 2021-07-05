export type Copy = Record<string, string | number | Array <string>>

export enum WORK_TYPE {
    CODING='Coding Experience',
    MARKETING= 'Marketing Experience'
}

export type WorkPosition = Record<string, string | number > & {workType:WORK_TYPE}

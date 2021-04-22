export interface TableConfiguration {
    displayedColumns: string[],
    columnsDetail: ColumnsDetailInterface[]
}

export interface ColumnsDetailInterface {
    columnHeader: string,
    sourceProperty: string,
    valueType: string
}
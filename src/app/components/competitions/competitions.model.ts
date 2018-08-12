export interface CompetitionsModel{
    count: number,
    filters: any,
    competitions: [
        {
            id: number,
            area: {
                id: number,
                name: string
            },
            name: any,
            code: any,
            plan: string,
            currentSeason: {
                id: number,
                startDate: any,
                endDate: any,
                currentMatchday: any
            },
            numberOfAvailableSeasons: number,
            lastUpdated: any
        }
    ]
}

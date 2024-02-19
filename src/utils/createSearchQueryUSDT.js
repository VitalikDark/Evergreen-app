export const createSearchQueryUSDT = (data) => {
    const { limit, offset } = data
    if (data?.search) {
        console.log(data)
        const { search } = data

        const { start, end, sort, order, period, id_api, s181, freq } = search

        let startSearch = start ? `grossextdebt?start=${start}&json` : ''
        let endSearch = end ? `grossextdebt?end=${end}&json` : ''
        let sortSearch = sort ? `monetary?order=${sort}&json` : ''
        let orderSearch = order ? `monetary?sort=${sort}&json` : ''
        let periodSearch = period ? `inflation?period=m&date=${period}&json` : ''
        let idApiSearch = id_api ? `grossextdebt?id_api=${id_api}&json` : ''
        let s181Search = s181 ? `grossextdebt?s181=${s181}&json` : ''
        let freqSearch = freq ? `grossextdebtfreq=${freq}&json` : ''

        return `${startSearch}${endSearch}${sortSearch}${orderSearch}${periodSearch}${idApiSearch}${s181Search}${freqSearch}&limit=${limit}&offset=${offset}`
    }
    return `monetary?json&limit=10&offset=0`
}


export default defineEventHandler(async (event) => {
    //handle query params
    // const { name } = useQuery(event)
    // const {name} = getQuery(event)

    // //handle post data
    // const { age } = await readBody(event)

    //api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=gmu8HPqFWfbF6V0Rhmu0YcCV5pgO3Q4EEccc7goY')

    return data
})
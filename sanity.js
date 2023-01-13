import sanityClient from "@sanity/client"
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"

const client = sanityClient({
    projectId:"",
    dataset:"production",
    useCdn:true,
    apiVersion:""
})
const builder  =ImageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client
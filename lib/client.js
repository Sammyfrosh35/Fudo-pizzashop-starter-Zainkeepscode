import  SanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";
export const client = SanityClient({
    projectId: "fmitb7g9",
    dataset: 'production',
    apiVersion: "2024-01-25",
    useCdn: true,
    token:
    "skXpkv1BJCmEPQdGq4ChRovZp8zy7aZ9N7c7zmKNJWSfiUOmOjZw2BMormOzRL30OyEUJ10VRxoBfPWgEWE1lBpfoNHYSkhQk3hX49F6BxI3TpAD4ClDAvKUR7QbR249gqkYfAON3trMU5YNz6lZy7wH1U0G7B8hGSX2OXFFJ6cVmqg2zcBw"
}); export default client

// const client = new SanityClient({ projectld:"fmitb7g9", dataset:"production", apiVersion: "2024-01-25", useCdn: true,   }); 


const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
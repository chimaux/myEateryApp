import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
{
  name:"name",
  type:"string",
  title:"Restaurant name",
  validation:(Rule)=>Rule.required(),
},
{
  name:"short_description",
  type:"string",
  title:"short description",
  validation:(Rule)=>Rule.required(),
},
{
  name:"image",
  type:"image",
  title:"Image of the restaurant",
  validation:(Rule)=>Rule.required(),
},
{
  name:"lat",
  type:"number",
  title:"Longitude of the restaurant",
  validation:(Rule)=>Rule.required(),
},
{
  name:"address",
  type:"string",
  title:"Restaurant address",
  validation:(Rule)=>Rule.required(),
},
{
  name:"rating",
  type:"number",
  title:"Enter a Rating from (1-5 Stars)",
  validation:(Rule)=>
  Rule.required()
  .min(1)
  .max(5)
  .error("Please enter a value between 1 and 5"),
},
{
  name:"type",
  title:"Category",
  validation:(Rule)=>Rule.required(),
  type:"reference",
  to:[{type:"category"}],

},
{
  name:"dishes",
  type:"array",
  title:"Dishes",
  of:[{type:"reference",to:[{type:"dish"}]}]
},
  ],

})

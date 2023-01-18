import {defineField, defineType } from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Category name',
  type: 'document',
  fields: [
    defineField(
      {
        name:"name",
        type:"string",
        title:"Featured Category name",
        validation:(Rule)=>Rule.required(),

      }),
  defineField(
    {
      name:"short_description",
      type:"string",
      title:"short description",
      validation:(Rule)=>Rule.required(),

     
    }
  ),
 defineField(
  {
    name:"restaurant",
    type:"array",
    title:"Restaurants",
    of:[
      
      {type:"reference", to:[{type:"restaurant"}]}
    ],
  })


  ],

})

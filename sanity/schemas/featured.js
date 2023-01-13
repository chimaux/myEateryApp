import {defineField, defineType } from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Category name',
  type: 'document',
  fields: [
    defineField(
      {
        name:"name",
        type:"array",
        title:"Featured Category name",
        validation:(Rule)=>Rule.required(),
        of:[
      
          {type:"reference", to:[{type:"restaurant"}]}
        ],
 
      }),
  defineField(
    {
      name:"short_description",
      type:"array",
      title:"short description",
      validation:(Rule)=>Rule.required(),
      of:[
      
        {type:"reference", to:[{type:"restaurant"}]}
      ],
     
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

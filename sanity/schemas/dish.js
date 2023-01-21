import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Dish',
  name: 'dish',
  type: 'document',
  fields: [
    {
      title:"Dish",
      name:"dish",
      type: "string",
      validation:(Rule)=>Rule.required(),
     
    },
    {
      title:"Description",
      name:"short_description",
      type: "string",
      validation:(Rule)=>Rule.required(),
     
    },
    {
      title:"Price",
      name:"price",
      type: "string",
      validation:(Rule)=>Rule.required(),
     
    },
    {
      title:"Image",
      name:"image",
      type: "image",
      validation:(Rule)=>Rule.required(),
     
    }
  ]
}) 







// import {defineField, defineType,defineArrayMember} from 'sanity'

// export default defineType({
//   name: 'dish',
//   title: 'Dish',
//   type: 'document',
//   fields: [
//     {
//       name:"dish",
//       type:"document",
//       title:"Dish",
//       validation:(Rule)=>Rule.required(),
//     },
//     ]

// })

import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Dish',
  name: 'dish',
  type: 'document',
  fields: [
    defineField({
      title:"Dish",
      name:"dish",
      type: "array",
      validation:(Rule)=>Rule.required(),
        of:[
      
          {type:"reference", to:[{type:"dish"}]}
        ],
    })
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

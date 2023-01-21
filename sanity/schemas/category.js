import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Category name',
      
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of Category', 
      
    }),
  ],
})

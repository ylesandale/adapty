import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Adapty Blog',

  projectId: 'c3kk9rei',
  dataset: 'production',

  basePath: '/studio',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})

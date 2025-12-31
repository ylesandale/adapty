import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'c3kk9rei',
    dataset: 'production',
  },
  // Tip: You can use an environment variable for studioHost if you want to deploy separate Studios for production, staging, testing etc.
  studioHost: 'ylesandale-adapty',
})

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6158ac0719ab3e9eb1fde6a1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xyehgxgp',
                  apiId: 'e576326b-9fa1-4296-ad2b-c2b4e83a1585'
                },
                {
                  buildHookId: '6158ac0703141594cce80bac',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-331qytge',
                  apiId: '12cfa1dd-ef41-4746-898c-2946b304bac5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paleite/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-331qytge.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

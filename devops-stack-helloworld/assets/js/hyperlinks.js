const lists = [
  {
    heading: 'Applications',
    links: [
      {
        title: 'Argo CD',
        url: 'https://argocd.apps.<cluster_name>.<cluster_domain>/',
      },
//      {
//        title: 'Traefik Dashboard',
//        url: 'https://traefik.apps.gh-v1test.is-sandbox.camptocamp.com/',
//      },
      {
        title: 'Grafana',
        url: 'https://grafana.apps.<cluster_name>.<cluster_domain>/',
      },
      {
        title: 'Prometheus',
        url: 'https://prometheus.apps.<cluster_name>.<cluster_domain>/',
      },
      {
        title: 'Alertmanager',
        url: 'https://alertmanager.apps.<cluster_name>.<cluster_domain>/',
      },
    ],
  },
  {
    heading: 'DevOps Stack',
    links: [
      {
        title: 'About',
        url: 'https://devops-stack.io/',
      },
      {
        title: 'Documentation',
        url: 'https://devops-stack.io/docs/latest/',
      },
      {
        title: 'Repository',
        url: 'https://github.com/camptocamp/devops-stack',
      },
    ],
  },
  {
    heading: 'Our Company',
    links: [
      {
        title: 'Camptocamp',
        url: 'https://www.camptocamp.com/',
      },
    ],
  },
]

function renderLists() {
  const linksWrapper = document.querySelector('#links')

  lists.forEach(list => {
      const linksTemplate = list.links.map(link => {
          return `
      <li class="links__item">
        <a class="links__link" href="${link.url}">${link.title}</a>
      </li>
    `
      })

      const template = `
    <ul class="links">
      <li class="links__item">
        <span class="links__heading">${list.heading}</span>
      </li>
      ${linksTemplate.join('')}
    </ul>
  `

      linksWrapper.insertAdjacentHTML('beforeend', template)
  })
}

renderLists()

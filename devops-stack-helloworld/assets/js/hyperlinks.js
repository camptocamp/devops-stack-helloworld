// This file is not used as it is overloaded during deployment. 
// We do this because there are dynamic hyperlinks that are parsed by Helm.
// Below you can see an example of how to configure the hyperlinks.

// Link definitions
const lists = [
  {
    heading: 'Group_1',
    links: [
      {
        title: 'Hyperlink_1',
        url: 'https://www.hyperlink-1.com/',
      },
      {
        title: 'Hyperlink_2',
        url: 'https://www.hyperlink-2.com/',
      },
      {
        title: 'Hyperlink_3',
        url: 'https://www.hyperlink-3.com/',
      },
    ],
  },
  {
    heading: 'Group_2',
    links: [
      {
        title: 'Hyperlink_1',
        url: 'https://www.hyperlink-1.com/',
      },
    ],
  },
]
// End of link definitions

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

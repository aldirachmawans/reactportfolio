import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/coder.png'
import IMG2 from '../../assets/ecommerce.png'
import IMG3 from '../../assets/portofolio.png'
import IMG4 from '../../assets/react1.png'

const data = [
  {
  id: 1,
  image: IMG1,
  title: 'Coder',
  github: 'https://github.com/aldirachmawans/Coder',
  demo: 'https://aldirachmawans.github.io/Coder/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'E-Commerce',
    github: 'https://github.com/aldirachmawans/examplelaravel9',
    demo: 'https://github.com/aldirachmawans/examplelaravel9'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio',
    github: 'https://github.com/aldirachmawans/PortofolioUpdateMar',
    demo: 'https://aldirachmawans.github.io/PortofolioUpdateMar/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Movies Front End',
    github: 'https://github.com/aldirachmawans/reactmovie',
    demo: 'https://arsfilm.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
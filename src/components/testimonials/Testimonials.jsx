import React from 'react'
import './testimonials.css'
import PP1 from '../../assets/blackp.jpeg'
import PP2 from '../../assets/camerica.jpeg'
import PP3 from '../../assets/groot.jpeg'
import PP4 from '../../assets/rocket.png'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: PP1,
    name: 'Andika',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia modi placeat repellendus non, quis nemo. Odio eveniet quaerat saepe esse perspiciatis labore, possimus nisi aliquid vel repellat id excepturi!',
  },
  {
    avatar: PP2,
    name: 'Nabil Fauzansyah',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, reiciendis et nostrum molestiae error sapiente. Cumque nesciunt consequuntur, est unde impedit ab officiis neque eos quod. Explicabo, assumenda.',
  },
  {
    avatar: PP3,
    name: 'Ravi Api',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis sequi, aut sapiente, quidem deleniti molestias voluptatum cupiditate magni aspernatur dolorem, quae aperiam beatae animi laboriosam vitae consequatur sed quasi eos?',
  },
  {
    avatar: PP4,
    name: 'Alfian Nur Ardiansyah',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit totam non fugiat eos iusto aspernatur velit quod consectetur aliquam provident doloribus rerum, consequatur perferendis fuga. Tempore delectus blanditiis quasi maxime totam.',
  },
  

]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review, index}) => {
            return (
              <SwiperSlide key={ index } className="testimonial">
                <div className="client__avatar">
                  <img src={ avatar } />
                </div>
                <h5 className='client__name'>{ name }</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
import dog1 from '../images/dog1.jpg'
import dog2 from '../images/dog2.jpg'
import dog3 from '../images/dog3.jpg'
import dog4 from '../images/dog4.jpg'
import cat1 from '../images/cat1.jpg'
import cat2 from '../images/cat2.jpg'
import cat3 from '../images/cat3.jpg'
import cat4 from '../images/cat4.jpg'
import bird1 from '../images/bird1.jpg'
import bird2 from '../images/bird2.jpg'
import bird3 from '../images/bird3.jpg'
import bird4 from '../images/bird4.jpg'
import fish1 from '../images/fish1.jpg'
import fish2 from '../images/fish2.jpg'
import fish3 from '../images/fish3.jpg'
import fish4 from '../images/fish4.jpg'


const list = [
     {
          name: 'buddy',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: dog1
     },
     {
          name: 'ROCKY',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: dog2
     },
     {
          name: 'ROCKY',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: dog3
     },
     {
          name: 'ZEUS',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: dog4
     },
     {
          name: 'Smokey',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: cat1
     },
     {
          name: 'Sassy',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: cat2
     },
     {
          name: 'Patch',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: cat3
     },
     {
          name: 'Kitty',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: cat4
     },
     {
          name: 'Zippy',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: bird1
     },
     {
          name: 'Bubba',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: bird2
     },
     {
          name: 'Scruffy',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: bird3
     },
     {
          name: 'Baldy',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: bird4
     },
     {
          name: 'ACIPEN',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: fish1
     },
     {
          name: 'OSTEOG',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: fish2
     },
     {
          name: 'teera',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: fish3
     },
     {
          name: 'CLARIIDAE',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, laboriosam quis ullam quaerat nulla accusamus.',
          img: fish4
     },
]

let animals = []
for (let i = 0; i < list.length * 4; i++) {
     animals.push(list[Math.floor(Math.random() * list.length)])
}


export default animals
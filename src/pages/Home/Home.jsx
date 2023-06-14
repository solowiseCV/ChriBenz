import React from 'react'
import "./Home.scss"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ProjectCard from '../../components/projectCard/ProjectCard'
import { projects } from '../../data'
import Slide from '../../components/slide/Slide'
import Product from '../Product/Product'

const Home = () => {
  return (
    <div className='home'>
       
      <img className='homeImg' src="https://group.mercedes-benz.com/bilder/unternehmen/news/dayone-visual-2500px-w1366xh768-cutout.jpg" alt="" />
        {/* the row of two products */}
       <div className="productRow">
        <Product
         id="1234"
         title="Shock Absorber"
         image="https://media.istockphoto.com/id/1284268887/photo/pair-of-car-shock-absorbers-with-springs-suspension-components.jpg?s=1024x1024&w=is&k=20&c=ztCXZxAWwZQ4HkWtY_BdL4_dlBjoa2wWoiVMsLcbYLA="
         price={55000}
         rating={4}
        />
        <Product
         id="1235"
         title="Shock Absorber"
         image="https://media.istockphoto.com/id/1284268887/photo/pair-of-car-shock-absorbers-with-springs-suspension-components.jpg?s=1024x1024&w=is&k=20&c=ztCXZxAWwZQ4HkWtY_BdL4_dlBjoa2wWoiVMsLcbYLA="
         price={5000}
         rating={5}
        />
       </div>

       {/* the row of three products */}
       <div className="productRow">
        <Product
         id="1236"
         title="Shock Absorber"
         image="https://media.istockphoto.com/id/1284268887/photo/pair-of-car-shock-absorbers-with-springs-suspension-components.jpg?s=1024x1024&w=is&k=20&c=ztCXZxAWwZQ4HkWtY_BdL4_dlBjoa2wWoiVMsLcbYLA="
         price={55000}
         rating={4}
        />
        <Product
         id="1237"
         title="Shock Absorber"
         image="https://media.istockphoto.com/id/1284268887/photo/pair-of-car-shock-absorbers-with-springs-suspension-components.jpg?s=1024x1024&w=is&k=20&c=ztCXZxAWwZQ4HkWtY_BdL4_dlBjoa2wWoiVMsLcbYLA="
         price={55000}
         rating={4}
        />
        <Product
         id="1238"
         title="Shock Absorber"
         image="https://media.istockphoto.com/id/1284268887/photo/pair-of-car-shock-absorbers-with-springs-suspension-components.jpg?s=1024x1024&w=is&k=20&c=ztCXZxAWwZQ4HkWtY_BdL4_dlBjoa2wWoiVMsLcbYLA="
         price={5000}
         rating={5}
        />
       </div>
        
        {/*row of 4 */}
       <div className="productRow">
        <Product
         id="1239"
         title="Shock Absorber"
         image="https://media.istockphoto.com/id/1284268887/photo/pair-of-car-shock-absorbers-with-springs-suspension-components.jpg?s=1024x1024&w=is&k=20&c=ztCXZxAWwZQ4HkWtY_BdL4_dlBjoa2wWoiVMsLcbYLA="
         price={55000}
         rating={4}
        />
        <Product
         id="123"
         title="Shock Absorber"
         image="https://media.istockphoto.com/id/1284268887/photo/pair-of-car-shock-absorbers-with-springs-suspension-components.jpg?s=1024x1024&w=is&k=20&c=ztCXZxAWwZQ4HkWtY_BdL4_dlBjoa2wWoiVMsLcbYLA="
         price={55000}
         rating={4}
        />
        <Product
         id="12364"
         title="Shock Absorber"
         image="https://media.istockphoto.com/id/1284268887/photo/pair-of-car-shock-absorbers-with-springs-suspension-components.jpg?s=1024x1024&w=is&k=20&c=ztCXZxAWwZQ4HkWtY_BdL4_dlBjoa2wWoiVMsLcbYLA="
         price={55000}
         rating={4}
        />
        <Product
       
         id="1244"
       
         title="Shock Absorber"
         image="https://media.istockphoto.com/id/1284268887/photo/pair-of-car-shock-absorbers-with-springs-suspension-components.jpg?s=1024x1024&w=is&k=20&c=ztCXZxAWwZQ4HkWtY_BdL4_dlBjoa2wWoiVMsLcbYLA="
         price={5000}
         rating={5}
        />
       </div>
       {/* the row of two products */}
       <div className="productRow">
        <Product
          id="1294"
         title="Shock Absorber"
         image="https://media.istockphoto.com/id/1284268887/photo/pair-of-car-shock-absorbers-with-springs-suspension-components.jpg?s=1024x1024&w=is&k=20&c=ztCXZxAWwZQ4HkWtY_BdL4_dlBjoa2wWoiVMsLcbYLA="
         price={55000}
         rating={4}
        />
        
       </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  )
}

export default Home

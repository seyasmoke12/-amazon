import React from 'react'
import "./Home.css"
import HoImg from "./Haimag/10001.jpg"
import Product from './Product'
import Air from "./Haimag/air.png"
import {Link} from "react-router-dom"
function Home() {
return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src={HoImg}/>
        <div className='home_row'>
          <Product
          id="324763476"
          title="Apple's new AirPods Pro"
          image={Air}
          price={15}
          rating={3}
          />
          <Product
          title='IPhone 15 Pro Max '
          id='3433'
          image="https://th.bing.com/th/id/OIP.NTlFYDr_3hGp7xmsHnlNQQHaHa?rs=1&pid=ImgDetMain"
          price={999}
          rating={5}
          />
        </div>
        <div className='home_row'>
          <Product
          id="344"
          title="Best 43-inch smart TVs 2022: Our pick of the top 4K TVs"
          image="https://th.bing.com/th/id/R.f77241747ababaca59e0a053afca06d8?rik=y5cc6lOpu7%2bEuQ&riu=http%3a%2f%2fg-ecx.images-amazon.com%2fimages%2fG%2f01%2fSAMF9%2fTV%2f2012%2fAPLUS_Content%2fES6100_SmartTV._V148036898_.jpg&ehk=1dQhFeEZe8dzS2MXOwCpBQhO5ojI2BKp2cNGRFaFqyk%3d&risl=&pid=ImgRaw&r=0"
          price={80.96}
          rating={3}
          />
          <Product
          id="566"
          title="Nike Adapt BB 2.0 Unveiled by NBA Rookie Ja Morant"
          image="https://iconicmen.com.my/wp-content/uploads/2020/03/nike20a.jpg"
          price={50}
          rating={5}
          />
          <Product
          id="56554"
          title=" Small Washing Machine"
          image="https://th.bing.com/th/id/R.4c23c6ff2428d0c3946bfe25ee9ccbdc?rik=Zo05W85fqiuviw&riu=http%3a%2f%2fyaruiyida.oss-cn-shanghai.aliyuncs.com%2fCImages%2f20160731%2fEP22019%2fEP22019c.jpg&ehk=0hPT9UHHEkzpcztIs4fALX8%2b1zfjNYc6YwdTxKuXUqI%3d&risl=&pid=ImgRaw&r=0"
          price={11.96}
          rating={4}
          />
        </div>
        <div className='home_row' id='lower'>
          <Product
          image='https://th.bing.com/th/id/OIP._5rGkuOqdaIlY0FHqYVeTwAAAA?rs=1&pid=ImgDetMain'
          price={120}
          rating={4}
          title='Samsung Smart tv'
          />
          
        </div>
        <div className='home_row'>
          <Product
          id="344"
          title="Alpha 280 Refrigerator "
          image="https://th.bing.com/th/id/R.0b2a735b292fecd01ebd4a3082b0ae19?rik=GXw5Pg%2bGt20HFg&riu=http%3a%2f%2fc.shld.net%2frpx%2fi%2fs%2fi%2fspin%2fimage%2fspin_prod_1139794512&ehk=qSxBCFXETRRwMkTmHdGo85VmkGmkp9Cvut7IlR%2bjAS8%3d&risl=&pid=ImgRaw&r=0"
          price={70}
          rating={4}
          />
          <Product
          id="566"
          title="Apple MacBook Pro Retina Core i5-4308U Dual-Core 2.8GHz 8GB 512GB SSD 13.3"
          image="https://s.ecrater.com/stores/329123/5a5ff6f0644af_329123b.jpg"
          price={200}
          rating={5}
          />
          <Product
          id="56554"
          title=" Nurxiovo 3 in 1 Kitchen Stand Mixer, 850W Multifunctional Food"
          image="https://th.bing.com/th/id/OIP.AdldlbIZvmp4LiZPmJCaqgAAAA?rs=1&pid=ImgDetMain"
          price={40}
          rating={2}
          />
        </div>
        <div className='home_row' id='lower'>
          <Product
          title='PlayStation reportedly launching a Game Pass rival in 2022'
          image="https://www.ungeek.ph/wp-content/uploads/2021/12/playstation_new_subscription_service_spartacus.jpg"
          rating={5}
          price={500}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
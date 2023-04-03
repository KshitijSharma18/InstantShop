import React from "react";
import "./Home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://m.media-amazon.com/images/I/61Ly9zlsGxL._SX1500_.jpg"
          alt=""
          className="home_image"
        />

        <div className="home_row">
          <Product
            id="1"
            title="Gucci Black Leather Medium Rajah Flap Shoulder Bag"
            price={29.99}
            rating={4}
            img="https://myluxurybargain.com/wp-content/uploads/2021/10/My-Luxury-BargainGucci-Black-Leather-Medium-Rajah-Flap-Shoulder-Bag-1.jpg"
          />
          <Product
            id="2"
            title="iPhone 14 Pro"
            price={99.99}
            rating={5}
            img="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660753617539"
          />
        </div>

        <div className="home_row">
          <Product
            id="3"
            title="iPad 10th generation"
            price={49.99}
            rating={3}
            img="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-10th-gen-finish-unselect-gallery-1-202212_GEO_EMEA?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1668554661939"
          />
          <Product
            id="4"
            title="Canon EOS R6 Mark II"
            price={34.99}
            rating={2}
            img="https://in.canon/media/image/2022/11/01/6cb3de2b8918402c84c08b362ad44045_EOS+R6+Mark+II+RF24-105mm+f4L+IS+USM++front+slant.png"
          />
          <Product
            id="5"
            title="Acer Predator Helios 16 Gaming Laptop"
            price={199.99}
            rating={5}
            img="https://static-ecapac.acer.com/media/mf_webp/png/media/catalog/product/cache/a2e755bb2f5b00fa33d64eface9107e3/s/t/st_16_01_nh.qjssi.001.webp"
          />
        </div>

        <div className="home_row">
          <Product
            id="6"
            title="Logitech MK235 WIRELESS KEYBOARD AND MOUSE COMBO"
            price={29.99}
            rating={3}
            img="https://resource.logitech.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/combos/mk235/gallery/mk235-gallery-01-new.png?v=1"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

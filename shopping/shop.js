// 商品数据 mock
const products = [
  {
    title: '苹果',
    price: '10.99',
  },
  {
    title: '香蕉',
    price: '20.99',
  },
  {
    title: '菠萝-详细描述详细描述详细描述详细描述详细描述详细描述',
    price: '30.99',
  },
  {
    title: '菠萝-详细描述详细描述详细描述详细描述详细描述详细描述',
    price: '30.99',
  },
  {
    title: '菠萝-详细描述详细描述详细描述详细描述详细描述详细描述',
    price: '30.99',
  },
]
// 购物车数据
let carData = [];


// 生成 main 区域 html
function generateMainHTML() {
  let html = '';
  for (product of products) {
    html += `
    <div class="item">
      <div class="img-wrap"></div>
      <div class="text-wrap">
        <h3>${product.title}</h3>
        <div class="right-btn">
          <span class="price">${product.price}</span>
          <button>加入购物车</button>
        </div>
      </div>
    </div>
    `
  }

  document.querySelector('.container').innerHTML = html;
}
generateMainHTML();


// 绑定购物车按钮事件
function bindCarBtnEvent() {
  document.querySelector('.car button').onmouseover = function () {
    if (!carData.length) {
      alert('请先添加商品');
    }
    document.querySelector('header .shop-car').style.display = 'block'
  }
  document.querySelector('.car button').onmouseleave = function () {
    // document.querySelector('header .shop-car').style.display = 'none'
  }
}
bindCarBtnEvent();


// 绑定加入购物车按钮事件
function bindShopBtnEvent() {
  const btns = document.querySelectorAll('.container .item button');
  for (btn of btns) {
    btn.onclick = function (e) {
      const price = e.target.parentNode.childNodes[1].innerHTML;
      const value = products.find(product => product.price == price);
      const productInCarData = carData?.find(product => product.price == price);
      if (!productInCarData) {
        carData.push({
          title: value.title,
          price: value.price,
          count: 1,
          showPrice: `1 * ${value.price}`,
        })
      } else {
        carData = carData.map(item => {
          if (item.price == price) {
            item.showPrice = `${item.count + 1} * ${item.price}`;
            item.count += 1;
          }
          return item;
        })
      }
      console.log(carData)
      setCarHTML();
    }
  }
}
bindShopBtnEvent();


// 设置购物车 html
function setCarHTML() {
  let html = '';
  for (item of carData) {
    html += `
    <li>
      <div>${item.title}</div>
      <div class="right-btn">
        <div class="price">${item.showPrice}</div>
        <button>删除</button>
      </div>
    </li>
    `
  }
  html += `
  <li class="buy-btn">
    <button>购买</button>
  </li>
  `
  document.querySelector('.shop-car ul').innerHTML = html;
  bindDeleteEvent();
}

// 绑定删除按钮事件
function bindDeleteEvent() {
  document.querySelector('.buy-btn').onclick = function () {
    let total = 0;
    carData.forEach(item => {
      total += item.count * item.price;
    })
    alert(`购买了 ${total} 的商品`);
  }

  const deleteBtns = document.querySelectorAll('.shop-car button');
  for (btn of deleteBtns) {
    btn.onclick = function (e) {
      const price = e.target.parentNode.childNodes[1].innerHTML;
      carData = carData.filter(item => item.showPrice !== price);
      setCarHTML()
    }
  }
}

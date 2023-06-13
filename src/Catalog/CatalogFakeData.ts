export  type CatalogDataType = {
    id: string,
    img: string
    title: string
    price: number
    filter: string
}

export type FilterType = 'Underwear' | 'BodyJewelry' | 'clothing' | 'Swimwear'| 'All'

export let catalogData: CatalogDataType[] = [

    {id:'13',  img:'https://lovelace.by/image/cachewebp/catalog/%D0%A2%D0%BE%D0%BA%D0%B8%D0%BE/%D0%A2%D0%BE%D0%BA%D0%B8%D0%BE%20%D0%B1%D0%B0%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9%20/%D1%82%D0%B0%D0%BD%D0%B3%D0%B0/lovelace.byTokiobalijskij4-456x685.webp',title:  'Трусы стринги "Гуд карма"',  price: 12, filter:'Underwear'},
    {id:'451',  img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg',title:  'Трусы стринги "Гуд карма"',price: 12, filter:'Underwear'},
    // {id:144,  img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg',title:  'Трусы стринги "Гуд карма"',  color: 'Цвет: Чёрно-белый',price: '12 byn', filter:'Underwear'},
    // {id:1,  img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg',title:  'Трусы стринги "Гуд карма"',  color: 'Цвет: Чёрно-белый',price: '12 byn', filter:'Underwear'},
    // {id:2, img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg', title:  'Чокер широкий с кольцом',  color: 'Цвет: Чёрно-белый',price: '13 byn', filter:'BodyJewelry'},
    // {id:234,  img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg',title:  'Стреп №1',  color: 'Цвет: Чёрно-белый',price: '75 byn', filter:'BodyJewelry'},
    // {id:3246, img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg', title:  'Стреп №2',  color: 'Цвет: Чёрно-белый',price: '40 byn', filter:'BodyJewelry'},
    // {id:3,  img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg',title:  'Трусы стринги "Гуд карма"',  color: 'Цвет: Чёрно-белый',price: '12 byn', filter:'clothing'},
    // {id:311,  img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg',title:  'Трусы стринги "Гуд карма"',  color: 'Цвет: Чёрно-белый',price: '12 byn', filter:'clothing'},
    // {id:34324, img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg', title:  'Трусы стринги "Гуд карма"',  color: 'Цвет: Чёрно-белый',price: '12 byn', filter:'clothing'},
    // {id:4, img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg', title:  'Трусы стринги "Гуд карма"',  color: 'Цвет: Чёрно-белый',price: '12 byn', filter:'Swimwear'},
    // {id:5, img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg', title:  'Трусы стринги "Гуд карма"',  color: 'Цвет: Чёрно-белый',price: '12 byn', filter:'Swimwear'},
    // {id:6, img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg', title:  'Трусы стринги "Гуд карма"',  color: 'Цвет: Чёрно-белый',price: '12 byn', filter:'clothing'},
    // {id:7, img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg', title:  'Трусы стринги "Гуд карма"',  color: 'Цвет: Чёрно-белый',price: '12 byn', filter:'Swimwear'},
    // {id:8, img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg', title:  'Стреп №3',  color: 'Цвет: Чёрно-белый',price: '80 byn', filter:'BodyJewelry'},
    
]
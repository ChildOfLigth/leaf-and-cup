let last_id = 0;

export interface ProductObject {
    name: string,
    price: number,
    details: string,
    imgURL: string,
    id: number;
};

type ProductList = Array<ProductObject>; 

const productsList: ProductList = [
    {name: 'Peach Touch', price: 23, details: 'Легкий фруктовий аромат для приємного ранку', imgURL: '', id: last_id++},
    {name: 'Tea Rose', price: 24, details: 'Ніжний аромат троянди додає елегантності кожній чашці', imgURL: '', id: last_id++},
    {name: 'Cascara', price: 22, details: 'Насичений смак малини, смородини й квітів османтуса.', imgURL: '', id: last_id++},
    {name: 'Darjeeling', price: 25, details: 'Дарджилінг – класика чаю Британської корони.', imgURL: '', id: last_id++},
    {name: 'Sunny Morning', price: 21, details: 'Тепло, імунітет, гармонія природи в чашці', imgURL: '', id: last_id++},
    {name: 'Forest Harmony', price: 24, details: 'Насичений смак лісової енергії', imgURL: '', id: last_id++},
    {name: 'Matcha', price: 25, details: 'Легендарний китайський зелений чай з Аньхоюй', imgURL: '', id: last_id++},   
    {name: 'Anchan', price: 23, details: 'Ніжний синій чай для гармонії та спокою', imgURL: '', id: last_id++},
];

const productsPhoto = Object.values(import.meta.glob('./assets/imgs/productsPhoto/*.webp', { eager: true }) as Record<string, { default: string }>).map(mod => mod.default);

productsList.map((objProp: ProductObject) => {
for(let i = 0; i < productsPhoto.length; i++) {
   for(let j = 0; j < productsPhoto.length; j++) {
     const prodName = objProp.name.toLowerCase().replace(/\s/, '-');
    
     if(productsPhoto[j].includes(prodName)) {
        objProp.imgURL = productsPhoto[j];
      };
    };
  };
});


let previewProducts: ProductList = [];
for(let i = 0; i < 4; i++) {
    previewProducts.push(productsList[i]);
};

export {productsList, previewProducts};



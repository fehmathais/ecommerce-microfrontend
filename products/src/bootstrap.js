import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
    // ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    // Assuming our container doesnt have an element
    if (el) {
        mount(el);
    }
}

export {mount};
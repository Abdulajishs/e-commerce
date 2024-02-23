const ProductLists = (porps) => {
    const productsArr = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ]
    return (
        <>
            {productsArr.map((item) => (
                <div>
                    <h3>{item.title}</h3>
                    <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '100%' }} />
                    <p>${item.price}</p>
                </div>
            ))}
        </>
    )
}

export default ProductLists;
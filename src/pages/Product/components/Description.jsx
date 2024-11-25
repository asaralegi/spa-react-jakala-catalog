function Description({ product }) {
    const fertilizerTypes = new Map([
        ['nitrogen', 'Nitrogenado'],
        ['phosphorus', 'Fosforado'],
    ]);    

    return (
        <>
            <h2 className="mb-3">Detalles del Producto</h2>
            <ul className="list-unstyled">
                <li><strong>Nombre Científico:</strong> {product.binomialName}</li>
                <li><strong>Precio:</strong> {product.price.toFixed(2)}€</li>
                <li><strong>Riegos por semana:</strong> {product.wateringsPerWeek}</li>
                <li><strong>Fertilizante recomendado:</strong> {fertilizerTypes.get(product.fertilizerType)}</li>
                <li><strong>Altura:</strong> {product.heightInCm}cm</li>
            </ul>
        </>
    );
}

export default Description;
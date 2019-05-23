class Product {

    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');

        const element = document.createElement('div');

        element.innerHTML = `
       <div class="card-body">
            <Strong>Product</Strong> : ${product.name}
            <Strong>Product Price</Strong> : ${product.price}
            <Strong>Product Year</Strong> : ${product.year}
            <a class="btn btn-danger mg-2" href="#" name="delete">Borrar</a>
        </div>
       
       
       
       `;


        productList.appendChild(element);

        this.ShowMessage('Producto agregado.', 'success');


    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();

            this.ShowMessage('Producto eliminado', 'danger');
        }

    }

    ShowMessage(message, cssClass) {
        const div = document.createElement('div');

        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');

        const app = document.querySelector('#app');

        container.insertBefore(div, app);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }


}

//Dom events
document.getElementById("product-form")
    .addEventListener('submit', function (e) {
        const name = document.getElementById("product-name").value;
        const price = document.getElementById("product-price").value;
        const year = document.getElementById("product-year").value;

        const UIclass = new UI();

        if (name === '' || price === '' || year === '') {
            UIclass.ShowMessage('No se permiten valores en blanco', 'danger');
        }
        else {
            const product = new Product(name, price, year);





            UIclass.addProduct(product);
            UIclass.resetForm();
        }



        e.preventDefault();


    });

document.getElementById('product-list').addEventListener("click", function (e) {

    const ui = new UI();

    ui.deleteProduct(e.target);


});
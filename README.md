# PROYECTO FINAL

Encontrarás funciones como:

* Observar todos los usuarios registrados.
* Crear un nuevo usuario.
* Iniciar sesión con los usuarios nuevos.
* Ver todos los productos disponibles y sus precios.
* Crear, editar y eliminar productos.
* Crear pedidos y pagarlos.

# Comienzo 🚀

Para iniciar sesión en [Amazon Web Services](https://aws.amazon.com/es/console/) usa los datos adjuntos en el archivo .csv

## Instalación 🔧

_Estas instrucciones te permitirán correr el proyecto y realizar las pruebas correspondientes._

1. Descomprimir el archivo .zip y guardar el archivo .pem, a su vez se debe crear un archivo .env al nivel del archivo index.js y copiar el contenido del archivo de texto llamado .env adjunto en el .zip, de lo contrario el proyecto no funcionará.

2. Correr la terminal desde donde tengas descargado el archivo .pem, por ejemplo, si el archivo lo descargas en escritorio debes moverte a la carpeta de escritorio de la siguiente manera:

```
cd '/c/Users/.../Desktop'
```

Siendo los ... el nombre de usuario que tengas en tu computadora.

3. Una vez dentro de la carpeta donde tengas el archivo .pem tendrás que correr el siguiente comando:

```
ssh ubuntu@... -i Keys.pem
```

Siendo los ... la dirección IPv4 pública de la instancia de amazon, por ejemplo, si la dirección IPv4 pública de la instancia de amazon es 44.202.101.186, ejecutarás el comando de la siguiente manera:

```
ssh ubuntu@44.202.101.186 -i Keys.pem
```

_La instancia que queda corriendo tiene como dirección IPv4 pública 34.203.227.233_

4. Una vez ejecutado el comando anterior, tendrás que entrar a las carpetas donde esta alojado el proyecto, de la siguiente manera:

```
cd CUARTOPROYECTO
```

5. Para visualizar el contenido del proyecto una vez dentro de la carpeta PROYECTOFINAL, ejecuta el siguiente comando:

```
cd BACK
```

Una vez dentro de BACK...

```
npm start
```

6. Para visualizar el front del proyecto, entra en el siguiente [link](https://apicommerce.tk)

_Para iniciar sesión cuentas con dos opciones, en el siguiente [link](https://apicommerce.tk/login.html) podrás iniciar sesión al darle clic a cualquiera de los IDP´s, una vez tengas la sesión activa, dirigete al [menu](https://apicommerce.tk/index.html).

* IMPORTANTE: Solo seleccionar un producto, darle clic en "comprar" (botón que aparece debajo de la imagen del producto), darle clic en el logo del carrito (parte superior de la web) y clic en "confirmar compra", una vez dentro de la página de [compra](https://apicommerce.tk/compra.html), si le das clic al botón rojo, crearás la orden en la base de datos, si le das clic al botón de pagar te dirigirá a la pasarela de pagos, podes darle clic a "seguir comprando", pero recuerda que la orden solo funciona con un producto.

* IMPORTANTE: Para pagar los pedidos es obligatorio tener la sesión iniciada en la cuenta de [mercado pago developers colombia](https://www.mercadolibre.com/jms/mco/lgz/login?platform_id=mp&go=https://www.mercadopago.com.co/developers/es/guides), con los datos adjuntos en el archivo .csv

_Una vez dentro de mercadopago, podrás colocar las cuotas que decidas y el código de la tarjeta de credito que lo encontrarás en el archivo .csv_

## Construido con 🛠️

* NodeJS
* Express
* Swagger
* JWT
* AWS
* Docker
## Autores ✒️

* **Jimmy Alexander Arango Ossa** - *Link* - [jimalaros](https://github.com/jimalaros/BACK)
const express = require( 'express' );
const dbConection = require('./../src/config/mongo.config.js');
const app = express();
const cors = require( 'cors' );


dbConection();      

app.use( express.json() );
app.use( cors() );
app.use(express.urlencoded({ extended: false }))



app.use( '/api/products', require( './routes/product.routes.js' ) );
app.use( '/api/categorys', require( './routes/category.routes.js' ) );
app.use('/api/users', require( './routes/user.routes.js' ) )
app.use( '/api/services', require( './routes/services.routes.js' ) );
app.use( "/api/auth", require( "./routes/auth.routes.js") );
app.use( "/api/order", require( "./routes/order.routes.js") );
app.use( "/api/citas", require( "./routes/citas.routes.js") );

module.exports = app
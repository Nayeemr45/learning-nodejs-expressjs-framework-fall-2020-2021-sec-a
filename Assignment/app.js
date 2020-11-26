//declaration
const express 			= require('express');	
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');

const login				= require('./controllers/login');
const logout			= require('./controllers/logout');
const home				= require('./controllers/home');
const user_home				= require('./controllers/user_home');
const product				= require('./controllers/product');
const edit_product				= require('./controllers/edit_product');
const delete_product 				= require('./controllers/delete_product');
const user				= require('./controllers/user');
const register				= require('./controllers/register');
const app				= express();
const port				= 3000;
const upload 	= require('express-fileupload');

//configuration
app.set('view engine', 'ejs');


//middleware
app.use('/abc', express.static('assets'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload());
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));


app.use('/login', login);
app.use('/home', home);
app.use('/user_home', user_home);
app.use('/product', product);
app.use('/logout', logout);
app.use('/user', user);
app.use('/register', register);
app.use('/edit_product', edit_product);
app.use('/delete_product', delete_product);

//router
app.get('/', (req, res)=>{
	res.send('Welcome');

});

//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
});
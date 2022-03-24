drop schema if exists orderTracking;



create schema orderTracking;



use orderTracking;



-- Customers table
create table Customers (
    firstName varchar(100) not null,
    middleName varchar(100),
    lastName varchar(100) not null,
    phone varchar(20) not null,
    email varchar(200) not null,
    address varchar(300) not null,
    city varchar(50) not null,
    region varchar(50) not null,
    zip varchar(50) not null,
    country varchar(50) not null,
    customerNotes varchar(500),
    customerId int not null auto_increment,
    primary key(customerId)
);



-- Products Table
create table Products (
    productId int auto_increment not null ,
    productSKU varchar(50) not null ,
    productPrice decimal(10,2) not null ,
    productName varchar(100) not null,
    productQuantity int not null ,
    productDescription varchar(200),
    primary key(productId)
);



-- OrderStatusCodes Table
create table OrderStatusCodes (
    orderStatusCodeId int auto_increment not null ,
    orderStatusCode varchar(50) not null ,
    -- Draft, Open, Finalized, Preparing to ship, Ready for shipping, Shipped, Delivered, Closed
    primary key (orderStatusCodeId)
);



-- Orders table
create table Orders (
    orderId int auto_increment not null ,
    datetimeOrderPlaced date not null,
    datetimeOrderFulfilled date,
    totalOrderPrice decimal(10,2) not null ,
    orderNotes varchar(200),
    customerId int not null ,
    -- productId int not null ,
    orderStatusCodeId int not null,
    primary key (orderId),
    CONSTRAINT FK_customerId FOREIGN KEY (customerId) REFERENCES Customers(customerId),
    -- CONSTRAINT FK_productId FOREIGN KEY (productId) REFERENCES Products(productId),
    CONSTRAINT FK_orderStatusCodeId FOREIGN KEY (orderStatusCodeId) REFERENCES OrderStatusCodes(orderStatusCodeId)
);



-- OrderProducts Table
create table OrderProducts (
    orderProductId int auto_increment not null ,
    quantity int not null, -- number of units purchased
    priceEach decimal(10,2) not null , -- price of each item
    -- orderNotes varchar(200),
    orderId int not null ,
    productId int not null ,
    primary key (orderProductId),
    CONSTRAINT FK_orderId FOREIGN KEY (orderId) REFERENCES Orders(orderId),
    CONSTRAINT FK_productId FOREIGN KEY (productId) REFERENCES Products(productId)
);



-- Users table
create table Users (
    loginId int not null auto_increment,
    userName varchar(100) not null,
    password varchar(255) not null,
    primary key(loginId)
);

drop schema if exists demoDB;



create schema demoDB;



use demoDB;



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


-- Insert statements to provide sample data


INSERT INTO customers (firstName, middleName, lastName, phone, email, address, city, region, zip, country)
VALUES
    ('Callum','Paul','Ogle',0744566774,'callumogle@tjx_europe.com','133 York Road','Sittingbourne','Kent','N7 7AJ', 'US'),
    ('Thierry','Daniel','Henry',1425817574,'ThierryHenry@arsenal.co.fr', '1 Premiere Route','Les Ulis','Essonne','91940', 'CA'),
    ('Gabriel','Teodoro','Martinelli',357517105,'GMartinelli@arsenal.co.br','1 Primeira Estrada','Guarulhos','Sao Paulo','02176010','UK');


INSERT INTO orderstatuscodes (orderStatusCode) 
VALUES 
    ('Draft'),
    ('Open'),
    ('Finalized'),
    ('Preparing to ship'),
    ('Ready for shipping'),
    ('Shipped'),
    ('Delivered'),
    ('Closed');


INSERT INTO orders (datetimeOrderPlaced,datetimeOrderFulfilled,TotalOrderPrice,customerId,orderStatusCodeId)
VALUES
    ('2022-03-10','2022-03-13',1000,1,8),
    ('2022-03-22','2022-03-22',10,2,2),
    ('2022-02-02','2022-03-22',100000,3,8);


INSERT INTO products (productSKU,productPrice,productName,productQuantity)
VALUES
    ('A11369420',12.50,'Irish Whiskey',10),('731ABC123',0.50,'Lime',100),('64Z00L4N3',.10,'Salt',10000);


INSERT INTO orderproducts (quantity,priceEach,orderId,productId)
VALUES
    (10,1.12,1,1),
    (100,0.5,2,2),
    (10000,0.01,2,2);

INSERT INTO users (loginId, userName, password)
VALUES
	(1, 'john', '$2a$05$hMirMXfKftfoZJwg/ry4euMXpyygPsMgzbwTU03dzk2OBEOKb54wy'),
    (2, 'paxton', '$2a$05$VAMxaYdNUFVnG8.jNLa8s.GyeQe6jRn8phDbOBde7yw3fnRYJYCE6');
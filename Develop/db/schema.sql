-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

--SYNTAX TO CREATE CATEGORY
CREATE TABLE category (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 category_name VARCHAR(255) NOT NULL
) ;

--SYNTAX TO CREATE PRODUCT
CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL (5,2) NOT NULL, 
    stock INT NOT NULL DEFAULT 10,
    category_id INT NOT NULL,
      FOREIGN KEY (category_id) references category(id)
);

--SYNTAX TO CREATE TAG
CREATE TABLE tag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(255)
);

--SYNTAX PRODUCT TAG
CREATE TABLE product_tag (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
        FOREIGN KEY (product_id) references product(id),
    tag_id INT,
        FOREIGN KEY (tag_id) references tag(id)
        
);

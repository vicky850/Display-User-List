# CRM Portal Demo (Features)
    1. Login Page: (with proper validations-- if you will not give user id and password in login page, it will give error). Default user id and password is : admin/admin

    2. Dashboard: It displays information about CRM Portal purpose. It also displays the list of newly added customers.

    3. Dashboard Customer List: You can click on the Customer from the list on the dashboard page and edit its information.

    4. Customer Menu:  It displays the list of the customers. It performs many operations like:--
            
            a) Create a new customer
            b) delete a customer by selecting the checkboxes
            3) sorting of the list by clicking on any of the header
            4) edit the customer by clicking on the Edit link
            5) Export the customer list data into Excel/CSV file.

    5. Products Menu: It display the list of products. It performs many operations like:--
            a) Create a new product by click on +Create link
            b) Edit the product on click on pencil icon on each image.
            c) Delete the product after click on pencil icon.
            d) Export the product list data into Excel/CSV file.
# Note:   The image url should be from internet. local computer image is not working now.     


# How It Works?
CRM Portal usually requires a REST/GraphQL server instead of MySql/SQL to provide data. In this demo however,the API is simulated by the browser [using-fake-json-api]. It provides lots of dummy data so we do not need to create our own data for the testing or demo. The source data is generated at runtime by a package called [data-generator].

# Technology Used
    1. React Js (Javascript Framework which is built by facebook)
    2. JSON Server (Fake Rest API for the dummy data)





**Note**: This project is built with most latest technology which is used by many big companies like facebook, twitter, instagram etc.

## How to run
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


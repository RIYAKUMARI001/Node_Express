# Node\_Express

This is a basic **Node.js** and **Express.js** web application that uses the **EJS** templating engine for rendering dynamic frontend content. The project allows basic **CRUD operations** (Create, Read, Update, Delete) using data stored in a JSON file.

## 📁 Project Structure

```
Node_Express/
├── Nodemon.js
├── data.json
├── index.js
├── package.json
├── package-lock.json
├── public/
│   └── (Static files like CSS, JS)
├── views/
│   └── (EJS templates)
└── view.js
```

## 🚀 Features

* **Express.js** for setting up routes and server.
* **EJS** as the templating engine to render dynamic HTML pages.
* **JSON-based data storage** (`data.json` acts like a mini database).
* **Nodemon** for automatic server restarts during development.
* **Static file serving** for CSS and JavaScript files from the `public` folder.
* **Basic CRUD operations**: Add, view, edit, and delete items.

## 🔧 How to Run

1. **Clone the repository**

   ```bash
   git clone https://github.com/RIYAKUMARI001/Node_Express.git
   cd Node_Express
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   node index.js
   ```

   Or if you have **nodemon** installed:

   ```bash
   nodemon index.js
   ```

4. **Visit in browser**

   ```
   http://localhost:3000
   ```

## 📂 Folder Details

* **`index.js`**: Main server file that defines routes and middleware.
* **`view.js`**: Logic related to rendering and handling view-based data.
* **`data.json`**: Stores all data in JSON format.
* **`views/`**: Contains `.ejs` template files for rendering UI.
* **`public/`**: Static assets like CSS and JavaScript files.

## 📝 Functionality

* Home page displays a list of all items.
* A form is available to add new items.
* Each item has "Edit" and "Delete" options.
* Data is stored in `data.json`, allowing a simple file-based data management system.

## 🤝 Contributing

If you want to contribute to this project, feel free to fork it, make your changes in a new branch, and submit a pull request.


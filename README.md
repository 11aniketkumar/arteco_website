# Arteco

### 1. **Clone the Repository**

```bash
git clone https://github.com/11aniketkumar/arteco_website.git
cd arteco-v2
```

---

### 2. **Install Dependencies**

Run the following command to install the required packages:

```bash
npm install
```

#### 📚 Dependencies Installed:

-   `express` - Web framework for Node.js
-   `mongoose` - MongoDB ODM
-   `cookie-parser` - Middleware to parse cookies
-   `geoip-lite` - IP geolocation lookup
-   `useragent` - User-agent parsing
-   `ejs` - Templating engine (optional)

---

### 3. **Set Up MongoDB**

-   Make sure MongoDB is running locally on port `27017`.
-   Alternatively, update your MongoDB URI in `database.js`:

```javascript
const MONGO_URI = "mongodb://localhost:27017/backend";
```

---

### 4. **Run the Application**

To run the application using **nodemon** (for automatic restarts):

```bash
npx nodemon index.js
```

If you don’t have `nodemon` installed globally, install it with:

```bash
npm install -g nodemon
```

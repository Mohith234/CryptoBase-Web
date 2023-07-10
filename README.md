
<h1 align="center"> CryptoBase Web App </h1> 
<h4 align="center"> A simple application to track the price of your favorite Cryptocurrencies. </h4>


<h2 align="left"> About the project </h2>

**CryptoBase** is a website that allows users to search for information about various cryptocurrencies in real time. The website is designed to provide users with accurate and up-to-date information about the price, market cap, trading volume, and other vital metrics of cryptocurrencies.

The website is connected to the Coingecko API, a popular public data source for cryptocurrency information. Using this API, the website provides users with real-time information about the latest cryptocurrency prices and market trends.

## Features and Interfaces

**1. Landing Page and Market Update**
   - Seamless landing page with `Sign In` and `/Sign Up` buttons for user Login using Firebase Authentication.
     <div>
     <img src="https://user-images.githubusercontent.com/88539464/252272645-6c39a4cf-efff-408c-aba5-0bfbf1265c80.png" alt="landing-page" />
     </div>
 
   - List of Top 10 crypto coins based on market capitalization with a search functionality
     <div>
     <img src="https://user-images.githubusercontent.com/88539464/252275768-8d1517e7-f3a5-4a33-84c1-a74c511e0f4d.png" alt="market-updates" />
     </div>
     
   - Witness the most trending crypto coins 📈
     <div>
     <img src="https://user-images.githubusercontent.com/88539464/252276473-6552742b-9db4-4599-9e77-88bab5819994.png" alt="landing-page" />
     </div>

**2. Dashboard Page**
   - A `Sign out` button along with the Watchlist section.
     <div>
     <img src="https://user-images.githubusercontent.com/88539464/252280947-454938b4-fdd1-4ef9-b0f2-d99633ed1c71.png" alt="landing-page" />
     </div>
 
   - Toggle between dark-light using the moon icon, according to your preference
     <div>
     <img src="https://user-images.githubusercontent.com/88539464/252281083-234aa377-1985-4975-b91c-867fa8d09e7a.png" alt="dark-mode" />
     <img src="https://user-images.githubusercontent.com/88539464/252281468-974b1828-5a08-4540-b140-b533361fe9c6.png" alt="light-mode" />
     </div>

**3. CryptoCoin Page**
   - Dedicated page for each coin to display more details
     <div>
       <img src="https://user-images.githubusercontent.com/88539464/252284530-67381a98-a1dc-4011-9181-645e91521f54.png" alt="coin=left-section" />
     </div>
     
   - A graphical representation of price updates of the crypto coin in real time
     <div>
      <img src="https://user-images.githubusercontent.com/88539464/252284557-925f82f3-9d46-472b-9fb4-17ec24a4dbb5.png" alt="coin-right-section" />
     </div>


## Tech stack

#### Frontend
- React JS
- Tailwind CSS

#### Backend
- Firebase ( Auth )
- Firestore Database

## Instructions to run Locally

1. Clone the project 
   - `git clone https://github.com/Mohith234/CryptoBase-Web.git`
3. Navigate to the project directory
   - `cd CryptoBase-Web/`
4. Install node dependencies
   - `npm install`
5. Replace Firebase API keys with your configurations
   - Get your keys from [here](https://firebase.google.com/) 
6. Create a `.env` file and set the following variables
```bash
  REACT_APP_FIREBASE_API_KEY
  REACT_APP_FIREBASE_STORAGE_BUCKET
  REACT_APP_FIREBASE_PROJECT_ID
  REACT_APP_FIREBASE_AUTH_DOMAIN
  REACT_APP_FIREBASE_MESSAGING_SENDER
  REACT_APP_FIREBASE_APP_ID
  ```
6. Start the app
   - `npm run start`
7. The app is now running 🥳

## Useful Links

- [Project Demo](https://cryptobase-af481.web.app/) Web version
- [GitHub Link](https://github.com/Mohith234/CryptoBase-Web) (Feel free to Star ⭐ the repo)

## Need help?

Feel free to contact me on [LinkedIn](https://www.linkedin.com/in/mohith-gadireddy/)

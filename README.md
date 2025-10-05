# BhumiCare

A responsive IoT-based web dashboard designed for **real-time monitoring of agricultural field conditions** using an **ESP32** microcontroller and multiple environmental sensors.  
This dashboard displays **live sensor data** such as temperature, humidity, soil moisture, EC (electrical conductivity), LDR (light intensity), and more — helping farmers and researchers make **data-driven decisions**.

---

## 🚀 Key Features

- 📊 **Real-Time Sensor Data Display**  
  Shows live readings fetched from the ESP32 board including:
  - Temperature 🌡️  
  - Humidity 💧  
  - Soil Moisture 🌱  
  - Electrical Conductivity ⚡  
  - Light Intensity ☀️  

- 🧠 **Smart Crop Recommendations**  
  - Integrated dropdown menu of **Top 50 Indian Crops**  
  - Built-in **search functionality** for quick access  
  - User can select a crop to get relevant suggestions or analytics

- 💻 **Responsive Web Dashboard**  
  - Optimized for both desktop and mobile  
  - Clean card-based UI built using modern **HTML5, CSS3, and JavaScript**  
  - Visual clarity for quick understanding of field conditions

- 🔌 **ESP32 Integration**  
  - Communicates with the dashboard over **Wi-Fi**  
  - Sends live sensor readings to update the interface dynamically  
  - Can be hosted locally or integrated with cloud services such as **Firebase** or **AWS IoT**

- 🌍 **Open Source & Easy to Host**  
  - Can be deployed using **GitHub Pages** for free  
  - No backend required; works with ESP32 as the primary data source  

---

## 🧰 Tech Stack

| Component         | Technology Used                         |
|------------------:|:---------------------------------------|
| **Frontend**      | HTML5, CSS3, JavaScript                 |
| **Backend**       | ESP32 Microcontroller                   |
| **Hosting**       | GitHub Pages / Localhost                |
| **Sensors**       | DHT11/DHT22, Soil Moisture, EC Sensor, LDR, MQ2, etc. |
| **Cloud (Optional)** | Firebase Realtime Database            |

---

## 🏗️ Project Structure

/ (root)
├── README.md # Project documentation
├── index.html # Main dashboard (CSS + JS integrated)
└── firebase-config.js # Firebase configuration (optional, modular)

> Note: All JavaScript and CSS are integrated in `index.html` for single-file deployment. `firebase-config.js` is optional but recommended for modular Firebase setup.

---

- 🛠️ Future Enhancements

  - Dynamic crop recommendations based on real-time sensor data.
  - Historical trend analytics and data logging.
  - Multi-sensor mapping on Google Maps.
  - Notifications for critical field conditions.
  - Integration with additional IoT devices and cloud platforms.

Developed by: DebuhDroid-15
Version: 5.0 — October 2025

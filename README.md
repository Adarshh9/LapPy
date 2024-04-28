**Laptop Price Prediction Web Application**

This web application predicts the price of laptops based on various specifications provided by the user. It utilizes a machine learning model trained on laptop data to make predictions. The application is built using Flask framework for the backend and HTML/CSS/JS for the frontend.

### Files Included:

1. **main.py**: This file contains the Flask server code responsible for handling HTTP requests and responses. It includes routes for the home page, retrieving data for dropdown menus, and making price predictions.

2. **utils.py**: This file includes utility functions used by the Flask server. It contains functions to load the machine learning model, preprocess data, and make price predictions.

3. **home.html**: This HTML file serves as the frontend of the application. It provides a user interface for inputting laptop specifications and displaying the predicted price.

4. **pipe.pkl**: This is a pickled machine learning pipeline containing the trained model used for price prediction.

5. **df.pkl**: This is a pickled DataFrame containing the laptop data used for training the machine learning model.

### Machine Learning Models:

The application tried various machine learning models to predict laptop prices based on the input specifications. After evaluating the models based on their accuracy, the Random Forest Regressor was chosen as the final model for predicting laptop prices.

The following machine learning models were considered:

- Linear Regression
- Lasso Regression
- Ridge Regression
- K-Nearest Neighbors (KNN) Regressor
- Decision Tree Regressor
- Random Forest Regressor (Selected as the final model)
- Gradient Boosting Regressor
- AdaBoost Regressor
- Extra Trees Regressor
- Support Vector Regressor (SVR)
- XGBoost Regressor
- Voting Regressor
- Stacking Regressor

### How to Run:

1. Ensure you have Python installed on your system.

2. Install the required dependencies by running:
   ```
   pip install flask numpy pandas scikit-learn xgboost
   ```

3. Run the Flask application by executing the following command in your terminal:
   ```
   python main.py
   ```

4. Once the server is running, open your web browser and go to `http://localhost:5000` to access the application.

### Usage:

1. **Home Page (/)**: This page displays the interface for inputting laptop specifications. Users can select various attributes such as company, type, RAM, CPU, storage, etc.

2. **Data Endpoint (/data)**: This endpoint provides JSON data containing options for dropdown menus on the home page. It includes lists of unique values for different attributes like company, type, resolution, CPU, GPU, and operating system.

3. **Price Prediction Endpoint (/predict)**: This endpoint receives a JSON object containing the user's selected laptop specifications. It then uses the trained machine learning model to predict the price based on the provided data.

### Notes:

- The machine learning model used for price prediction is trained on historical laptop data. The predicted prices may vary based on the input specifications and the underlying data distribution.

- Ensure that the necessary pickle files (`pipe.pkl` and `df.pkl`) are present in the same directory as the Python files for the application to work properly.

- This application is currently running in debug mode and can be accessed locally. For deployment in a production environment, additional configurations and security measures may be required.

Feel free to reach out for any further assistance or customization of the application!

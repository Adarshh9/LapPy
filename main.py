from flask import Flask, request, jsonify, render_template
from utils import get_utils,predict_price

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/data')
def data():
    data = get_utils()
    response = jsonify({
        'company': data['company'].tolist(),
        'type':data['type'].tolist(),
        'resolution':data['resolution'],
        'ram':data['ram'],
        'cpu':data['cpu'].tolist(),
        'hdd':data['hdd'],
        'ssd':data['ssd'],
        'gpu':data['gpu'].tolist(),
        'os':data['os'].tolist()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/predict',methods = ['POST'])
def predict():
    data = request.json  # Access JSON data
    
    estimated_price = predict_price(data)

    response = jsonify({
        'estimated_price': estimated_price
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == '__main__':
    app.run(debug=True ,port=5000)
import pickle 
import numpy as np 
import pandas as pd

pipe = pickle.load(open('pipe.pkl','rb'))
df = pickle.load(open('df.pkl','rb'))

def get_utils():
    data = {
        'company':df['Company'].unique(),
        'type':df['TypeName'].unique(),
        'resolution':['1920x1080','1366x768','1600x900','3840x2160','3200x1800','2880x1800','2560x1600','2560x1440','2304x1440'],
        'cpu':df['Cpu brand'].unique(),
        'ram':[4,8,16,32,64,128],
        'hdd':[0,128,256,512,1024,2048],
        'ssd':[0,8,128,256,512,1024],
        'gpu':df['Gpu brand'].unique(),
        'os':df['os'].unique()
    }
    return data

def predict_price(data):

    company = data['company']
    type = data['type']
    ram = int(data['ram'])
    weight = float(data['weight'])  # Change to float for weight
    touchscreen = int(data['touchscreen'])
    ips = int(data['ips'])
    screensize = float(data['screensize'])  # Change to float for screensize
    resolution = data['resolution']
    cpu = data['cpu']
    hdd = int(data['hdd'])
    ssd = int(data['ssd'])
    gpu = data['gpu']
    os = data['os']

    X_res = int(resolution.split('x')[0])
    Y_res = int(resolution.split('x')[1])
    ppi = ((X_res**2) + (Y_res**2))**0.5/screensize
    query = np.array([company,type,ram,weight,touchscreen,ips,ppi,cpu,hdd,ssd,gpu,os])

    query = query.reshape(1,12)
    estimated_price = int(np.exp(pipe.predict(query)[0]))

    return estimated_price
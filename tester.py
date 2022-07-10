import requests

url = "http://localhost:8000/v1/auth/register"
params = {
    "name": "iociao",
    "email": "dipac@gmail.com",
    "password": "ciaociao",
    "repeat_password": "ciaociao"
}

r = requests.post(url, json=params)
print(r.text)
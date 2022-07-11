import requests

print("Register")
url = "http://localhost:8000/v1/user/register"
params = {
    "name": "iociao",
    "email": "dipac@gmail.com",
    "password": "ciaociao",
    "repeat_password": "ciaociao"
}

r = requests.post(url, json=params)
print(r.text)
print("Login")
url = "http://localhost:8000/v1/user/login"
params = {
    "email": "dipac@gmail.com",
    "password": "ciaociao",
}
r = requests.post(url, json=params)
print(r.text)
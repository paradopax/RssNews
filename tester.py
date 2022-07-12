import requests

name        = "AndreaDipace"
email       = "andrea.dipace.00@gmail.com"
password    = "ciaone"

class User:

    authBaseUrl = "http://localhost:8000/v1/user/"
    sourceBaseUrl = "http://localhost:8000/v1/source/"

    def __init__(self, name, email, password):
        self.name       = name
        self.email      = email
        self.password   = password

    def register(self):
        url = self.authBaseUrl + "register"
        params = {
            "name": self.name,
            "email": self.email,
            "password": self.password,
            "repeat_password": self.password
        }
        r = requests.post(url, json=params)
        self.token = r.json()['token']

        self.headers = {
            "authorization": "Bearer " + self.token
        }
    
    def login(self):
        url = self.authBaseUrl + "login"
        params = {
            "email": self.email,
            "password": self.password
        }
        r = requests.post(url, json=params)
        self.token = r.json()['token']

        self.headers = {
            "authorization": "Bearer " + self.token
        }

    def getProfile(self):
        url = self.authBaseUrl + "profile"
        r = requests.get(url, headers=self.headers)
        print(r.json())

    def addSource(self, urlToAdd):
        url = self.sourceBaseUrl +"add"
        params = {
            "url": urlToAdd
        }
        r = requests.post(url, json=params, headers=self.headers)
        print(r.text)

    def follow(self, sourceID, notif=False):
        url = self.sourceBaseUrl +"follow"
        params = {
            "sourceId": sourceID
        }
        r = requests.post(url, json=params, headers=self.headers)
        print(r.text)

    def unfollow(self, sourceID, notif=False):
        url = self.sourceBaseUrl +"unfollow"
        params = {
            "sourceId": sourceID
        }
        r = requests.post(url, json=params, headers=self.headers)
        print(r.text)

u = User(name, email, password)
try:
    u.register()
    print("User register")
except:
    u.login()
    print("User login")

url1 = "https://waitbutwhy.com/feed"
#u.addSource(url1)
u.follow(1)
u.unfollow(1)
u.unfollow(2)
#!/usr/bin/env python3
import requests

name        = "AndreaDipace"
email       = "andrea.dipace.00@gmail.com"
password    = "ciaone"

urls = [
    "https://www.giallozafferano.it/feed-www",
    "https://www.ansa.it/sito/notizie/topnews/topnews_rss.xml",
    "https://explosm.net/rss.xml",
    "https://waitbutwhy.com/feed",
]

class User:

    authBaseUrl = "http://localhost:8000/v1/user/"
    sourceBaseUrl = "http://localhost:8000/v1/source/"
    categoryBaseUrl = "http://localhost:8000/v1/usercategory/"

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
        return r.json()

    def addSource(self, urlToAdd):
        url = self.sourceBaseUrl +"add"
        params = {
            "url": urlToAdd
        }
        r = requests.post(url, json=params, headers=self.headers)
        print(f"{r.status_code} add source {urlToAdd}")
        return r.json()

    def follow(self, sourceID, categoryID, notif=False):
        url = self.sourceBaseUrl +"follow"
        params = {
            "sourceId": sourceID,
            "categoryId": categoryID,
            "notification": notif
        }
        r = requests.post(url, json=params, headers=self.headers)
        print(f"{r.status_code} follow {sourceID}")
        return r.json()

    def unfollow(self, sourceID, categoryID, notif=False):
        url = self.sourceBaseUrl +"unfollow"
        params = {
            "sourceId": sourceID,
            "categoryId": categoryID
        }
        r = requests.post(url, json=params, headers=self.headers)
        print(f"{r.status_code} unfollow {sourceID}")
        return r.json()

    def addCategory(self, name):
        url = self.categoryBaseUrl
        params = {
            "name": name
        }
        r = requests.post(url, json=params, headers=self.headers)
        print(f"{r.status_code} add category")
        return r.json()
    
    def updateCategory(self, id, name):
        url = self.categoryBaseUrl
        params = {
            "id": id,
            "name": name
        }
        r = requests.put(url, json=params, headers=self.headers)
        print(f"{r.status_code} update category")
        return r.json()
    
    def removeCategory(self, cid):
        url = self.categoryBaseUrl
        params = {
            "id": cid
        }
        r = requests.delete(url, json=params, headers=self.headers)
        print(f"{r.status_code} remove category")
        return r.json()


u = User(name, email, password)
try:
    u.register()
    print("User register")
except:
    u.login()
    print("User login")

u.addSource(urls[2])
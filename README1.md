to set api key to a variable
```
 heroku config:set API_KEY="paste key here without quotes"
```
securing the key
```
heroku config:get API_KEY -s >> .env 
```

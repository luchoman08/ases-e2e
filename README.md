# e2e tests for ASES 


Install nodejs > 10 (debes tener curl, si no lo tienes favor instalarlo)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
source ~/.bashrc
nvm install 10
nvm alias default 10
```


Install geckodriver
```bash
wget https://github.com/mozilla/geckodriver/releases/download/v0.23.0/geckodriver-v0.23.0-linux64.tar.gz
sudo sh -c 'tar -x geckodriver -zf geckodriver-v0.23.0-linux64.tar.gz -O > /usr/bin/geckodriver'
sudo chmod +x /usr/bin/geckodriver
rm geckodriver-v0.23.0-linux64.tar.gz
```


Next:

Install dependences: `npm install`  
Run tests: `npm test`  
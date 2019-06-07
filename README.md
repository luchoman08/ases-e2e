# e2e tests for ASES 

**All the files for testing should be end in .spec.ts**

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
Run tests: `npm run test`  


 # Test only one file

 ```bash
 npm run test-one dist/some-test.spec.js
 ```
# Common issues
All the `describe` functions should have a long time out, otherwise the test will be fail for time, this is set with `this.timeout(6000 /* in milliseconds */)`, for example: 
```js
describe("Test index page", async function ()  {
    let driver: WebDriver;
    this.timeout(60000);
    it("im never fail", ()=> {
        expect(true).to.be.eq(true);
    })
);
```
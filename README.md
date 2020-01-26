# axios-tx (works in node & web)

Use this to abort multiple/nested axios rest operations at once, by using the returned axios instance and axios.cancel functions

# installation

npm i axios-tx

# usage example

```
import { axiosTx } from 'axios-tx';

const axiosConfig = {}; // optional
const txInstance = axiosTx(axiosConfig);
txInstance.get("someUrl1").then(console.log).catch(console.error); // will log an error
txInstance.get("someUrl2").then(console.log).catch(console.error); // will log an error
txInstance.cancel(); // cancels only previously pending promises
txInstance.get("someUrl3").then(console.log).catch(console.error); // will log results
```

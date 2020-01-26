# axios-tx (works in node & web)

Use this to cancel multiple/nested axios rest operations at once, by using the axiosTx factory function, that returnes an axios instance what has a cancel function, which cancels all pending promises that originate from it

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

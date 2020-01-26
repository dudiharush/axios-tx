# axios-tx (works in node & web)

Use this to abort multiple/nested axios rest operations at once, by using the returned axios instance and axios.cancel functions

# installation

npm i axios-tx

# usage example

```
import { axiosTx } from 'axios-tx';

const axiosConfig = {}; // optional
const txInstance = axiosTx(axiosConfig);
const urls = ['url1', 'url2', 'url3'];
const promiseArray = urls.map(async url => await txInstance.get(url));
const resArray = await Promise.all(promiseArray);

txInstance.cancel(); // cancel all txInstance's pending rest operations.
```

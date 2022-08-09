# React Context Pokemon

This is a simple project to improve my React skills. The app uses **Context** so the Pokemons data is available anywhere in the app. The code that allows me to do this is the following:

```js
import React, { useState } from 'react';

const Context = React.createContext({});

export function PokemonsContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  return <Context.Provider value={{ favorites, setFavorites }}>{children}</Context.Provider>;
}

export default Context;
```

I have used [this Midudev video](https://www.youtube.com/watch?v=2qgs7buSnHQ&ab_channel=midudev) about `Context` and I adapted it to this project.

### 💛 Contact

If you have some doubts or need to ask something about the project, feel free to reach me here:

- Twitter: [https://twitter.com/jgcarrillo](https://twitter.com/jgcarrillo_)
- LinkedIn: [https://es.linkedin.com/in/jgcarrilloweb](https://es.linkedin.com/in/jgcarrilloweb)
- Website: [https://jgcarrillo.com/](https://jgcarrillo.com/)

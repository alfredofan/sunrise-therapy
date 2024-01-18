Assets:

- Location: src/assets/
- Purpose: The "assets" folder is where you store static assets such as images, styles, fonts, or any other files that don't contain code logic. Placing these assets in a separate folder helps keep your source code clean and separates the content that is part of the user interface from the code logic.

src/
|-- assets/
| |-- images/
| | |-- logo.png
| |
| |-- styles/
| |-- app.css

- Example: You might have a logo image and a global stylesheet in your "assets" folder.

Usage in Components:

You can use the images in your components like this:

---

// src/components/common/Header.js
import React from 'react';
import logo from '../../assets/images/logo.png';

const Header = () => {
return (
<div>
<img src={logo} alt="Logo" />
</div>
);
};

## export default Header;

You can import global styles in your components or include them in your main index.js or App.js file.
